import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, FileText, Calculator, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

export default function Home() {
  const { t } = useLanguage();

  const services = useMemo(() => [
    {
      icon: FileText,
      title: t('home.services.taxConsulting'),
      description: t('home.services.taxConsultingDesc')
    },
    {
      icon: Calculator,
      title: t('home.services.bookkeeping'),
      description: t('home.services.bookkeepingDesc')
    },
    {
      icon: PieChart,
      title: t('home.services.financial'),
      description: t('home.services.financialDesc')
    }
  ], [t]);

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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0" />

        <div className="container-pad relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium inline-block mb-4">
                {t('home.hero.welcome')}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                {t('home.hero.accountingServices')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed px-4 sm:px-0">
                {t('home.hero.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
              >
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
              >
                {t('nav.services')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container-pad">
          <motion.div
            key={services[0].title}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                variants={item}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {t('home.services.learnMore')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-pad relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center px-4 sm:px-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              {t('home.cta.description')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                {t('home.cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}