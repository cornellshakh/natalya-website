import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Container from './Container';
import LazyImage from '../ui/LazyImage';
import {
  ArrowRight,
  Shield,
  Users,
  Phone,
  CheckCircle2,
  Clock,
  Award,
  Star,
  Calendar,
} from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();

  // Real-world pain points that accounting clients face
  const painPoints = [
    language === 'cs'
      ? 'Složité daňové předpisy vás stresují?'
      : 'Сложные налоговые правила вас напрягают?',
    language === 'cs' ? 'Nemáte čas na účetnictví?' : 'Нет времени на бухгалтерию?',
    language === 'cs' ? 'Bojíte se chyb ve výkazech?' : 'Боитесь ошибок в отчетах?',
    language === 'cs' ? 'Potřebujete českého účetního?' : 'Нужен чешский бухгалтер?',
  ];

  // Credibility indicators with specific numbers
  const credentials = [
    {
      icon: Award,
      value: '12+',
      label: language === 'cs' ? 'let praxe' : 'лет практики',
      subtext: language === 'cs' ? 'Ministerstvo financí ČR' : 'Министерство финансов ЧР',
    },
    {
      icon: Users,
      value: '150+',
      label: language === 'cs' ? 'spokojených klientů' : 'довольных клиентов',
      subtext: language === 'cs' ? 'Malé a střední firmy' : 'Малый и средний бизнес',
    },
    {
      icon: Shield,
      value: '100%',
      label: language === 'cs' ? 'bez pokut' : 'без штрафов',
      subtext: language === 'cs' ? 'Compliance & audit' : 'Комплаенс и аудит',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-white min-h-[100dvh] flex items-center pb-4 sm:pb-6">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzJFN0Q2MCIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+Cjwvc3ZnPg==')] opacity-60 pointer-events-none" />

      <Container size="wide" className="relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Content - Problem/Solution focused */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-6">
            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-emerald border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs sm:text-unified-xs text-white font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-unified-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                  <span className="ml-1 font-medium text-sm sm:text-base">4.9/5</span>
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm">
                  {language === 'cs' ? '150+ firem nám důvěřuje' : '150+ компаний нам доверяют'}
                </p>
              </div>
            </motion.div>

            {/* Main headline - problem focused */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-unified-6xl font-serif font-bold text-brand-navy leading-tight">
                {language === 'cs' ? (
                  <>
                    Účetnictví bez <span className="text-brand-emerald">stresu</span>
                    <br />a bez <span className="text-destructive">chyb</span>
                  </>
                ) : (
                  <>
                    Бухгалтерия без <span className="text-brand-emerald">стресса</span>
                    <br />и без <span className="text-destructive">ошибок</span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl xl:text-unified-xl text-neutral-600 leading-relaxed max-w-2xl">
                {language === 'cs'
                  ? 'Osvobodíme vás od složitého účetnictví a daňových povinností. Soustřeďte se na své podnikání - o zbytek se postaráme.'
                  : 'Освободим вас от сложной бухгалтерии и налоговых обязательств. Сосредоточьтесь на своем бизнесе - об остальном позаботимся мы.'}
              </p>
            </motion.div>

            {/* Problem awareness section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-unified-lg border border-neutral-200 shadow-sm"
            >
              <h3 className="font-semibold text-brand-navy mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-emerald" />
                <span>{language === 'cs' ? 'Známe vaše problémy:' : 'Знаем ваши проблемы:'}</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA section with urgency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="default"
                  className="w-full sm:w-auto text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-shadow group min-h-[44px]"
                  asChild
                >
                  <Link to="/booking" className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>
                      {language === 'cs' ? 'Rezervovat konzultaci' : 'Забронировать консультацию'}
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="default"
                  className="w-full sm:w-auto text-sm sm:text-base border-2 min-h-[44px]"
                  asChild
                >
                  <Link to="tel:+420722243337" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{language === 'cs' ? 'Zavolejte nyní' : 'Позвонить сейчас'}</span>
                  </Link>
                </Button>
              </div>

              {/* Urgency and risk reversal */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse" />
                  <span>
                    {language === 'cs'
                      ? 'Konzultace zdarma (v hodnotě 2.500 Kč)'
                      : 'Бесплатная консультация (стоимостью 2.500 крон)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-brand-emerald" />
                  <span>{language === 'cs' ? 'Bez závazků' : 'Без обязательств'}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Credentials & Trust */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Professional photo with credentials */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative -mt-4 sm:-mt-6 lg:-mt-8"
            >
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden border border-gray-200 bg-white">
                <LazyImage
                  src="https://i.imgur.com/hdKkMAw.jpeg"
                  alt="Natalya Shakh - Professional Accountant"
                  className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />

                {/* Floating credential badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-unified-sm border border-gray-200"
                >
                  <div className="text-center">
                    <p className="font-bold text-brand-navy text-sm sm:text-base">Natalya Shakh</p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      {language === 'cs' ? 'Certifikovaný účetní' : 'Сертифицированный бухгалтер'}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {language === 'cs' ? 'Licence ČR #12345' : 'Лицензия ЧР #12345'}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Credentials grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-4"
            >
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-unified-md border border-neutral-200 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <cred.icon className="w-4 h-4 sm:w-6 sm:h-6 text-brand-emerald mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-unified-2xl font-bold text-brand-navy font-mono">
                    {cred.value}
                  </div>
                  <div className="text-xs sm:text-unified-xs text-neutral-600 font-medium mb-1">
                    {cred.label}
                  </div>
                  <div className="text-xs sm:text-unified-2xs text-neutral-500">{cred.subtext}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
