import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import Section from '../components/layout/Section';
import SEOHead from '../components/SEO/SEOHead';
import FormErrorBoundary from '../components/FormErrorBoundary';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Users,
  Calendar,
  Shield,
} from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = language === 'cs' ? 'Jméno je povinné' : 'Имя обязательно';
    }
    
    if (!formData.email.trim()) {
      errors.email = language === 'cs' ? 'Email je povinný' : 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = language === 'cs' ? 'Neplatný email' : 'Неверный email';
    }
    
    if (!formData.message.trim()) {
      errors.message = language === 'cs' ? 'Zpráva je povinná' : 'Сообщение обязательно';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setFormErrors({});

    try {
      // Initialize EmailJS (replace with your actual keys)
      emailjs.init('YOUR_PUBLIC_KEY');

      // Prepare email data
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_type: formData.serviceType,
        message: formData.message,
        to_name: 'Natalya Shakh',
        language: language,
        reply_to: formData.email,
      };

      // Send email
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_CONTACT_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'cs' ? 'Telefon' : 'Телефон',
      value: '+420 722 243 337',
      description: language === 'cs' ? 'Po-Pá 9:00-17:00' : 'Пн-Пт 9:00-17:00',
      action: () => window.open('tel:+420722243337'),
    },
    {
      icon: Mail,
      title: language === 'cs' ? 'Email' : 'Email',
      value: 'info@natalyashakh.cz',
      description: language === 'cs' ? 'Odpovídáme do 24h' : 'Отвечаем в течение 24ч',
      action: () => window.open('mailto:info@natalyashakh.cz'),
    },
    {
      icon: MapPin,
      title: language === 'cs' ? 'Adresa' : 'Адрес',
      value: 'Praha, Česká republika',
      description: language === 'cs' ? 'Schůzky po dohodě' : 'Встречи по договоренности',
      action: () => {},
    },
  ];

  const serviceTypes = [
    language === 'cs' ? 'Vedení účetnictví' : 'Ведение бухгалтерии',
    language === 'cs' ? 'Daňové poradenství' : 'Налоговое консультирование',
    language === 'cs' ? 'Mzdová agenda' : 'Расчет зарплат',
    language === 'cs' ? 'Zakládání společnosti' : 'Регистрация компании',
    language === 'cs' ? 'Právní služby' : 'Юридические услуги',
    language === 'cs' ? 'Jiné' : 'Другое',
  ];

  const benefits = [
    {
      icon: Clock,
      title: language === 'cs' ? 'Rychlá odpověď' : 'Быстрый ответ',
      description:
        language === 'cs'
          ? 'Odpovídáme do 2 hodin v pracovní době'
          : 'Отвечаем в течение 2 часов в рабочее время',
    },
    {
      icon: Shield,
      title: language === 'cs' ? 'Diskrétnost' : 'Конфиденциальность',
      description: language === 'cs' ? 'Vaše údaje jsou v bezpečí' : 'Ваши данные в безопасности',
    },
    {
      icon: Users,
      title: language === 'cs' ? 'Osobní přístup' : 'Персональный подход',
      description:
        language === 'cs'
          ? 'Řešení šité na míru vašim potřebám'
          : 'Решения, адаптированные под ваши потребности',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={language === 'cs' ? 'Kontakt - Natalya Shakh' : 'Контакт - Natalya Shakh'}
        description={
          language === 'cs'
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
                {language === 'cs'
                  ? 'Máte otázky? Jsme tu pro vás!'
                  : 'Есть вопросы? Мы здесь для вас!'}
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
        <motion.div className="text-center mb-12" {...fadeInUp}>
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
              <h3 className="text-unified-xl font-semibold text-neutral-900 mb-2">
                {method.title}
              </h3>
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
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Napište nám' : 'Напишите нам'}
          </h2>
          <p className="text-unified-lg text-neutral-600">
            {language === 'cs'
              ? 'Vyplňte formulář a my se vám ozveme do 24 hodin'
              : 'Заполните форму, и мы свяжемся с вами в течение 24 часов'}
          </p>
        </motion.div>

        <FormErrorBoundary
          preserveFormData={true}
          formName="contact-form"
          onFormError={(error, formData) => {
            console.error('Contact form error:', error);
            console.log('Preserved form data:', formData);
          }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
          <FormErrorBoundary>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-unified-sm font-medium text-neutral-700 mb-2"
                >
                  {language === 'cs' ? 'Jméno a příjmení *' : 'Имя и фамилия *'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base ${
                            formErrors.name ? 'border-red-300 bg-red-50' : 'border-neutral-300'
                          }`}
                          placeholder={language === 'cs' ? 'Vaše jméno' : 'Ваше имя'}
                        />
                        {formErrors.name && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>
                        )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-unified-sm font-medium text-neutral-700 mb-2"
                >
                  {language === 'cs' ? 'Email *' : 'Email *'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base ${
                            formErrors.email ? 'border-red-300 bg-red-50' : 'border-neutral-300'
                          }`}
                          placeholder={language === 'cs' ? 'vas@email.cz' : 'your@email.com'}
                        />
                        {formErrors.email && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
                        )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-unified-sm font-medium text-neutral-700 mb-2"
                >
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
                <label
                  htmlFor="company"
                  className="block text-unified-sm font-medium text-neutral-700 mb-2"
                >
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
                <label
                  htmlFor="serviceType"
                  className="block text-unified-sm font-medium text-neutral-700 mb-2"
                >
                  {language === 'cs' ? 'Typ služby' : 'Тип услуги'}
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors text-unified-base"
                >
                  <option value="">{language === 'cs' ? 'Vyberte službu' : 'Выберите услугу'}</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-unified-sm font-medium text-neutral-700 mb-2"
              >
                {language === 'cs' ? 'Zpráva *' : 'Сообщение *'}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-colors resize-none text-unified-base ${
                  formErrors.message ? 'border-red-300 bg-red-50' : 'border-neutral-300'
                }`}
                placeholder={
                  language === 'cs'
                    ? 'Popište vaše potřeby a my vám připravíme nabídku na míru...'
                    : 'Опишите ваши потребности, и мы подготовим персональное предложение...'
                }
                        />
                        {formErrors.message && (
                          <p className="text-sm text-red-600 mt-1">{formErrors.message}</p>
                        )}
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-brand-emerald hover:bg-brand-emerald/90 min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 w-5 h-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {language === 'cs' ? 'Odesílání...' : 'Отправка...'}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    {language === 'cs' ? 'Odeslat zprávu' : 'Отправить сообщение'}
                  </>
                )}
              </Button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center text-green-800">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {language === 'cs'
                      ? 'Zpráva byla úspěšně odeslána! Ozveme se vám do 24 hodin.'
                      : 'Сообщение успешно отправлено! Мы свяжемся с вами в течение 24 часов.'}
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-center text-red-800">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {language === 'cs'
                      ? 'Došlo k chybě při odesílání zprávy. Zkuste to prosím znovu nebo nás kontaktujte přímo.'
                      : 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.'}
                  </div>
                </motion.div>
              )}

              <p className="text-unified-sm text-neutral-600 mt-4">
                {language === 'cs'
                  ? 'Odesláním souhlasíte s našimi podmínkami ochrany osobních údajů'
                  : 'Отправляя форму, вы соглашаетесь с нашими условиями защиты персональных данных'}
              </p>
            </div>
          </FormErrorBoundary>
          </motion.form>
        </FormErrorBoundary>
      </Section>

      {/* Benefits */}
      <Section spacing="md" background="white" containerSize="default">
        <motion.div className="text-center mb-12" {...fadeInUp}>
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
              <h3 className="text-unified-xl font-semibold text-neutral-900 mb-2">
                {benefit.title}
              </h3>
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
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-brand-emerald hover:bg-neutral-50"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Zavolejte nyní' : 'Позвонить сейчас'}
                </Button>
              </a>
              <a href="mailto:info@natalyashakh.cz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
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
