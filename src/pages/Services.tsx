import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  Receipt,
  Calculator,
  Users,
  TrendingUp,
  Building,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { marked } from 'marked';
import servicesContent from '../content/services.md?raw';
import { Disclosure, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t, language } = useLanguage();

  marked.use({
    gfm: true,
    breaks: true
  });

  const serviceIcons = {
    'Daňové poradenství a podání': Receipt,
    'Účetnictví a finanční výkazy': Calculator,
    'Zpracování mezd': Users,
    'Finanční poradenství': TrendingUp,
    'Podpora podnikání': Building,
    'Налоговое консультирование и подача отчетности': Receipt,
    'Бухгалтерский учет и финансовая отчетность': Calculator,
    'Расчет заработной платы': Users,
    'Финансовое консультирование': TrendingUp,
    'Поддержка бизнеса': Building,
  };

  const splitContent = servicesContent.split('---');
  const contentByLanguage = {
    cs: splitContent[0],
    ru: splitContent[1]
  };

  const currentContent = contentByLanguage[language] || '';
  const sections = currentContent.split('###').filter(Boolean);
  const mainSection = sections[0];
  const serviceSections = sections.slice(1);

  const serviceCategories = [
    {
      id: 'tax',
      icon: Receipt,
      title: language === 'cs' ? 'Daňové služby' : 'Налоговые услуги',
      description: language === 'cs'
        ? 'Komplexní daňové poradenství a optimalizace pro fyzické i právnické osoby'
        : 'Комплексное налоговое консультирование и оптимизация для физических и юридических лиц',
      features: language === 'cs'
        ? ['Daňové přiznání', 'Daňová optimalizace', 'DPH', 'Kontrolní hlášení']
        : ['Налоговая декларация', 'Налоговая оптимизация', 'НДС', 'Контрольная отчетность']
    },
    {
      id: 'accounting',
      icon: Calculator,
      title: language === 'cs' ? 'Účetnictví' : 'Бухгалтерия',
      description: language === 'cs'
        ? 'Profesionální vedení účetnictví a zpracování finančních výkazů'
        : 'Профессиональное ведение бухгалтерского учета и подготовка финансовой отчетности',
      features: language === 'cs'
        ? ['Vedení účetnictví', 'Finanční výkazy', 'Analýza nákladů', 'Reporting']
        : ['Ведение бухгалтерии', 'Финансовая отчетность', 'Анализ затрат', 'Отчетность']
    },
    {
      id: 'payroll',
      icon: Users,
      title: language === 'cs' ? 'Mzdy a personalistika' : 'Зарплата и кадры',
      description: language === 'cs'
        ? 'Kompletní správa mezd a personální agenda pro vaše zaměstnance'
        : 'Полное управление заработной платой и кадровое делопроизводство',
      features: language === 'cs'
        ? ['Zpracování mezd', 'Personální agenda', 'Sociální pojištění', 'Zdravotní pojištění']
        : ['Расчет зарплаты', 'Кадровое делопроизводство', 'Социальное страхование', 'Медицинское страхование']
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-40 to-white pt-12">
      {/* Hero Section */}
      <section className="relative py-12 text-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-pad relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'cs' ? 'Komplexní účetní služby' : 'Комплексные бухгалтерские услуги'}
            </h1>
            <p className="text-xl text-grey-600">
              {language === 'cs'
                ? 'Profesionální účetní služby přizpůsobené vašim potřebám'
                : 'Профессиональные бухгалтерские услуги, адаптированные под ваши потребности'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-10">
        <div className="container-pad">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 gap-6 sm:gap-8"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow 
                           flex flex-col h-full hover:bg-gradient-to-br hover:from-blue-50 hover:to-white
                           transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-3">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="detailed-services" className="py-16 bg-white border-t border-gray-100">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              {language === 'cs' ? 'Detailní přehled služeb' : 'Подробный обзор услуг'}
            </motion.h2>

            <div className="space-y-4">
              {serviceSections.map((section, index) => {
                const titleMatch = section.match(/^[^\n]+/);
                const title = titleMatch ? titleMatch[0].trim() : `Service ${index + 1}`;
                const content = section.replace(/^[^\n]+/, '').trim();

                // Type assertion to ensure TypeScript understands `title` as a valid key
                const Icon = serviceIcons[title as keyof typeof serviceIcons] || Building;

                return (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Disclosure>
                      {({ open }) => (
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                          <Disclosure.Button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {title}
                              </h3>
                            </div>
                            <ChevronRight
                              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-90' : ''
                                }`}
                            />
                          </Disclosure.Button>

                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="px-6 py-4 bg-gray-50">
                              <div
                                className="prose prose-blue max-w-none"
                                dangerouslySetInnerHTML={{ __html: marked(content) }}
                              />
                            </Disclosure.Panel>
                          </Transition>
                        </div>
                      )}
                    </Disclosure>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-pad relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('home.cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-medium 
                         hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              {t('home.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}