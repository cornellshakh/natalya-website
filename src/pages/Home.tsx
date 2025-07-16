import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Building2, Briefcase, Users2, Coins, Car, ShoppingCart, Utensils, Home as HomeIcon, ArrowRight, LucidePanelRightOpen, Search, Book, Brain } from 'lucide-react';

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

      {/* Combined Expertise & Benefits Section - Redesigned */}
      <Section spacing="sm" background="white" containerSize="default">
        <motion.div {...fadeInUp}>
          <div className="text-center mb-0">
            <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Proč si nás vybrat' : 'Почему выбирают нас'}
            </h2>
            <p className="text-unified-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Specializujeme se na moderní odvětví s garantovanými výsledky'
                : 'Специализируемся на современnіх отраслях с гарантированными результатами'}
            </p>
          </div>

          {/* Key Benefits & Top Expertise - Two column layout */}
          <div className="bg-gradient-to-r from-brand-emerald/5 to-brand-emerald/10 rounded-2xl p-12 mb-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left side - Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-emerald flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 text-lg mb-1">
                        {language === 'cs' ? 'Ušetříte 15+ hodin měsíčně' : 'Экономьте 15+ часов в месяц'}
                      </h4>
                      <p className="text-neutral-600">
                        {language === 'cs' ? 'Místo papírování se věnujte růstu svého byznysu' : 'Вместо бумажной работы сосредоточьтесь на развитии бизнеса'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-emerald flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 text-lg mb-1">
                        {language === 'cs' ? 'Snížíte daňovou zátěž o 20-40%' : 'Сократите налоговую нагрузку на 20-40%'}
                      </h4>
                      <p className="text-neutral-600">
                        {language === 'cs' ? 'Využijeme všechny zákonné odpočty a optimalizace' : 'Используем все законные вычеты и оптимизации'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-emerald flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 text-lg mb-1">
                        {language === 'cs' ? 'Nikdy nepropásnete termín' : 'Никогда не пропустите сроки'}
                      </h4>
                      <p className="text-neutral-600">
                        {language === 'cs' ? 'Automatické připomínky a dodávky před deadliny' : 'Автоматические напоминания и подача до дедлайнов'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-emerald flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 text-lg mb-1">
                        {language === 'cs' ? 'Máte přehled o financích 24/7' : 'Контроль финансов 24/7'}
                      </h4>
                      <p className="text-neutral-600">
                        {language === 'cs' ? 'Realtime reporty a analýzy přímo do vašeho telefonu' : 'Отчеты и аналитика в реальном времени на ваш телефон'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Professional image */}
                <div className="flex items-start justify-center">
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white w-full max-w-sm">
                    <img
                      src="https://i.imgur.com/SzPAm8h.jpeg"
                      alt="Professional accounting services"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                      <div className="text-center">
                        <p className="font-bold text-brand-navy text-sm">
                          {language === 'cs' ? 'Certifikovaný lektor účetnictví' : 'Сертифицированный преподаватель бухучета'}
                        </p>
                        <p className="text-xs text-neutral-600">
                          {language === 'cs' ? 'Vzdělávání budoucích účetních' : 'Обучение будущих бухгалтеров'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Expertise Areas - Wide cards */}
          <div className="mb-0 mt-4">
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {expertiseAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="group cursor-pointer"
                  {...fadeInUp} 
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-neutral-50 rounded-lg p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-neutral-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-6 h-6 text-neutral-700 group-hover:text-brand-emerald transition-colors duration-300" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">{area.title}</h5>
                        <p className="text-neutral-600 text-sm">{area.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div className="text-center pt-8" {...fadeInUp} transition={{ delay: 0.8 }}>
            <Link to="/about">
             <Button
                  size="default"
                  className="w-full sm:w-auto text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-shadow group min-h-[44px]"
                  asChild
                >
                  <Link to="/booking" className="flex items-center justify-center gap-2">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>
                      {language === 'cs' ? 'Zjistit víc o nás' : 'Узнать больше о нас'}
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* How We Work Section */}
      <Section spacing="lg" background="gray" containerSize="default">
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

      {/* CTA Section - Clean & Minimal */}
      <Section spacing="lg" background="emerald" containerSize="content">
        <div className="text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'cs' ? 'Začněte ušetřovat čas už dnes' : 'Начните экономить время уже сегодня'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Bezplatná konzultace vám ukáže, kolik můžete ušetřit'
                : 'Бесплатная консультация покажет, сколько вы можете сэкономить'}
            </p>
            
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-emerald hover:bg-neutral-50 font-semibold px-8 py-4 text-lg"
              >
                <Calendar className="mr-3 w-6 h-6" />
                {language === 'cs' ? 'Objednat konzultaci' : 'Записаться на консультацию'}
              </Button>
            </Link>

            <p className="text-white/80 text-sm mt-6">
              {language === 'cs' 
                ? 'Zdarma • Bez závazků • Odpověď do 24 hodin'
                : 'Бесплатно • Без обязательств • Ответ в течение 24 часов'}
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
