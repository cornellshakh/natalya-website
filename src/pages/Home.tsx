import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import {
  Calculator,
  FileText,
  Users,
  CheckCircle2,
  Star,
  Phone,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
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
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Calculator,
      title: language === 'cs' ? 'Vedení účetnictví' : 'Ведение бухгалтерии',
      description: language === 'cs' 
        ? 'Komplexní vedení účetnictví, daňová evidence, mzdová agenda a ekonomické služby'
        : 'Комплексное ведение бухгалтерии, налогового учета, расчет зарплат и экономические услуги',
      price: language === 'cs' ? 'od 1.000 Kč' : 'от 1.000 крон'
    },
    {
      icon: FileText,
      title: language === 'cs' ? 'Daňové služby' : 'Налоговые услуги',
      description: language === 'cs'
        ? 'Daňová přiznání, optimalizace, mezinárodní zdanění a zastupování před úřady'
        : 'Налоговые декларации, оптимизация, международное налогообложение и представительство в органах',
      price: language === 'cs' ? 'od 500 Kč' : 'от 500 крон'
    },
    {
      icon: Users,
      title: language === 'cs' ? 'Právní služby' : 'Юридические услуги',
      description: language === 'cs'
        ? 'Obchodní právo, zakládání společností, pracovní a finanční právo'
        : 'Коммерческое право, регистрация компаний, трудовое и финансовое право',
      price: language === 'cs' ? 'Konzultace zdarma' : 'Бесплатная консультация'
    }
  ];

  const testimonials = [
    {
      name: language === 'cs' ? 'Pavel Novák' : 'Павел Новак',
      role: language === 'cs' ? 'Ředitel, TechStart s.r.o.' : 'Директор, TechStart s.r.o.',
      content: language === 'cs'
        ? 'Díky Natalyi jsme ušetřili nejen čas, ale i značné finanční prostředky. Profesionální přístup a vždy včasné rady.'
        : 'Благодаря Наталье мы сэкономили не только время, но и значительные финансовые средства. Профессиональный подход и всегда своевременные советы.',
      rating: 5
    },
    {
      name: language === 'cs' ? 'Marie Svobodová' : 'Мария Свободова',
      role: language === 'cs' ? 'Majitelka, Design Studio' : 'Владелица, Design Studio',
      content: language === 'cs'
        ? 'Konečně mám účetní, která rozumí potřebám malého podnikání. Doporučuji všem!'
        : 'Наконец-то у меня есть бухгалтер, который понимает потребности малого бизнеса. Рекомендую всем!',
      rating: 5
    },
    {
      name: language === 'cs' ? 'Pavel Novák' : 'Павел Новак',
      role: language === 'cs' ? 'CEO TechStart s.r.o.' : 'CEO TechStart s.r.o.',
      content: language === 'cs'
        ? 'Díky Natalye jsme ušetřili 40% času na účetnictví a nikdy jsme neměli problém s finančním úřadem. Klient od 2019.'
        : 'Благодаря Наталье мы сэкономили 40% времени на бухгалтерии и никогда не имели проблем с налоговой. Клиент с 2019.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Natalya Shakh - Účetní služby"
        description={language === 'cs'
          ? 'Profesionální účetní služby, daňové poradenství a vedení účetnictví pro malé a střední podniky v České republice.'
          : 'Профессиональные бухгалтерские услуги, налоговое консультирование и ведение бухгалтерского учета для малого и среднего бизнеса в Чешской Республике.'
        }
        canonical="https://natalya-website.vercel.app/"
      />
      <StructuredData type="localBusiness" />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Section spacing="md" background="gray" containerSize="default">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Naše služby' : 'Наши услуги'}
          </h2>
          <p className="text-unified-lg text-neutral-600 max-w-2xl mx-auto">
            {language === 'cs'
              ? 'Komplexní účetní služby přizpůsobené potřebám vašeho podnikání'
              : 'Комплексные бухгалтерские услуги, адаптированные к потребностям вашего бизнеса'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-neutral-900" />
                  </div>
                  <CardTitle className="text-unified-xl font-semibold mb-2">{service.title}</CardTitle>
                  <div className="text-unified-2xl font-bold text-brand-emerald">{service.price}</div>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-neutral-600 text-unified-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <Link to="/services">
            <Button size="lg" className="bg-brand-emerald hover:bg-brand-emerald/90">
              {language === 'cs' ? 'Zobrazit všechny služby' : 'Показать все услуги'}
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section spacing="md" background="white" containerSize="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-unified-3xl font-bold text-neutral-900 mb-6">
              {language === 'cs' ? 'Proč si vybrat naše služby?' : 'Почему выбрать наши услуги?'}
            </h2>
            <p className="text-unified-lg text-neutral-600 mb-8">
              {language === 'cs'
                ? 'S více než 12 lety zkušeností poskytujeme špičkové účetní služby malým a středním podnikům. Naším cílem je zjednodušit vaše finanční procesy a maximalizovat vaše úspory.'
                : 'С более чем 12-летним опытом мы предоставляем первоклассные бухгалтерские услуги малому и среднему бизнесу. Наша цель - упростить ваши финансовые процессы и максимизировать ваши сбережения.'}
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  text: language === 'cs' ? 'Certifikovaný účetní s licencí ČR' : 'Сертифицированный бухгалтер с лицензией ЧР',
                },
                {
                  text: language === 'cs' ? '12+ let zkušeností' : '12+ лет опыта',
                },
                {
                  text: language === 'cs' ? 'Specializace na malé a střední podniky' : 'Специализация на малом и среднем бизнесе',
                },
                {
                  text: language === 'cs' ? 'Osobní přístup ke každému klientovi' : 'Индивидуальный подход к каждому клиенту',
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-neutral-900 mr-3 flex-shrink-0" />
                  <span className="text-neutral-600">{item.text}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg">
                {language === 'cs' ? 'Více o nás' : 'Больше о нас'}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-unified-3xl font-bold text-brand-emerald">12+</div>
                  <div className="text-unified-sm text-neutral-600">
                    {language === 'cs' ? 'let zkušeností' : 'лет опыта'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-unified-3xl font-bold text-brand-emerald">150+</div>
                  <div className="text-unified-sm text-neutral-600">
                    {language === 'cs' ? 'spokojených klientů' : 'довольных клиентов'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-unified-3xl font-bold text-brand-emerald">98%</div>
                  <div className="text-unified-sm text-neutral-600">
                    {language === 'cs' ? 'míra spokojenosti' : 'уровень удовлетворенности'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-unified-3xl font-bold text-brand-emerald">24/7</div>
                  <div className="text-unified-sm text-neutral-600">
                    {language === 'cs' ? 'podpora' : 'поддержка'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section spacing="md" background="gray" containerSize="default">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-unified-3xl font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Co říkají naši klienti' : 'Что говорят наши клиенты'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-neutral-100">
                      <span className="text-brand-emerald font-semibold text-unified-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                      <div className="text-unified-sm text-neutral-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="md" background="emerald" containerSize="content">
        <div className="text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-unified-3xl font-bold text-white mb-6">
              {language === 'cs' 
                ? 'Začněte ještě dnes' 
                : 'Начните уже сегодня'}
            </h2>
            <p className="text-unified-xl text-white/90 mb-8">
              {language === 'cs'
                ? 'Získejte bezplatnou konzultaci a zjistěte, jak vám můžeme pomoci optimalizovat vaše finance.'
                : 'Получите бесплатную консультацию и узнайте, как мы можем помочь оптимизировать ваши финансы.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-brand-emerald hover:bg-neutral-50">
                  <Calendar className="mr-2 w-5 h-5" />
                  {language === 'cs' ? 'Objednat konzultaci' : 'Записаться на консультацию'}
                </Button>
              </Link>
              <a href="tel:+420722243337">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 w-5 h-5" />
                  +420 722 243 337
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}