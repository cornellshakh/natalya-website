import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

import { SkeletonTestimonial } from './ui/Skeleton';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  location: string;
}

export default function Testimonials() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jana Novákova',
      role: language === 'cs' ? 'Majitelka' : 'Владелица',
      company: 'Café Praha',
      content:
        language === 'cs'
          ? 'Natalya mi pomohla s účetnictvím mé kavárny od samého začátku. Její profesionalita a ochota jsou na nejvyšší úrovni. Díky jejím radám jsem ušetřila spoustu času i peněz.'
          : 'Наталья помогла мне с бухгалтерией моего кафе с самого начала. Ее профессионализм и готовность помочь на высшем уровне. Благодаря ее советам я сэкономила много времени и денег.',
      rating: 5,
      location: 'Praha, ČR',
    },
    {
      id: 2,
      name: 'Mikhail Petrov',
      role: language === 'cs' ? 'IT Konzultant' : 'IT Консультант',
      company: 'TechSolutions s.r.o.',
      content:
        language === 'cs'
          ? 'Vynikající služby! Natalya mi nejen vedla účetnictví, ale také poradila s optimalizací daní. Její znalost českého i ruského trhu je neocenitelná.'
          : 'Превосходные услуги! Наталья не только вела мою бухгалтерию, но и посоветовала оптимизацию налогов. Ее знание чешского и российского рынка бесценно.',
      rating: 5,
      location: 'Brno, ČR',
    },
    {
      id: 3,
      name: 'Eva Svobodova',
      role: language === 'cs' ? 'Designérka' : 'Дизайнер',
      company: 'Creative Studio',
      content:
        language === 'cs'
          ? 'S Natalyou spolupracuji už tři roky a jsem naprosto spokojená. Vždy se na ni mohu spolehnout a její rady mi pomáhají v rozvoji podnikání.'
          : 'Я сотрудничаю с Натальей уже три года и полностью довольна. Всегда могу на нее положиться, и ее советы помогают мне в развитии бизнеса.',
      rating: 5,
      location: 'Ostrava, ČR',
    },
    {
      id: 4,
      name: 'Pavel Černý',
      role: language === 'cs' ? 'Obchodník' : 'Торговец',
      company: 'Import/Export CZ',
      content:
        language === 'cs'
          ? 'Díky Natalye mám účetnictví konečně pod kontrolou. Její komunikace v češtině i ruštině je pro můj mezinárodní byznys zásadní.'
          : 'Благодаря Наталье у меня наконец-то под контролем бухгалтерия. Ее общение на чешском и русском языках критично для моего международного бизнеса.',
      rating: 5,
      location: 'Praha, ČR',
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isLoading]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-neutral-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-48 h-8 bg-neutral-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-6 bg-neutral-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }, (_, i) => (
              <SkeletonTestimonial key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 h-1 bg-brand-emerald rounded mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            {language === 'cs' ? 'Co říkají naši klienti' : 'Что говорят наши клиенты'}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {language === 'cs'
              ? 'Více než 150 spokojených klientů důvěřuje našim službám'
              : 'Более 150 довольных клиентов доверяют нашим услугам'}
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 max-w-4xl mx-auto border border-neutral-100"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 bg-brand-emerald rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8 italic font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-emerald to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-neutral-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-neutral-600">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {testimonials[currentIndex].company} • {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="pointer-events-auto shadow-lg backdrop-blur-sm bg-white/80 border-white/50 hover:bg-white hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="pointer-events-auto shadow-lg backdrop-blur-sm bg-white/80 border-white/50 hover:bg-white hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-emerald shadow-lg scale-110'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              number: '150+',
              label: language === 'cs' ? 'Spokojených klientů' : 'Довольных клиентов',
            },
            {
              number: '99%',
              label: language === 'cs' ? 'Míra spokojenosti' : 'Уровень удовлетворенности',
            },
            {
              number: '12+',
              label: language === 'cs' ? 'Let zkušeností' : 'Лет опыта',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl font-bold text-brand-emerald mb-2">{stat.number}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
