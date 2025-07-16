import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  Users,
  Award,
  Shield,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';

export default function About() {
  const { language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const achievements = [
    {
      icon: Users,
      number: '150+',
      label: language === 'cs' ? 'Spokojených klientů' : 'Довольных клиентов',
    },
    {
      icon: Award,
      number: '12+',
      label: language === 'cs' ? 'Let zkušeností' : 'Лет опыта',
    },
    {
      icon: Star,
      number: '98%',
      label: language === 'cs' ? 'Míra spokojenosti' : 'Уровень удовлетворенности',
    },
    {
      icon: Shield,
      number: '0',
      label: language === 'cs' ? 'Pokut za 24 měsíců' : 'Штрафов за 24 месяца',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={
          language === 'cs' ? 'O nás - Natalya Shakh Účetní' : 'О нас - Natalya Shakh Бухгалтер'
        }
        description={
          language === 'cs'
            ? 'Seznamte se s Natalyou Shakh, certifikovanou účetní s více než 12 lety zkušeností. Spolehlivé účetní služby pro malé a střední podniky v Praze.'
            : 'Познакомьтесь с Натальей Шах, сертифицированным бухгалтером с более чем 12-летним опытом. Надежные бухгалтерские услуги для малого и среднего бизнеса в Праге.'
        }
        canonical="https://natalya-website.vercel.app/about"
      />
      <StructuredData type="localBusiness" />

      {/* Hero Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl font-bold text-neutral-900 mb-6">
                {language === 'cs' ? 'Natalya Shakh & Partners' : 'Natalya Shakh & Partners'}
              </h1>
              <div className="text-xl text-brand-emerald font-medium mb-6">
                {language === 'cs' ? 'Vaše spolehlivá účetní firma' : 'Ваша надежная бухгалтерская фирма'}
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {language === 'cs'
                  ? 'S více než 12 lety zkušeností v oblasti účetnictví a daňového poradenství pomáháme malým a středním podnikům efektivně spravovat jejich finance. Specializujeme se na osobní přístup a dlouhodobé partnerství s klienty.'
                  : 'С более чем 12-летним опытом в области бухгалтерского учета и налогового консультирования мы помогаем малому и среднему бизнесу эффективно управлять их финансами. Специализируемся на индивидуальном подходе и долгосрочном партнерстве с клиентами.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-brand-emerald hover:bg-brand-emerald/90">
                    <Calendar className="mr-2 w-5 h-5" />
                    {language === 'cs' ? 'Objednat konzultaci' : 'Записаться на консультацию'}
                  </Button>
                </Link>
                <a href="tel:+420722243337">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 w-5 h-5" />
                    +420 722 243 337
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
                <div className="text-center mb-6">
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {language === 'cs' ? 'Co říkají naši klienti' : 'Что говорят наши клиенты'}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">P</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-neutral-700 italic mb-2">
                          "{language === 'cs' 
                            ? 'Profesionální přístup a spolehlivost.' 
                            : 'Профессиональный подход и надежность.'}"
                        </p>
                        <div className="text-xs text-neutral-600">
                          {language === 'cs' ? 'Pavel N., TechStart s.r.o.' : 'Павел Н., TechStart s.r.o.'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">M</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-neutral-700 italic mb-2">
                          "{language === 'cs' 
                            ? 'Rychlé odpovědi a jasné vysvětlení.' 
                            : 'Быстрые ответы и четкие объяснения.'}"
                        </p>
                        <div className="text-xs text-neutral-600">
                          {language === 'cs' ? 'Marie S., Design Studio' : 'Мария С., Design Studio'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics at bottom */}
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <div className="grid grid-cols-4 gap-1">
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-emerald font-mono">150+</div>
                      <div className="text-sm text-neutral-600">
                        {language === 'cs' ? 'klientů' : 'клиентов'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-emerald font-mono">12+</div>
                      <div className="text-sm text-neutral-600">
                        {language === 'cs' ? 'let' : 'лет'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-emerald font-mono">98%</div>
                      <div className="text-sm text-neutral-600">
                        {language === 'cs' ? 'spokojenost' : 'довольны'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-emerald font-mono">0</div>
                      <div className="text-sm text-neutral-600">
                        {language === 'cs' ? 'pokut' : 'штрафов'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience, Achievements & Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Naše zkušenosti a přístup' : 'Наш опыт и подход'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Více než dekáda práce s malými a středními podniky nám umožnila vyvinout transparentní přístup s cílenými řešeními'
                : 'Более десятилетия работы с малым и средним бизнесом позволили нам разработать прозрачный подход с целевыми решениями'}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-16 relative">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center group relative"
              >
                <div className="transition-all duration-300 rounded-xl p-4">
                  <div className="mx-auto mb-4 flex items-center justify-center">
                    <achievement.icon className="w-12 h-12 text-brand-emerald transition-colors duration-300" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 mb-1 font-mono">
                    {achievement.number}
                  </div>
                  <div className="text-neutral-900 text-sm">
                    {achievement.label}
                  </div>
                </div>
                
                {/* Connecting dots - only show for first 3 items on medium screens and up */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-emerald/40 rounded-full"></div>
                      <div className="w-2 h-2 bg-brand-emerald/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-brand-emerald/40 rounded-full"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Approach & Values */}
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...fadeInUp}>
                <div className="space-y-4">
                  {[
                    {
                      icon: CheckCircle2,
                      title: language === 'cs' ? 'Transparentní procesy' : 'Прозрачные процессы',
                      desc: language === 'cs' ? 'Jasné vysvětlení všech kroků a postupů' : 'Четкое объяснение всех шагов и процедур'
                    },
                    {
                      icon: Mail,
                      title: language === 'cs' ? 'Rychlá komunikace' : 'Быстрая коммуникация',
                      desc: language === 'cs' ? 'Odpovědi do 24 hodin a proaktivní komunikace' : 'Ответы в течение 24 часов и проактивная коммуникация'
                    },
                    {
                      icon: Users,
                      title: language === 'cs' ? 'Dlouhodobé partnerství' : 'Долгосрочное партнерство',
                      desc: language === 'cs' ? 'Spolupráce založená na důvěře a porozumění' : 'Сотрудничество, основанное на доверии'
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="group cursor-pointer"
                      {...fadeInUp} 
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-neutral-50 rounded-lg p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-neutral-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-neutral-700 group-hover:text-brand-emerald transition-colors duration-300" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-neutral-900">{item.title}</h5>
                            <p className="text-neutral-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: language === 'cs' ? 'Spolehlivost' : 'Надежность',
                      desc: language === 'cs' ? 'Dodržujeme termíny a závazky vůči klientům' : 'Соблюдаем сроки и обязательства перед клиентами'
                    },
                    {
                      icon: Award,
                      title: language === 'cs' ? 'Odbornost' : 'Экспертность',
                      desc: language === 'cs' ? 'Neustále se vzdělávame a sledujeme legislativu' : 'Постоянно повышаем квалификацию и следим за законодательством'
                    },
                    {
                      icon: Star,
                      title: language === 'cs' ? 'Osobní přístup' : 'Индивидуальный подход',
                      desc: language === 'cs' ? 'Každý klient je pro nás jedinečný' : 'Каждый клиент для нас уникален'
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="group cursor-pointer"
                      {...fadeInUp} 
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <div className="bg-neutral-50 rounded-lg p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-neutral-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-neutral-700 group-hover:text-brand-emerald transition-colors duration-300" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-neutral-900">{item.title}</h5>
                            <p className="text-neutral-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-brand-emerald">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === 'cs' ? 'Začněme spolupracovat' : 'Давайте начнем сотрудничество'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'cs'
                ? 'Budeme rádi, když se seznámíme osobně a probereme, jak můžeme pomoci vašemu podnikání.'
                : 'Будем рады познакомиться лично и обсудить, как мы можем помочь вашему бизнесу.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-brand-emerald hover:bg-neutral-50"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Objednat konzultaci' : 'Записаться на консультацию'}
                </Button>
              </Link>
              <a href="mailto:ucetnipraha@atlas.cz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  ucetnipraha@atlas.cz
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
