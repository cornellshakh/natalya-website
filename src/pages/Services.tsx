import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, CheckCircle2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import FAQ from '../components/FAQ';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';

export default function Services() {
  const { language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const mainServices = [
    {
      title:
        language === 'cs'
          ? 'Komplexní vedení účetnictví a ekonomické služby'
          : 'Комплексное ведение бухгалтерии и экономические услуги',
      price: language === 'cs' ? 'od 1.000 Kč' : 'от 1.000 крон',
      description:
        language === 'cs'
          ? 'Kompletní spektrum účetních a ekonomických služeb pro firmy všech velikostí'
          : 'Полный спектр бухгалтерских и экономических услуг для компаний всех размеров',
      features: [
        language === 'cs'
          ? 'Vedení účetnictví (dříve podvojné účetnictví)'
          : 'Ведение бухгалтерии (ранее двойная бухгалтерия)',
        language === 'cs'
          ? 'Daňová evidence (dříve jednoduché účetnictví)'
          : 'Налоговый учет (ранее простая бухгалтерия)',
        language === 'cs'
          ? 'Personální a mzdová agenda'
          : 'Кадровая работа и расчет заработной платы',
        language === 'cs' ? 'Zpracování daňových přiznání' : 'Обработка налоговых деклараций',
        language === 'cs' ? 'Skladové hospodářství' : 'Складское хозяйство',
        language === 'cs' ? 'Evidence majetku' : 'Учет имущества',
        language === 'cs' ? 'Zastupování na úřadech' : 'Представительство в органах',
        language === 'cs' ? 'Účetní poradenství' : 'Бухгалтерское консультирование',
        language === 'cs'
          ? 'Předávání dokladů dle dohody s klienty'
          : 'Передача документов по договоренности с клиентами',
      ],
    },
    {
      title: language === 'cs' ? 'Daňové služby' : 'Налоговые услуги',
      price: language === 'cs' ? 'od 500 Kč' : 'от 500 крон',
      description:
        language === 'cs'
          ? 'Komplexní daňové poradenství a optimalizace pro fyzické i právnické osoby'
          : 'Комплексное налоговое консультирование и оптимизация для физических и юридических лиц',
      features: [
        language === 'cs'
          ? 'Příprava daňových přiznání (daň z příjmů FO a PO, DPH, silniční daň, atd.)'
          : 'Подготовка налоговых деклараций (подоходный налог ФЛ и ЮЛ, НДС, дорожный налог и т.д.)',
        language === 'cs'
          ? 'Daňové poradenství a optimalizace'
          : 'Налоговое консультирование и оптимизация',
        language === 'cs' ? 'Mezinárodní zdanění' : 'Международное налогообложение',
        language === 'cs'
          ? 'Komunikace a zastupování před finančním úřadem'
          : 'Общение и представительство перед налоговой инспекцией',
        language === 'cs'
          ? 'Nastavení a tvorba dokumentace k převodním cenám'
          : 'Настройка и создание документации по трансфертному ценообразованию',
        language === 'cs'
          ? 'Daňové a finanční due-diligence'
          : 'Налоговый и финансовый due-diligence',
      ],
    },
    {
      title: language === 'cs' ? 'Právní služby' : 'Юридические услуги',
      price: language === 'cs' ? 'Konzultace zdarma' : 'Бесплатная консультация',
      description:
        language === 'cs'
          ? 'Odborné právní poradenství v oblasti obchodního, pracovního a finančního práva'
          : 'Экспертные юридические консультации в области коммерческого, трудового и финансового права',
      features: [
        language === 'cs'
          ? 'Obchodní právo a zakládání společností'
          : 'Коммерческое право и регистрация компаний',
        language === 'cs' ? 'Pracovní právo' : 'Трудовое право',
        language === 'cs' ? 'Finanční právo' : 'Финансовое право',
      ],
    },
  ];

  const pricingExamples = [
    {
      category: language === 'cs' ? 'Vedení účetnictví' : 'Ведение бухгалтерии',
      items: [
        {
          service:
            language === 'cs'
              ? 'Právnická osoba neplátce DPH'
              : 'Юридическое лицо неплательщик НДС',
          price: language === 'cs' ? 'od 2.000 Kč' : 'от 2.000 крон',
        },
        {
          service:
            language === 'cs' ? 'Právnická osoba plátce DPH' : 'Юридическое лицо плательщик НДС',
          price: language === 'cs' ? 'od 3.000 Kč' : 'от 3.000 крон',
        },
        {
          service:
            language === 'cs' ? 'Fyzická osoba neplátce DPH' : 'Физическое лицо неплательщик НДС',
          price: language === 'cs' ? 'od 1.000 Kč' : 'от 1.000 крон',
        },
        {
          service:
            language === 'cs' ? 'Fyzická osoba plátce DPH' : 'Физическое лицо плательщик НДС',
          price: language === 'cs' ? 'od 1.500 Kč' : 'от 1.500 крон',
        },
        {
          service:
            language === 'cs' ? 'Zpracování účetní závěrky' : 'Обработка финансовой отчетности',
          price: language === 'cs' ? 'od 5.000 Kč' : 'от 5.000 крон',
        },
      ],
    },
    {
      category: language === 'cs' ? 'Mzdová agenda' : 'Расчет заработной платы',
      items: [
        {
          service:
            language === 'cs'
              ? 'Měsíční mzda do 5 zaměstnanců'
              : 'Месячная зарплата до 5 сотрудников',
          price: language === 'cs' ? '300 Kč/zam' : '300 крон/сотр',
        },
        {
          service:
            language === 'cs'
              ? 'Měsíční mzda nad 10 zaměstnanců'
              : 'Месячная зарплата свыше 10 сотрудников',
          price: language === 'cs' ? '250 Kč/zam' : '250 крон/сотр',
        },
        {
          service: language === 'cs' ? 'Zpracování DPP' : 'Обработка договоров подряда',
          price: language === 'cs' ? '150 Kč/zam' : '150 крон/сотр',
        },
      ],
    },
    {
      category: language === 'cs' ? 'Daňová přiznání' : 'Налоговые декларации',
      items: [
        {
          service:
            language === 'cs'
              ? 'Daň z příjmů právnických osob včetně příloh'
              : 'Подоходный налог юридических лиц включая приложения',
          price: language === 'cs' ? 'od 4.000 Kč' : 'от 4.000 крон',
        },
        {
          service:
            language === 'cs' ? 'Daň z příjmů fyzických osob' : 'Подоходный налог физических лиц',
          price: language === 'cs' ? 'od 1.500 Kč' : 'от 1.500 крон',
        },
        {
          service:
            language === 'cs'
              ? 'Daň z příjmů FO OSVČ včetně přehledů SP a ZP'
              : 'Подоходный налог ФЛ ИП включая отчеты соцстрах',
          price: language === 'cs' ? 'od 2.500 Kč' : 'от 2.500 крон',
        },
        {
          service:
            language === 'cs' ? 'DPH včetně souhrnného hlášení' : 'НДС включая сводную декларацию',
          price: language === 'cs' ? 'od 500 Kč' : 'от 500 крон',
        },
        {
          service: language === 'cs' ? 'Kontrolní hlášení' : 'Контрольный отчет',
          price: language === 'cs' ? '500 Kč' : '500 крон',
        },
        {
          service: language === 'cs' ? 'Silniční daň' : 'Дорожный налог',
          price: language === 'cs' ? 'od 2.000 Kč' : 'от 2.000 крон',
        },
      ],
    },
    {
      category: language === 'cs' ? 'Poradenství a služby' : 'Консультирование и услуги',
      items: [
        {
          service: language === 'cs' ? 'Účetní poradenství' : 'Бухгалтерское консультирование',
          price: language === 'cs' ? '2.000 Kč/hodina' : '2.000 крон/час',
        },
        {
          service: language === 'cs' ? 'Daňové poradenství' : 'Налоговое консультирование',
          price: language === 'cs' ? '3.000 Kč/hodina' : '3.000 крон/час',
        },
        {
          service: language === 'cs' ? 'Zastupování na úřadech' : 'Представительство в органах',
          price: language === 'cs' ? '2.000 Kč/hodina' : '2.000 крон/час',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={
          language === 'cs'
            ? 'Účetní služby Praha - Natalya Shakh'
            : 'Бухгалтерские услуги Прага - Natalya Shakh'
        }
        description={
          language === 'cs'
            ? 'Komplexní účetní služby v Praze. Vedení účetnictví, daňové poradenství a mzdová agenda pro malé a střední podniky.'
            : 'Комплексные бухгалтерские услуги в Праге. Ведение бухгалтерии, налоговое консультирование и расчет зарплат для малого и среднего бизнеса.'
        }
        canonical="https://natalya-website.vercel.app/services"
      />
      <StructuredData type="service" />

      {/* Hero Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="text-4xl font-bold text-neutral-900 mb-6">
              {language === 'cs' ? 'Naše služby' : 'Наши услуги'}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {language === 'cs'
                ? 'Poskytujeme komplexní účetní služby přizpůsobené potřebám vašeho podnikání. Od základního vedení účetnictví až po strategické finanční poradenství.'
                : 'Предоставляем комплексные бухгалтерские услуги, адаптированные к потребностям вашего бизнеса. От базового ведения бухгалтерии до стратегического финансового консультирования.'}
            </p>
          </motion.div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 border border-brand-emerald/20 rounded-full px-6 py-3">
              <CheckCircle2 className="w-5 h-5 text-neutral-900" />
              <span className="text-neutral-700 font-medium">
                {language === 'cs'
                  ? 'Certifikovaný účetní s licencí ČR'
                  : 'Сертифицированный бухгалтер с лицензией ЧР'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Hlavní služby' : 'Основные услуги'}
            </h2>
            <p className="text-lg text-neutral-600">
              {language === 'cs'
                ? 'Transparentní ceny, jasně definované služby'
                : 'Прозрачные цены, четко определенные услуги'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg border-neutral-200">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-6 flex items-center justify-center">
                      <Calculator className="w-12 h-12 text-neutral-900" />
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-emerald">{service.price}</div>
                    </div>
                    <CardDescription className="text-neutral-600 mt-4">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-brand-emerald hover:bg-brand-emerald/90" asChild>
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {language === 'cs' ? 'Konzultace zdarma' : 'Бесплатная консультация'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs'
                ? 'Ilustrační ceník našich služeb'
                : 'Иллюстративный прайс-лист наших услуг'}
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              {language === 'cs'
                ? 'Přehled orientačních cen - konečná cena je vždy stanovena individuálně dle složitosti a rozsahu služeb'
                : 'Обзор ориентировочных цен - окончательная цена всегда определяется индивидуально в зависимости от сложности и объема услуг'}
            </p>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto">
              {language === 'cs'
                ? 'Předávání dokladů probíhá dle dohody s klienty - v naší kanceláři, v sídle klienta nebo kdekoli dle dohody'
                : 'Передача документов происходит по договоренности с клиентами - в нашем офисе, в офисе клиента или где угодно по договоренности'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingExamples.map((category, index) => (
              <motion.div key={category.category} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {category.category}
                    </h3>
                    <div className="grid gap-4 mb-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center">
                          <span className="text-neutral-600">{item.service}</span>
                          <span className="text-neutral-900 font-medium">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">
                        {language === 'cs' ? 'Nezávazná poptávka' : 'Необязательный запрос'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              {language === 'cs' ? 'Proč si vybrat naše služby?' : 'Почему выбрать наши услуги?'}
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-lg text-neutral-600 mb-8">
                {language === 'cs'
                  ? 'Více než 12 let zkušeností v poskytování účetních služeb malým a středním podnikům. Specializujeme se na efektivní procesy a osobní přístup.'
                  : 'Более 12 лет опыта в предоставлении бухгалтерских услуг малому и среднему бизнесу. Специализируемся на эффективных процессах и индивидуальном подходе.'}
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: language === 'cs' ? 'Osobní přístup' : 'Индивидуальный подход',
                    description:
                      language === 'cs'
                        ? 'Každý klient má přiděleného účetního, který zná jeho podnikání do detailu'
                        : 'У каждого клиента есть назначенный бухгалтер, который знает его бизнес в деталях',
                  },
                  {
                    title: language === 'cs' ? 'Moderne technologie' : 'Современные технологии',
                    description:
                      language === 'cs'
                        ? 'Využíváme nejnovější účetní software pro maximální efektivitu a přesnost'
                        : 'Используем новейшее бухгалтерское ПО для максимальной эффективности и точности',
                  },
                  {
                    title:
                      language === 'cs' ? 'Transparentní komunikace' : 'Прозрачная коммуникация',
                    description:
                      language === 'cs'
                        ? 'Pravidelné reporty a online přístup k vašim účetním datům 24/7'
                        : 'Регулярные отчеты и онлайн доступ к вашим бухгалтерским данным 24/7',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 bg-brand-emerald rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-emerald mb-2">12+</div>
                    <div className="text-sm text-neutral-600">
                      {language === 'cs' ? 'let zkušeností' : 'лет опыта'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-emerald mb-2">150+</div>
                    <div className="text-sm text-neutral-600">
                      {language === 'cs' ? 'spokojených klientů' : 'довольных клиентов'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-emerald mb-2">0</div>
                    <div className="text-sm text-neutral-600">
                      {language === 'cs' ? 'pokut za 24 měsíců' : 'штрафов за 24 месяца'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-emerald mb-2">24/7</div>
                    <div className="text-sm text-neutral-600">
                      {language === 'cs' ? 'online přístup' : 'онлайн доступ'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {language === 'cs' ? 'Často kladené otázky' : 'Часто задаваемые вопросы'}
            </h2>
          </motion.div>
          <FAQ />
        </div>
      </section>
    </div>
  );
}
