import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      value: 'ucetnipraha@atlas.cz',
      link: 'mailto:ucetnipraha@atlas.cz',
      showExternalIcon: false
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      value: '+420 722 243 337',
      link: 'tel:+420722243337',
      showExternalIcon: false
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      value: 'Vodičkova 39, 110 00 Praha',
      link: 'https://maps.google.com/?q=Vodičkova+39+Praha',
      showExternalIcon: true
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      value: t('contact.info.workdays'),
      subtext: t('contact.info.response'),
      link: null,
      showExternalIcon: false
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container-pad relative z-10 text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl font-bold mb-3">{t('contact.title')}</h1>
            <p className="text-lg text-gray-600">{t('contact.subtitle')}</p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="pt-0 pb-8">
          <div className="container-pad">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Map Section */}
                <motion.div
                  {...fadeIn}
                  className="relative rounded-2xl overflow-hidden shadow-lg bg-white h-[500px]"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d710.0648202803447!2d14.4244006!3d50.0819109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ed1314beb3%3A0x16e2c05fb02d34eb!2zVm9kacSNa292YSAzOSwgMTEwIDAwIE5vdsOpIE3Em3N0bw!5e1!3m2!1sen!2scz!4v1733218460959!5m2!1sen!2scz"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  {...fadeIn}
                  transition={{ delay: 0.2 }}
                  className="h-[500px]"
                >
                  <div className="bg-white rounded-2xl shadow-lg h-full">
                    <div className="p-6 space-y-4">
                      {contactItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="group"
                        >
                          {item.link ? (
                            <a
                              href={item.link}
                              target={item.showExternalIcon ? "_blank" : undefined}
                              rel={item.showExternalIcon ? "noopener noreferrer" : undefined}
                              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                <item.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                                <p className="text-blue-600 flex items-center">
                                  {item.value}
                                  {item.showExternalIcon && (
                                    <ExternalLink className="w-4 h-4 ml-1 inline-block" />
                                  )}
                                </p>
                              </div>
                            </a>
                          ) : (
                            <div className="flex items-start space-x-4 p-4">
                              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                                <p className="text-gray-600">{item.value}</p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}

                      {/* Additional Information */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-500 text-center">
                          {t('contact.info.response')}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
