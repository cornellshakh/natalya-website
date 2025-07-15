import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Clock, Calendar } from 'lucide-react';
import { format, isToday, addMinutes, isBefore } from 'date-fns';
import { cn } from '@/lib/utils';

export interface TimeSlot {
  time: string;
  label: string;
  available: boolean;
  isPastToday?: boolean;
}

interface TimeSlotPickerProps {
  selectedDate: Date | null;
  selectedTime: TimeSlot | null;
  onTimeSelect: (timeSlot: TimeSlot) => void;
  unavailableSlots?: string[];
}

export default function TimeSlotPicker({ 
  selectedDate, 
  selectedTime, 
  onTimeSelect, 
  unavailableSlots = [] 
}: TimeSlotPickerProps) {
  const { language } = useLanguage();

  // Generate time slots based on business hours (9:00-17:00)
  const generateTimeSlots = (date: Date | null): TimeSlot[] => {
    if (!date) return [];

    const slots: TimeSlot[] = [];
    const startHour = 9; // 9:00 AM
    const endHour = 17; // 5:00 PM
    const lunchStart = 12; // 12:00 PM
    const lunchEnd = 13; // 1:00 PM

    for (let hour = startHour; hour < endHour; hour++) {
      // Skip lunch hour (12:00-13:00)
      if (hour >= lunchStart && hour < lunchEnd) {
        continue;
      }

      const timeString = `${hour.toString().padStart(2, '0')}:00`;
      const timeLabel = language === 'cs' 
        ? `${hour}:00`
        : `${hour}:00`;

      // Check if this time slot is in the past (for today only)
      let isPastToday = false;
      if (isToday(date)) {
        const slotDateTime = new Date(date);
        slotDateTime.setHours(hour, 0, 0, 0);
        const now = new Date();
        // Add 2 hours buffer for booking
        const bufferTime = addMinutes(now, 120);
        isPastToday = isBefore(slotDateTime, bufferTime);
      }

      // Check if slot is unavailable
      const isUnavailable = unavailableSlots.includes(timeString);

      slots.push({
        time: timeString,
        label: timeLabel,
        available: !isPastToday && !isUnavailable,
        isPastToday
      });
    }

    return slots;
  };

  const timeSlots = generateTimeSlots(selectedDate);
  const availableSlots = timeSlots.filter(slot => slot.available);

  if (!selectedDate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-navy flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {language === 'cs' ? 'Vyberte čas' : 'Выберите время'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-neutral-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-neutral-300" />
              <p>
                {language === 'cs' 
                  ? 'Nejprve vyberte datum pro zobrazení dostupných časů'
                  : 'Сначала выберите дату для отображения доступного времени'}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-brand-navy flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {language === 'cs' ? 'Vyberte čas' : 'Выберите время'}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span>
              {format(selectedDate, language === 'cs' ? 'dd.MM.yyyy' : 'dd.MM.yyyy')}
            </span>
            <Badge variant="outline" className="text-xs">
              {availableSlots.length} {language === 'cs' ? 'dostupných' : 'доступно'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {availableSlots.length === 0 ? (
            <div className="text-center py-8">
              <Clock className="w-12 h-12 mx-auto mb-3 text-neutral-300" />
              <h3 className="font-medium text-neutral-700 mb-2">
                {language === 'cs' ? 'Žádné dostupné termíny' : 'Нет доступных слотов'}
              </h3>
              <p className="text-sm text-neutral-500">
                {language === 'cs' 
                  ? 'Pro tento den nejsou k dispozici žádné volné termíny. Zkuste vybrat jiný den.'
                  : 'На этот день нет свободных слотов. Попробуйте выбрать другой день.'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {timeSlots.map((slot, index) => (
                  <motion.button
                    key={slot.time}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => slot.available && onTimeSelect(slot)}
                    disabled={!slot.available}
                    className={cn(
                      'p-3 rounded-lg text-sm font-medium transition-all duration-200',
                      'border focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:ring-offset-2',
                      selectedTime?.time === slot.time
                        ? 'bg-brand-emerald text-white border-brand-emerald shadow-md'
                        : slot.available
                          ? 'border-neutral-200 hover:border-brand-emerald hover:bg-brand-emerald/5 text-neutral-700'
                          : 'border-neutral-100 bg-neutral-50 text-neutral-400 cursor-not-allowed',
                      slot.available && 'hover:scale-105 active:scale-95'
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">{slot.label}</span>
                      {slot.isPastToday && (
                        <span className="text-xs mt-1">
                          {language === 'cs' ? 'Prošlé' : 'Прошедшее'}
                        </span>
                      )}
                      {!slot.available && !slot.isPastToday && (
                        <span className="text-xs mt-1">
                          {language === 'cs' ? 'Obsazeno' : 'Занято'}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-brand-emerald/5 border border-brand-emerald/20 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-emerald/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-emerald">
                        {language === 'cs' ? 'Vybraný termín:' : 'Выбранное время:'}
                      </p>
                      <p className="text-sm text-neutral-700">
                        {format(selectedDate, language === 'cs' ? 'dd.MM.yyyy' : 'dd.MM.yyyy')} 
                        {' '}{language === 'cs' ? 'v' : 'в'} {selectedTime.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mt-4 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-emerald/20 rounded border border-brand-emerald/30" />
                  <span>
                    {language === 'cs' ? 'Dostupné termíny' : 'Доступные слоты'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neutral-100 rounded border border-neutral-200" />
                  <span>
                    {language === 'cs' ? 'Nedostupné nebo obsazené' : 'Недоступные или занятые'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-emerald rounded border border-brand-emerald" />
                  <span>
                    {language === 'cs' ? 'Vybraný termín' : 'Выбранное время'}
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 text-sm mb-1">
                  {language === 'cs' ? 'Důležité informace:' : 'Важная информация:'}
                </h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>
                    {language === 'cs' 
                      ? '• Termíny lze rezervovat minimálně 2 hodiny dopředu'
                      : '• Встречи можно бронировать минимум за 2 часа'}
                  </li>
                  <li>
                    {language === 'cs' 
                      ? '• Pracovní doba: 9:00-17:00 (přestávka 12:00-13:00)'
                      : '• Рабочее время: 9:00-17:00 (перерыв 12:00-13:00)'}
                  </li>
                  <li>
                    {language === 'cs' 
                      ? '• Každý termín trvá 1 hodinu'
                      : '• Каждая встреча длится 1 час'}
                  </li>
                </ul>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
} 