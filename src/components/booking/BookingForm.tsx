import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { useToast } from '../ui/Toast';
import BookingCalendar from './BookingCalendar';
import ServiceSelector, { ServiceOption } from './ServiceSelector';
import TimeSlotPicker, { TimeSlot } from './TimeSlotPicker';
import { User, Mail, Phone, MessageSquare, Calendar, Clock, CheckCircle, Send } from 'lucide-react';
import { format } from 'date-fns';

// Form validation schema
const createBookingSchema = (language: 'cs' | 'ru') => z.object({
  name: z.string().min(2, language === 'cs' ? 'Jméno musí mít alespoň 2 znaky' : 'Имя должно содержать минимум 2 символа'),
  email: z.string().email(language === 'cs' ? 'Neplatná e-mailová adresa' : 'Неверный адрес электронной почты'),
  phone: z.string().min(9, language === 'cs' ? 'Neplatné telefonní číslo' : 'Неверный номер телефона'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<ReturnType<typeof createBookingSchema>>;

interface BookingFormProps {
  onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const { language } = useLanguage();
  const { addToast } = useToast();
  
  // Booking state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form setup
  const bookingSchema = createBookingSchema(language);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  // Step navigation
  const steps = [
    { id: 1, name: language === 'cs' ? 'Služba' : 'Услуга', icon: MessageSquare },
    { id: 2, name: language === 'cs' ? 'Datum' : 'Дата', icon: Calendar },
    { id: 3, name: language === 'cs' ? 'Čas' : 'Время', icon: Clock },
    { id: 4, name: language === 'cs' ? 'Kontakt' : 'Контакт', icon: User },
  ];

  const canProceedToStep = (step: number) => {
    switch (step) {
      case 2: return selectedService !== null;
      case 3: return selectedService !== null && selectedDate !== null;
      case 4: return selectedService !== null && selectedDate !== null && selectedTime !== null;
      default: return true;
    }
  };

  const handleNext = () => {
    if (currentStep < 4 && canProceedToStep(currentStep + 1)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedService || !selectedDate || !selectedTime) {
      addToast({
        type: 'error',
        title: language === 'cs' ? 'Chyba' : 'Ошибка',
        description: language === 'cs' 
          ? 'Prosím vyberte službu, datum a čas'
          : 'Пожалуйста, выберите услугу, дату и время'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS (replace with your actual keys)
      emailjs.init('YOUR_PUBLIC_KEY');

      // Format booking details
      const bookingDetails = {
        customerName: data.name,
        customerEmail: data.email,
        customerPhone: data.phone,
        message: data.message || '',
        service: selectedService.title,
        servicePrice: selectedService.isConsultation ? 'Free' : `${selectedService.price} CZK`,
        date: format(selectedDate, 'dd.MM.yyyy'),
        time: selectedTime.label,
        language: language,
        bookingDateTime: `${format(selectedDate, 'dd.MM.yyyy')} ${selectedTime.label}`,
        toName: 'Natalya Shakh',
      };

      // Send booking confirmation email
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_BOOKING_TEMPLATE_ID',
        bookingDetails,
        'YOUR_PUBLIC_KEY'
      );

      // Success feedback
      addToast({
        type: 'success',
        title: language === 'cs' ? 'Úspěch!' : 'Успех!',
        description: language === 'cs' 
          ? 'Vaše rezervace byla úspěšně odeslána. Brzy vás budeme kontaktovat.'
          : 'Ваша бронь была успешно отправлена. Мы скоро с вами свяжемся.'
      });

      // Reset form
      reset();
      setSelectedDate(null);
      setSelectedService(null);
      setSelectedTime(null);
      setCurrentStep(1);

      onSuccess?.();

    } catch (error) {
      console.error('Booking Error:', error);
      addToast({
        type: 'error',
        title: language === 'cs' ? 'Chyba' : 'Ошибка',
        description: language === 'cs' 
          ? 'Došlo k chybě při odesílání rezervace. Zkuste to prosím znovu.'
          : 'Произошла ошибка при отправке брони. Пожалуйста, попробуйте еще раз.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress indicator */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentStep >= step.id 
                      ? 'bg-brand-emerald text-white' 
                      : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.id ? 'text-brand-emerald' : 'text-neutral-500'
                    }`}>
                      {step.name}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-brand-emerald' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step content */}
      <div className="space-y-6">
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <ServiceSelector
            selectedService={selectedService}
            onServiceSelect={(service) => {
              setSelectedService(service);
              if (service) {
                setTimeout(() => handleNext(), 500);
              }
            }}
          />
        )}

        {/* Step 2: Date Selection */}
        {currentStep === 2 && (
          <BookingCalendar
            selectedDate={selectedDate}
            onDateSelect={(date) => {
              setSelectedDate(date);
              if (date) {
                setTimeout(() => handleNext(), 500);
              }
            }}
          />
        )}

        {/* Step 3: Time Selection */}
        {currentStep === 3 && (
          <TimeSlotPicker
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onTimeSelect={(timeSlot) => {
              setSelectedTime(timeSlot);
              if (timeSlot) {
                setTimeout(() => handleNext(), 500);
              }
            }}
          />
        )}

        {/* Step 4: Contact Information */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-navy flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {language === 'cs' ? 'Kontaktní údaje' : 'Контактная информация'}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="text-brand-emerald border-brand-emerald">
                      {selectedService?.title}
                    </Badge>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-600">
                      {selectedDate && format(selectedDate, 'dd.MM.yyyy')} {selectedTime?.label}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        {language === 'cs' ? 'Jméno a příjmení' : 'Имя и фамилия'} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <Input
                          {...register('name')}
                          className="pl-10"
                          placeholder={language === 'cs' ? 'Vaše jméno' : 'Ваше имя'}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        {language === 'cs' ? 'Telefon' : 'Телефон'} *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <Input
                          {...register('phone')}
                          className="pl-10"
                          placeholder={language === 'cs' ? '+420 123 456 789' : '+420 123 456 789'}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      {language === 'cs' ? 'E-mail' : 'E-mail'} *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <Input
                        {...register('email')}
                        type="email"
                        className="pl-10"
                        placeholder={language === 'cs' ? 'vase@email.cz' : 'ваш@email.com'}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      {language === 'cs' ? 'Zpráva (volitelně)' : 'Сообщение (необязательно)'}
                    </label>
                    <Textarea
                      {...register('message')}
                      rows={3}
                      placeholder={language === 'cs' 
                        ? 'Další informace o vašich potřebách...'
                        : 'Дополнительная информация о ваших потребностях...'}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                      className="flex-1"
                    >
                      {language === 'cs' ? 'Zpět' : 'Назад'}
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      className="flex-1"
                    >
                      {!isSubmitting && <Send className="w-4 h-4 mr-2" />}
                      {language === 'cs' ? 'Odeslat rezervaci' : 'Отправить бронь'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Navigation buttons for other steps */}
      {currentStep < 4 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                {language === 'cs' ? 'Zpět' : 'Назад'}
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceedToStep(currentStep + 1)}
              >
                {language === 'cs' ? 'Pokračovat' : 'Продолжить'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 