import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import Section from '../components/layout/Section';
import SEOHead from '../components/SEO/SEOHead';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Users,
  Calendar,
  Shield
} from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'cs' ? 'Telefon' : 'Телефон',
      value: '+420 722 243 337',
      description: language === 'cs' ? 'Po-Pá 9:00-17:00' : 'Пн-Пт 9:00-17:00',
      action: () => window.open('tel:+420722243337')
    },
    {
      icon: Mail,
      title: language === 'cs' ? 'Email' : 'Email',
      value: 'info@natalyashakh.cz',
      description: language === 'cs' ? 'Odpovídáme do 24h' : 'Отвечаем в течение 24ч',
      action: () => window.open('mailto:info@natalyashakh.cz')
    },
    {
      icon: MapPin,
      title: language === 'cs' ? 'Adresa' : 'Адрес',
      value: 'Praha, Česká republika',
      description: language === 'cs' ? 'Schůzky po dohodě' : 'Встречи по договоренности',
      action: () => {}
    }
  ];

  const serviceTypes = [
    language === 'cs' ? 'Vedení účetnictví' : 'Ведение бухгалтерии',
    language === 'cs' ? 'Daňové poradenství' : 'Налоговое консультирование',
    language === 'cs' ? 'Mzdová agenda' : 'Расчет зарплат',
    language === 'cs' ? 'Zakládání společnosti' : 'Регистрация компании',
    language === 'cs' ? 'Právní služby' : 'Юридические услуги',
    language === 'cs' ? 'Jiné' : 'Другое'
  ];

  const benefits = [
    {
      icon: Clock,
      title: language === 'cs' ? 'Rychlá odpověď' : 'Быстрый ответ',
      description: language === 'cs' ? 'Odpovídáme do 2 hodin v pracovní době' : 'Отвечаем в течение 2 часов в рабочее время'
    },
    {
      icon: Shield,
      title: language === 'cs' ? 'Diskrétnost' : 'Конфиденциальность',
      description: language === 'cs' ? 'Vaše údaje jsou v bezpečí' : 'Ваши данные в безопасности'
    },
    {
      icon: Users,
      title: language === 'cs' ? 'Osobní přístup' : 'Персональный подход',
      description: language === 'cs' ? 'Řešení šité na míru vašim potřebám' : 'Решения, адаптированные под ваши потребности'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={language === 'cs' ? 'Kontakt - Natalya Shakh' : 'Контакт - Natalya Shakh'}
        description={language === 'cs'
          ? 'Kontaktujte nás pro profesionální účetní služby. Nabízíme bezplatnou konzultaci a rychlou odpověď na všechny dotazy.'
          : 'Свяжитесь с нами для получения профессиональных бухгалтерских услуг. Предлагаем бесплатную консультацию и быстрый ответ на все вопросы.'
        }
        canonical="https://natalya-website.vercel.app/contact"
      />

      {/* Hero Section */}
      <Section spacing="lg" background="gray" containerSize="default">
        <div className="text-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-3 border border-brand-emerald/20 rounded-full px-6 py-3 mb-6">
              <MessageSquare className="w-5 h-5 text-brand-emerald" />
              <span className="text-unified-sm font-medium text-brand-emerald">
                {language === 'cs' ? 'Máte otázky? Jsme tu pro vás!' : 'Есть вопросы? Мы здесь для вас!'}
              </span>
            </div>
            
            <h1 className="text-unified-6xl font-serif font-bold text-brand-navy mb-6">
              {language === 'cs' ? 'Spojte se s námi' : 'Свяжитесь с нами'}
            </h1>
            
            <p className="text-unified-xl text-neutral-600 max-w-3xl mx-auto">
              {language === 'cs'
                ? 'Získejte bezplatnou konzultaci a zjistěte, jak vám můžeme pomoci s účetnictvím a daňovými povinnostmi. Odpovídáme rychle a nabízíme řešení šitá na míru.'
                : 'Получите бесплатную консультацию и узнайте, как мы можем помочь с бухгалтерией и налоговыми обязательствами. Отвечаем быстро и предлагаем индивидуальные решения.'}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section spacing="md" background="white" containerSize="default">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Jak nás můžete kontaktovat' : 'Как с нами связаться'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="text-center group cursor-pointer"
              onClick={method.action}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-emerald/10 rounded-full flex items-center justify-center group-hover:bg-brand-emerald/20 transition-colors">
                <method.icon className="w-8 h-8 text-brand-emerald" />
              </div>
              <h3 className="text-unified-xl font-semibold text-neutral-900 mb-2">{method.title}</h3>
              <p className="text-unified-lg font-medium text-brand-emerald mb-1">{method.value}</p>
              <p className="text-unified-sm text-neutral-600">{method.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <p className="text-unified-base text-neutral-600 mb-6">
              {language === 'cs' 
                ? 'Preferujete osobní schůzku? Rádi se s vámi setkáme v naší kanceláři nebo u vás.'
                : 'Предпочитаете личную встречу? Мы с радостью встретимся с вами в нашем офисе или у вас.'}
            </p>
            <Button size="lg" className="bg-brand-emerald hover:bg-brand-emerald/90">
              <Calendar className="mr-2 w-5 h-5" />
              {language === 'cs' ? 'Objednat schůzku' : 'Записаться на встречу'}
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section spacing="md" background="gray" containerSize="content">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Napište nám' : 'Напишите нам'}
          </h2>
          <p className="text-unified-lg text-neutral-600">
            {language === 'cs'
              ? 'Vyplňte formulář a my se vám ozveme do 24 hodin'
              : 'Заполните форму, и мы свяжемся с вами в течение 24 часов'}
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-unified-sm font-medium text-neutral-700 mb-2">
                {language === 'cs' ? 'Jméno a příjmení *' : 'Имя и фамилия *'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base"
                placeholder={language === 'cs' ? 'Vaše jméno' : 'Ваше имя'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-unified-sm font-medium text-neutral-700 mb-2">
                {language === 'cs' ? 'Email *' : 'Email *'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base"
                placeholder={language === 'cs' ? 'vas@email.cz' : 'your@email.com'}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-unified-sm font-medium text-neutral-700 mb-2">
                {language === 'cs' ? 'Telefon' : 'Телефон'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base"
                placeholder="+420 123 456 789"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-unified-sm font-medium text-neutral-700 mb-2">
                {language === 'cs' ? 'Společnost' : 'Компания'}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base"
                placeholder={language === 'cs' ? 'Název společnosti' : 'Название компании'}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="serviceType" className="block text-unified-sm font-medium text-neutral-700 mb-2">
                {language === 'cs' ? 'Typ služby' : 'Тип услуги'}
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base"
              >
                <option value="">
                  {language === 'cs' ? 'Vyberte službu' : 'Выберите услугу'}
                </option>
                {serviceTypes.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-unified-sm font-medium text-neutral-700 mb-2">
              {language === 'cs' ? 'Zpráva *' : 'Сообщение *'}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors resize-none text-unified-base"
              placeholder={language === 'cs' 
                ? 'Popište vaše potřeby a my vám připravíme nabídku na míru...'
                : 'Опишите ваши потребности, и мы подготовим персональное предложение...'}
            />
          </div>

          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              className="bg-brand-emerald hover:bg-brand-emerald/90 min-w-[200px]"
            >
              <Send className="mr-2 w-5 h-5" />
              {language === 'cs' ? 'Odeslat zprávu' : 'Отправить сообщение'}
            </Button>
            
            <p className="text-unified-sm text-neutral-600 mt-4">
              {language === 'cs'
                ? 'Odesláním souhlasíte s našimi podmínkami ochrany osobních údajů'
                : 'Отправляя форму, вы соглашаетесь с нашими условиями защиты персональных данных'}
            </p>
          </div>
        </motion.form>
      </Section>

      {/* Benefits */}
      <Section spacing="md" background="white" containerSize="default">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Proč nás kontaktovat' : 'Почему стоит связаться с нами'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-emerald/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-brand-emerald" />
              </div>
              <h3 className="text-unified-xl font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
              <p className="text-unified-base text-neutral-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="md" background="emerald" containerSize="content">
        <div className="text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-unified-3xl font-bold text-white mb-6">
              {language === 'cs' 
                ? 'Začněme spolupracovat ještě dnes' 
                : 'Начнем сотрудничество уже сегодня'}
            </h2>
            <p className="text-unified-xl text-white/90 mb-8">
              {language === 'cs'
                ? 'Získejte bezplatnou konzultaci v hodnotě 2.500 Kč a zjistěte, jak vám můžeme ušetřit čas i peníze.'
                : 'Получите бесплатную консультацию стоимостью 2.500 крон и узнайте, как мы можем сэкономить ваше время и деньги.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+420722243337">
                <Button size="lg" variant="secondary" className="bg-white text-brand-emerald hover:bg-neutral-50">
                  <Phone className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Zavolejte nyní' : 'Позвонить сейчас'}
                </Button>
              </a>
              <a href="mailto:info@natalyashakh.cz">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Napište email' : 'Написать email'}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
