import { useState } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { format, isSameDay, isWeekend, addDays, startOfToday } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import './booking-calendar.css';

interface BookingCalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  unavailableDates?: Date[];
}

export default function BookingCalendar({
  selectedDate,
  onDateSelect,
  unavailableDates = [],
}: BookingCalendarProps) {
  const { language } = useLanguage();
  const [activeDate, setActiveDate] = useState(new Date());

  const today = startOfToday();
  const maxDate = addDays(today, 60); // Allow booking up to 2 months ahead

  // Check if date is available for booking
  const isDateAvailable = (date: Date) => {
    // Disable weekends
    if (isWeekend(date)) return false;

    // Disable past dates
    if (date < today) return false;

    // Disable unavailable dates
    if (unavailableDates.some(unavailableDate => isSameDay(date, unavailableDate))) {
      return false;
    }

    return true;
  };

  // Custom tile content for calendar
  const tileContent = ({ date }: { date: Date }) => {
    if (selectedDate && isSameDay(date, selectedDate)) {
      return <div className="absolute inset-0 bg-brand-emerald rounded-lg opacity-20" />;
    }

    if (!isDateAvailable(date)) {
      return <div className="absolute inset-0 bg-neutral-200 rounded-lg opacity-50" />;
    }

    return null;
  };

  // Custom tile class names
  const tileClassName = ({ date }: { date: Date }) => {
    const classes = ['calendar-tile'];

    if (selectedDate && isSameDay(date, selectedDate)) {
      classes.push('selected');
    }

    if (!isDateAvailable(date)) {
      classes.push('unavailable');
    } else {
      classes.push('available');
    }

    return classes.join(' ');
  };

  const handleDateChange = (value: any) => {
    if (value && value instanceof Date && isDateAvailable(value)) {
      onDateSelect(value);
    } else if (Array.isArray(value) && value[0] instanceof Date && isDateAvailable(value[0])) {
      onDateSelect(value[0]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-brand-navy">
            {language === 'cs' ? 'Vyberte datum' : 'Выберите дату'}
          </CardTitle>
          <div className="flex flex-wrap gap-2 text-xs">
            <Badge variant="outline" className="text-brand-emerald border-brand-emerald">
              {language === 'cs' ? 'Dostupné' : 'Доступно'}
            </Badge>
            <Badge variant="outline" className="text-neutral-500">
              {language === 'cs' ? 'Nedostupné' : 'Недоступно'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="booking-calendar-wrapper">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              activeStartDate={activeDate}
              onActiveStartDateChange={({ activeStartDate }) =>
                setActiveDate(activeStartDate || new Date())
              }
              minDate={today}
              maxDate={maxDate}
              tileContent={tileContent}
              tileClassName={tileClassName}
              tileDisabled={({ date }) => !isDateAvailable(date)}
              showNeighboringMonth={false}
              locale={language === 'cs' ? 'cs-CZ' : 'ru-RU'}
              formatShortWeekday={(_, date) => {
                const weekdays =
                  language === 'cs'
                    ? ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So']
                    : ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
                return weekdays[date.getDay()];
              }}
              formatMonthYear={(_, date) => {
                const months =
                  language === 'cs'
                    ? [
                        'Leden',
                        'Únor',
                        'Březen',
                        'Duben',
                        'Květen',
                        'Červen',
                        'Červenec',
                        'Srpen',
                        'Září',
                        'Říjen',
                        'Listopad',
                        'Prosinec',
                      ]
                    : [
                        'Январь',
                        'Февраль',
                        'Март',
                        'Апрель',
                        'Май',
                        'Июнь',
                        'Июль',
                        'Август',
                        'Сентябрь',
                        'Октябрь',
                        'Ноябрь',
                        'Декабрь',
                      ];
                return `${months[date.getMonth()]} ${date.getFullYear()}`;
              }}
            />
          </div>

          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-brand-emerald/5 border border-brand-emerald/20 rounded-lg"
            >
              <p className="text-sm font-medium text-brand-emerald">
                {language === 'cs' ? 'Vybrané datum:' : 'Выбранная дата:'}{' '}
                {format(selectedDate, language === 'cs' ? 'dd.MM.yyyy' : 'dd.MM.yyyy')}
              </p>
            </motion.div>
          )}

          <div className="mt-4 text-xs text-neutral-500 space-y-1">
            <p>
              {language === 'cs'
                ? '• Termíny jsou dostupné pondělí až pátek'
                : '• Встречи доступны с понедельника по пятницу'}
            </p>
            <p>
              {language === 'cs'
                ? '• Pracovní doba: 9:00 - 17:00'
                : '• Рабочее время: 9:00 - 17:00'}
            </p>
            <p>
              {language === 'cs'
                ? '• Rezervace možná do 2 měsíců dopředu'
                : '• Бронирование возможно на 2 месяца вперед'}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
