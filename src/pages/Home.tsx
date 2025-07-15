import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Calendar, Building2, TrendingUp, Briefcase, PieChart, BarChart3, Users2, Zap, Coins, Car, ShoppingCart, Utensils, Home as HomeIcon } from 'lucide-react';

import { Button } from '../components/ui/button';
import Hero from '../components/layout/Hero';
import Section from '../components/layout/Section';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';

export default function Home() {
  const { language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };





  const expertiseAreas = [
    {
      icon: Building2,
      title: language === 'cs' ? 'Stavebnictví' : 'Строительство',
      description: language === 'cs' ? 'Realizace projektů, dotace' : 'Реализация проектов, субсидии',
      color: 'emerald'
    },
    {
      icon: Briefcase,
      title: language === 'cs' ? 'IT & Tech' : 'IT & Технологии',
      description: language === 'cs' ? 'Software, aplikace, SaaS' : 'Программное обеспечение, SaaS',
      color: 'blue'
    },
    {
      icon: ShoppingCart,
      title: language === 'cs' ? 'E-commerce' : 'Электронная торговля',
      description: language === 'cs' ? 'Online prodej, tržby' : 'Онлайн продажи, маркетплейсы',
      color: 'purple'
    },
    {
      icon: Coins,
      title: language === 'cs' ? 'Kryptoměny' : 'Криптовалюты',
      description: language === 'cs' ? 'Trading, mining, DeFi' : 'Трейдинг, майнинг, DeFi',
      color: 'yellow'
    },
    {
      icon: Utensils,
      title: language === 'cs' ? 'Food delivery' : 'Доставка еды',
      description: language === 'cs' ? 'Bolt Food, Foodora, Uber Eats' : 'Bolt Food, Foodora, Uber Eats',
      color: 'red'
    },
    {
      icon: Car,
      title: language === 'cs' ? 'Ridesharing' : 'Такси/Каршеринг',
      description: language === 'cs' ? 'Uber, Bolt, Taxify' : 'Uber, Bolt, Taxify',
      color: 'indigo'
    },
    {
      icon: Users2,
      title: language === 'cs' ? 'Služby' : 'Услуги',
      description: language === 'cs' ? 'Konzultace, marketing' : 'Консультации, маркетинг',
      color: 'teal'
    },
    {
      icon: HomeIcon,
      title: language === 'cs' ? 'Nemovitosti' : 'Недвижимость',
      description: language === 'cs' ? 'Pronájem, development' : 'Аренда, девелопмент',
      color: 'orange'
    }
  ];

  const keyBenefits = [
    {
      icon: TrendingUp,
      title: language === 'cs' ? 'Až 40% úspora na daních' : 'До 40% экономии на налогах',
      subtitle: language === 'cs' ? 'Legální optimalizace' : 'Легальная оптимизация'
    },
    {
      icon: Zap,
      title: language === 'cs' ? '100% včasnost' : '100% соблюдение сроков',
      subtitle: language === 'cs' ? 'Automatické procesy' : 'Автоматизированные процессы'
    },
    {
      icon: PieChart,
      title: language === 'cs' ? 'Digitální účetnictví' : 'Цифровая отчетность',
      subtitle: language === 'cs' ? 'Moderní nástroje' : 'Современные инструменты'
    },
    {
      icon: BarChart3,
      title: language === 'cs' ? 'Průhledné reporty' : 'Прозрачная отчетность',
      subtitle: language === 'cs' ? 'Realtime přehled' : 'Данные в реальном времени'
    }
  ];



  const processSteps = [
    {
      number: '01',
      title: language === 'cs' ? 'Bezplatná konzultace' : 'Бесплатная консультация',
      description: language === 'cs'
        ? 'Seznámíme se s vaším podnikáním a identifikujeme potřeby'
        : 'Знакомимся с вашим бизнесом и определяем потребности'
    },
    {
      number: '02',
      title: language === 'cs' ? 'Návrh řešení' : 'Предложение решения',
      description: language === 'cs'
        ? 'Připravíme individuální plán služeb a transparentní ceník'
        : 'Подготавливаем индивидуальный план услуг и прозрачное ценообразование'
    },
    {
      number: '03',
      title: language === 'cs' ? 'Implementace' : 'Внедрение',
      description: language === 'cs'
        ? 'Zahájíme spolupráci a nastavíme efektivní procesy'
        : 'Начинаем сотрудничество и настраиваем эффективные процессы'
    },
    {
      number: '04',
      title: language === 'cs' ? 'Průběžná péče' : 'Постоянное обслуживание',
      description: language === 'cs'
        ? 'Poskytujeme kontinuální podporu a pravidelné reporty'
        : 'Обеспечиваем непрерывную поддержку и регулярные отчеты'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Natalya Shakh - Účetní služby"
        description={
          language === 'cs'
            ? 'Profesionální účetní služby, daňové poradenství a vedení účetnictví pro malé a střední podniky v České republice.'
            : 'Профессиональные бухгалтерские услуги, налоговое консультирование и ведение бухгалтерского учета для малого и среднего бизнеса в Чешской Республике.'
        }
        canonical="https://natalya-website.vercel.app/"
      />
      <StructuredData type="localBusiness" />

      {/* Hero Section */}
      <Hero />



            {/* Combined Expertise & Solutions Section */}
      <Section spacing="sm" background="white" containerSize="default">
        <motion.div {...fadeInUp}>
          <div className="text-center mb-12">
            <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Naše expertíza' : 'Наша экспертиза'}
            </h2>
            <p className="text-unified-lg text-neutral-600 max-w-3xl mx-auto">
              {language === 'cs'
                ? 'Specializujeme se na účetnictví pro moderní odvětví a platformy'
                : 'Специализируемся на бухгалтерии для современных отраслей и платформ'}
            </p>
          </div>

          {/* Expertise Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                {...fadeInUp} 
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <div className="relative bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-neutral-300 group-hover:-translate-y-1">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${area.color === 'emerald' ? 'bg-emerald-50' : area.color === 'blue' ? 'bg-blue-50' : area.color === 'purple' ? 'bg-purple-50' : area.color === 'yellow' ? 'bg-yellow-50' : area.color === 'red' ? 'bg-red-50' : area.color === 'indigo' ? 'bg-indigo-50' : area.color === 'teal' ? 'bg-teal-50' : 'bg-orange-50'}`}>
                    <area.icon className={`w-6 h-6 ${area.color === 'emerald' ? 'text-emerald-600' : area.color === 'blue' ? 'text-blue-600' : area.color === 'purple' ? 'text-purple-600' : area.color === 'yellow' ? 'text-yellow-600' : area.color === 'red' ? 'text-red-600' : area.color === 'indigo' ? 'text-indigo-600' : area.color === 'teal' ? 'text-teal-600' : 'text-orange-600'}`} />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1 text-unified-sm">{area.title}</h4>
                  <p className="text-neutral-600 text-xs leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits Section */}
          <div className="bg-gradient-to-br from-brand-emerald/5 to-brand-emerald/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-unified-2xl font-bold text-neutral-900 mb-2">
                {language === 'cs' ? 'Proč si nás vybrat' : 'Почему выбирают нас'}
              </h3>
              <p className="text-neutral-600">
                {language === 'cs'
                  ? 'Konkrétní výsledky, které dokážeme garantovat'
                  : 'Конкретные результаты, которые мы можем гарантировать'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  {...fadeInUp} 
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    <benefit.icon className="w-8 h-8 text-brand-emerald" />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-1 text-unified-sm">{benefit.title}</h4>
                  <p className="text-neutral-600 text-xs">{benefit.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-12 pt-8 border-t border-neutral-200" {...fadeInUp} transition={{ delay: 1.0 }}>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            {language === 'cs'
              ? 'Chcete vědět, jak vám můžeme pomoci optimalizovat vaše účetnictví?'
              : 'Хотите узнать, как мы можем помочь оптимизировать вашу отчетность?'}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-emerald hover:bg-brand-emerald/90 text-white font-semibold">
              <Calendar className="mr-2 w-5 h-5" />
              {language === 'cs' ? 'Konzultace zdarma' : 'Бесплатная консультация'}
            </Button>
          </Link>
        </motion.div>
      </Section>



      {/* How We Work Section */}
      <Section spacing="sm" background="gray" containerSize="default">
        <motion.div className="text-center mb-10" {...fadeInUp}>
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Jak spolupracujeme' : 'Как мы работаем'}
          </h2>
          <p className="text-unified-lg text-neutral-600 max-w-2xl mx-auto">
            {language === 'cs'
              ? 'Jednoduchý proces od prvního kontaktu až po dlouhodobou spolupráci'
              : 'Простой процесс от первого контакта до долгосрочного сотрудничества'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              {...fadeInUp} 
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-brand-emerald rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-unified-base font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-unified-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-neutral-200 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>



      {/* CTA Section - Enhanced */}
      <Section spacing="sm" background="emerald" containerSize="content">
        <div className="text-center relative">
          <motion.div {...fadeInUp}>
            <h2 className="text-unified-3xl font-bold text-white mb-4">
              {language === 'cs' ? 'Začněte ještě dnes' : 'Начните уже сегодня'}
            </h2>
            <p className="text-unified-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              {language === 'cs'
                ? 'Získejte bezplatnou konzultaci a zjistěte, jak vám můžeme pomoci optimalizovat finance'
                : 'Получите бесплатную консультацию и узнайте, как мы можем помочь оптимизировать финансы'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-brand-emerald hover:bg-neutral-50 font-semibold"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Objednat konzultaci' : 'Записаться на консультацию'}
                </Button>
              </Link>
              <a href="tel:+420722243337">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  +420 722 243 337
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center text-white/80 text-unified-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {language === 'cs' 
                ? 'Konzultace je zcela zdarma a nezávazná'
                : 'Консультация абсолютно бесплатная и необязательная'}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
