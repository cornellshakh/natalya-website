import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [error] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="text-black py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-pad relative z-10 text-center"
        >
          <h1 className="text-4xl font-bold mb-3">{t('contact.title')}</h1>
          <h1 className="text-xl text-grey-600">{t('contact.subtitle')}</h1>

        </motion.div>
      </section>

      <div className="container-pad py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="bg-white p-8 rounded-xl shadow-sm"
            >

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg text-center"
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={item}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="input"
                      placeholder={t('contact.form.placeholder.name')}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="input"
                      placeholder={t('contact.form.placeholder.email')}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="input"
                      placeholder={t('contact.form.placeholder.message')}
                    />
                  </motion.div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center space-x-2 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <motion.button
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <span>{t('contact.form.send')}</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="lg:pl-8"
            >

              <div className="space-y-1">
                <motion.a
                  variants={item}
                  href="mailto:contact@example.com"
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.info.email')}</p>
                    <p className="text-blue-600">contact@example.com</p>
                  </div>
                </motion.a>

                <motion.a
                  variants={item}
                  href="tel:+420123456789"
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.info.phone')}</p>
                    <p className="text-blue-600">+420 123 456 789</p>
                  </div>
                </motion.a>

                <motion.div
                  variants={item}
                  className="flex items-start space-x-4 p-4 rounded-lg group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.info.location')}</p>
                    <p className="text-gray-600">Vodičkova 39, 110 00 Praha</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="flex items-start space-x-4 p-4 rounded-lg group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.info.hours')}</p>
                    <p className="text-gray-600">{t('contact.info.workdays')}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {t('contact.info.response')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white border-t border-gray-100 py-16"
      >
        <div className="container-pad">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d710.0648202803447!2d14.4244006!3d50.0819109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ed1314beb3%3A0x16e2c05fb02d34eb!2zVm9kacSNa292YSAzOSwgMTEwIDAwIE5vdsOpIE3Em3N0bw!5e1!3m2!1sen!2scz!4v1733218460959!5m2!1sen!2scz"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}