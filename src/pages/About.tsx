import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Check, Calendar, BookOpen, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { t, language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const experiences = [
    {
      icon: Calendar,
      title: language === 'cs' ? 'Dlouholetá praxe' : 'Многолетний опыт',
      description: language === 'cs'
        ? 'Více než 10 let aktivního působení v oblasti účetnictví a daňového poradenství v České republice.'
        : 'Более 10 лет активной деятельности в сфере бухгалтерского учета и налогового консультирования в Чешской Республике.'
    },
    {
      icon: BookOpen,
      title: language === 'cs' ? 'Odborná kvalifikace' : 'Профессиональная квалификация',
      description: language === 'cs'
        ? 'Průběžné vzdělávání a certifikace v oblasti účetnictví, daní a české legislativy.'
        : 'Непрерывное образование и сертификация в области бухгалтерского учета, налогов и чешского законодательства.'
    },
    {
      icon: Briefcase,
      title: language === 'cs' ? 'Široké spektrum klientů' : 'Широкий спектр клиентов',
      description: language === 'cs'
        ? 'Zkušenosti s vedením účetnictví pro české i mezinárodní společnosti různých velikostí a zaměření.'
        : 'Опыт ведения бухгалтерского учета для чешских и международных компаний различных размеров и направлений.'
    },
    {
      icon: Award,
      title: language === 'cs' ? 'Profesionální přístup' : 'Профессиональный подход',
      description: language === 'cs'
        ? 'Důraz na přesnost, spolehlivost a individuální přístup ke každému klientovi.'
        : 'Акцент на точность, надежность и индивидуальный подход к каждому клиенту.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Natalya Shakh
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('about.experience')}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('about.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.approach')}
              </p>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="flex-shrink-0 w-6 h-6 text-blue-600" />
                    <span className="text-gray-600">{t(`home.benefits.point${index + 1}`)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="relative flex items-start justify-center"
            >
              <div className="w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="https://i.imgur.com/hdKkMAw.jpeg"
                  alt="Professional accounting services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'cs' ? '10+ Let zkušeností' : '10+ Лет опыта'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Profesionální účetní služby s dlouholetou praxí'
                : 'Профессиональные бухгалтерские услуги с многолетним опытом'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                {...fadeInUp}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <exp.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('home.cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center px-8 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              {t('home.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}