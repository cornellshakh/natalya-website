import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, CheckCircle2, Shield, Headphones, Award } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';

export default function Booking() {
  const { language } = useLanguage();

  const features = [
    {
      icon: CheckCircle2,
      title: language === 'cs' ? 'Rychlé a jednoduché' : 'Быстро и просто',
      description: language === 'cs' ? 'Rezervace termínu za 3 kroky' : 'Бронирование за 3 шага',
    },
    {
      icon: Shield,
      title: language === 'cs' ? 'Bezpečné a důvěryhodné' : 'Безопасно и надежно',
      description: language === 'cs' ? 'Vaše údaje jsou v bezpečí' : 'Ваши данные в безопасности',
    },
    {
      icon: Headphones,
      title: language === 'cs' ? 'Okamžité potvrzení' : 'Мгновенное подтверждение',
      description:
        language === 'cs'
          ? 'E-mail potvrzení během 24 hodin'
          : 'Email подтверждение в течение 24 часов',
    },
    {
      icon: Award,
      title: language === 'cs' ? 'Profesionální služby' : 'Профессиональные услуги',
      description: language === 'cs' ? 'Více než 10 let zkušeností' : 'Более 10 лет опыта',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={
          language === 'cs'
            ? 'Rezervace termínu - Natalya Shakh'
            : 'Бронирование встречи - Natalya Shakh'
        }
        description={
          language === 'cs'
            ? 'Rezervujte si termín pro konzultaci s naším účetním týmem. Rychlé a jednoduché online rezervace dostupné 24/7.'
            : 'Забронируйте встречу для консультации с нашей бухгалтерской командой. Быстрое и простое онлайн бронирование доступно 24/7.'
        }
        keywords={
          language === 'cs'
            ? 'rezervace termínu, účetní konzultace, online booking, daňové poradenství, Praha'
            : 'бронирование встречи, бухгалтерская консультация, онлайн бронирование, налоговое консультирование, Прага'
        }
        canonical="https://natalya-website.vercel.app/booking"
      />
      <StructuredData type="service" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 border-white text-white">
              {language === 'cs' ? 'Online rezervace' : 'Онлайн бронирование'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {language === 'cs' ? 'Rezervujte si termín' : 'Забронируйте встречу'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {language === 'cs'
                ? 'Rychlé a jednoduché online rezervace pro vaše účetní a daňové potřeby'
                : 'Быстрое и простое онлайн бронирование для ваших бухгалтерских и налоговых потребностей'}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{language === 'cs' ? 'Dostupné termíny' : 'Доступные встречи'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{language === 'cs' ? 'Po-Pá 9:00-17:00' : 'Пн-Пт 9:00-17:00'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-4">
              {language === 'cs'
                ? 'Proč si vybrat naše rezervace?'
                : 'Почему выбрать наше бронирование?'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Jednoduché, rychlé a bezpečné rezervace termínů online'
                : 'Простое, быстрое и безопасное бронирование встреч онлайн'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
              {language === 'cs' ? 'Rezervujte si termín' : 'Забронируйте встречу'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Následujte jednoduchý průvodce pro rezervaci termínu. Celý proces trvá pouze několik minut.'
                : 'Следуйте простому мастеру для бронирования встречи. Весь процесс займет всего несколько минут.'}
            </p>
          </motion.div>

          <BookingForm
            onSuccess={() => {
              // Could add analytics tracking here
              console.log('Booking completed successfully');
            }}
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">
              {language === 'cs'
                ? 'Potřebujete pomoc s rezervací?'
                : 'Нужна помощь с бронированием?'}
            </h3>
            <p className="text-neutral-600 mb-6">
              {language === 'cs'
                ? 'Neváhejte nás kontaktovat, pokud máte jakékoli otázky nebo potřebujete pomoc.'
                : 'Не стесняйтесь связаться с нами, если у вас есть вопросы или нужна помощь.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="tel:+420123456789"
                className="flex items-center gap-2 text-brand-emerald hover:text-brand-emerald/80 transition-colors"
              >
                <span className="w-8 h-8 border border-brand-emerald/20 rounded-full flex items-center justify-center">
                  📞
                </span>
                +420 123 456 789
              </a>
              <a
                href="mailto:info@natalyashakh.cz"
                className="flex items-center gap-2 text-brand-emerald hover:text-brand-emerald/80 transition-colors"
              >
                <span className="w-8 h-8 border border-brand-emerald/20 rounded-full flex items-center justify-center">
                  ✉️
                </span>
                info@natalyashakh.cz
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-blue-800">
                <strong>{language === 'cs' ? 'Důležité:' : 'Важно:'}</strong>
                <br />
                {language === 'cs'
                  ? 'Rezervace bude potvrzena e-mailem do 24 hodin. V případě nutnosti vás budeme kontaktovat telefonicky.'
                  : 'Бронирование будет подтверждено по электронной почте в течение 24 часов. При необходимости мы свяжемся с вами по телефону.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
