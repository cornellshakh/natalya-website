import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t('testimonials.items.0.name'),
      company: t('testimonials.items.0.company'),
      content: t('testimonials.items.0.content'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.items.1.name'),
      company: t('testimonials.items.1.company'),
      content: t('testimonials.items.1.content'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.items.2.name'),
      company: t('testimonials.items.2.company'),
      content: t('testimonials.items.2.content'),
      rating: 5
    },
    {
      id: 4,
      name: t('testimonials.items.3.name'),
      company: t('testimonials.items.3.company'),
      content: t('testimonials.items.3.content'),
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main testimonial display */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">{t('testimonials.stats.satisfaction')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-gray-600">{t('testimonials.stats.clients')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">{t('testimonials.stats.years')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-sm text-gray-600">{t('testimonials.stats.response')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
