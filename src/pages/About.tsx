import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calendar, 
  Award, 
  CheckCircle2, 
  Phone,
  Mail,
  GraduationCap,
  Users,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';

export default function About() {
  const { language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const credentials = [
    {
      icon: Award,
      title: language === 'cs' ? 'Certifikovaný účetní' : 'Сертифицированный бухгалтер',
      description: language === 'cs' ? 'Licence ČR #ACC-2019-567' : 'Лицензия ЧР #ACC-2019-567',
      details: language === 'cs' ? 'Ministerstvo financí ČR' : 'Министерство финансов ЧР'
    },
    {
      icon: GraduationCap,
      title: language === 'cs' ? 'Magisterské vzdělání' : 'Магистерское образование',
      description: language === 'cs' ? 'Ekonomika a management' : 'Экономика и менеджмент',
      details: language === 'cs' ? 'Vysoká škola ekonomická Praha' : 'Высшая школа экономики Прага'
    },
    {
      icon: BookOpen,
      title: language === 'cs' ? 'Kontinuální vzdělávání' : 'Непрерывное образование',
      description: language === 'cs' ? 'Pravidelné školení a certifikace' : 'Регулярные тренинги и сертификации',
      details: language === 'cs' ? 'Komora účetních ČR' : 'Палата бухгалтеров ЧР'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '150+',
      label: language === 'cs' ? 'Spokojených klientů' : 'Довольных клиентов'
    },
    {
      icon: Calendar,
      number: '12+',
      label: language === 'cs' ? 'Let zkušeností' : 'Лет опыта'
    },
    {
      icon: CheckCircle2,
      number: '98%',
      label: language === 'cs' ? 'Míra spokojenosti' : 'Уровень удовлетворенности'
    },
    {
      icon: TrendingUp,
      number: '0',
      label: language === 'cs' ? 'Pokut za 24 měsíců' : 'Штрафов за 24 месяца'
    }
  ];

  const testimonials = [
    {
      name: language === 'cs' ? 'Pavel Novák' : 'Павел Новак',
      role: language === 'cs' ? 'Ředitel, TechStart s.r.o.' : 'Директор, TechStart s.r.o.',
      content: language === 'cs'
        ? 'Natalya nám pomohla nejen s účetnictvím, ale i s optimalizací daní. Její profesionální přístup a včasné rady nám ušetřily spoustu času i peněz.'
        : 'Наталья помогла нам не только с бухгалтерией, но и с оптимизацией налогов. Ее профессиональный подход и своевременные советы сэкономили нам много времени и денег.',
      years: language === 'cs' ? 'Klient od 2020' : 'Клиент с 2020'
    },
    {
      name: language === 'cs' ? 'Marie Svobodová' : 'Мария Свободова',
      role: language === 'cs' ? 'Majitelka, Design Studio' : 'Владелица, Design Studio',
      content: language === 'cs'
        ? 'Konečně mám účetní, která rozumí potřebám malého podnikání. Vždy dostanu jasnou odpověď a cítím se s účetnictvím bezpečně.'
        : 'Наконец-то у меня есть бухгалтер, который понимает потребности малого бизнеса. Всегда получаю ясный ответ и чувствую себя с бухгалтерией в безопасности.',
      years: language === 'cs' ? 'Klientka od 2019' : 'Клиентка с 2019'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={language === 'cs' 
          ? 'O nás - Natalya Shakh Účetní' 
          : 'О нас - Natalya Shakh Бухгалтер'
        }
        description={language === 'cs'
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
                {language === 'cs' ? 'Natalya Shakh' : 'Наталья Шах'}
              </h1>
              <div className="text-xl text-brand-emerald font-medium mb-6">
                {language === 'cs' ? 'Certifikovaný účetní' : 'Сертифицированный бухгалтер'}
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {language === 'cs'
                  ? 'S více než 12 lety zkušeností v oblasti účetnictví a daňového poradenství pomáhám malým a středním podnikům efektivně spravovat jejich finance. Specializuji se na osobní přístup a dlouhodobé partnerství s klienty.'
                  : 'С более чем 12-летним опытом в области бухгалтерского учета и налогового консультирования я помогаю малому и среднему бизнесу эффективно управлять их финансами. Специализируюсь на индивидуальном подходе и долгосрочном партнерстве с клиентами.'}
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

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-neutral-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-4xl font-bold text-brand-emerald">NS</div>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg px-4 py-2 inline-block">
                    <div className="text-sm font-medium text-neutral-700">
                      {language === 'cs' ? 'Licence ČR' : 'Лицензия ЧР'}
                    </div>
                    <div className="text-xs text-neutral-600">#ACC-2019-567</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Profesní kvalifikace' : 'Профессиональная квалификация'}
            </h2>
            <p className="text-lg text-neutral-600">
              {language === 'cs' 
                ? 'Garantovaná kvalita službami založenými na odbornosti a zkušenostech'
                : 'Гарантированное качество услуг, основанных на экспертизе и опыте'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex items-center justify-center">
                      <credential.icon className="w-8 h-8 text-neutral-900" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{credential.title}</CardTitle>
                    <CardDescription className="text-neutral-600 mt-2">
                      {credential.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-500">{credential.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Zkušenosti a úspěchy' : 'Опыт и достижения'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Více než dekáda práce s malými a středními podniky mi umožnila získat hluboké porozumění jejich specifickým potřebám.'
                : 'Более десятилетия работы с малым и средним бизнесом позволили мне глубоко понять их специфические потребности.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-neutral-900" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-brand-emerald">{achievement.number}</CardTitle>
                    <CardDescription className="text-neutral-600 mt-2">
                      {achievement.label}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              {language === 'cs' ? 'Moje cesta' : 'Мой путь'}
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                  {language === 'cs' ? 'Vzdělání a začátky' : 'Образование и начало'}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {language === 'cs'
                    ? 'Svou kariéru jsem začala studiem ekonomie na Vysoké škole ekonomické v Praze. Po získání magisterského titulu jsem se specializovala na účetnictví a daňové poradenství, kde jsem získala certifikaci od Ministerstva financí ČR.'
                    : 'Я начала свою карьеру с изучения экономики в Высшей школе экономики в Праге. После получения степени магистра я специализировалась на бухгалтерском учете и налоговом консультировании, где получила сертификацию от Министерства финансов ЧР.'}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                  {language === 'cs' ? 'Současnost' : 'Настоящее'}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {language === 'cs'
                    ? 'Dnes poskytuju účetní služby více než 150 klientům, převážně malým a středním podnikům. Specializuji se na osobní přístup, moderní technologie a efektivní komunikaci. Mým cílem je být nejen účetní, ale i trusted partnerem pro rozvoj podnikání.'
                    : 'Сегодня я предоставляю бухгалтерские услуги более чем 150 клиентам, в основном малому и среднему бизнесу. Специализируюсь на индивидуальном подходе, современных технологиях и эффективной коммуникации. Моя цель - быть не только бухгалтером, но и надежным партнером для развития бизнеса.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Reference klientů' : 'Отзывы клиентов'}
            </h2>
            <p className="text-lg text-neutral-600">
              {language === 'cs' 
                ? 'Spokojení klienti jsou naší nejlepší referencí'
                : 'Довольные клиенты - наша лучшая рекомендация'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm">
                  <CardContent className="p-8">
                    <p className="text-neutral-600 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-neutral-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="text-xs text-brand-emerald font-medium">
                        {testimonial.years}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Philosophy */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                {language === 'cs' ? 'Můj přístup k práci' : 'Мой подход к работе'}
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                {language === 'cs'
                  ? 'Věřím, že účetnictví by mělo být transparentní, srozumitelné a především užitečné pro rozvoj podnikání. Proto se zaměřuji nejen na správné vedení účetních knih, ale i na poskytování strategických rad.'
                  : 'Я верю, что бухгалтерский учет должен быть прозрачным, понятным и, прежде всего, полезным для развития бизнеса. Поэтому я сосредотачиваюсь не только на правильном ведении бухгалтерских книг, но и на предоставлении стратегических советов.'}
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: language === 'cs' ? 'Transparentnost' : 'Прозрачность',
                    description: language === 'cs' 
                      ? 'Všechny procesy jsou jasně vysvětlené a dokumentované'
                      : 'Все процессы четко объяснены и задокументированы'
                  },
                  {
                    title: language === 'cs' ? 'Dostupnost' : 'Доступность',
                    description: language === 'cs'
                      ? 'Rychlá komunikace a pravidelné konzultace'
                      : 'Быстрая коммуникация и регулярные консультации'
                  },
                  {
                    title: language === 'cs' ? 'Partnerství' : 'Партнерство',
                    description: language === 'cs'
                      ? 'Dlouhodobá spolupráce založená na důvěře a výsledcích'
                      : 'Долгосрочное сотрудничество, основанное на доверии и результатах'
                  }
                ].map((principle, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 bg-brand-emerald rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-neutral-600">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">
                    {language === 'cs' ? 'Specializace' : 'Специализация'}
                  </h3>
                  <div className="space-y-4">
                    {[
                      language === 'cs' ? 'Malé a střední podniky' : 'Малый и средний бизнес',
                      language === 'cs' ? 'IT a e-commerce firmy' : 'IT и e-commerce компании',
                      language === 'cs' ? 'Služby a konzultace' : 'Услуги и консультации',
                      language === 'cs' ? 'Gastronomie a retail' : 'Гастрономия и ритейл'
                    ].map((specialty, index) => (
                      <div key={index} className="flex items-center justify-center gap-3 py-2">
                        <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                        <span className="text-neutral-700">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-brand-emerald">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">
              {language === 'cs' 
                ? 'Začněme spolupracovat' 
                : 'Давайте начнем сотрудничество'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'cs'
                ? 'Budu ráda, když se seznámíme osobně a probereme, jak mohu pomoci vašemu podnikání.'
                : 'Буду рада познакомиться лично и обсудить, как я могу помочь вашему бизнесу.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-brand-emerald hover:bg-neutral-50">
                  <Calendar className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Objednat konzultaci' : 'Записаться на консультацию'}
                </Button>
              </Link>
              <a href="mailto:ucetnipraha@atlas.cz">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
