import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaVariants = {
    hidden: {
      opacity: 0,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)',
    },
    visible: {
      opacity: 1,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        // GPU optimization
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const expandedVariants = {
    hidden: {
      opacity: 0,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 20px, 0) scale3d(0.9, 0.9, 1)',
    },
    visible: {
      opacity: 1,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        staggerChildren: 0.1,
        // GPU optimization
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      // Use transform3d for GPU acceleration
      transform: 'translate3d(20px, 0, 0)',
    },
    visible: { 
      opacity: 1, 
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 0, 0)',
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.button
                key="collapsed"
                onClick={() => setIsExpanded(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t('nav.contact')}
              >
                <MessageCircle className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </motion.button>
            ) : (
              <motion.div
                key="expanded"
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 min-w-[280px]"
                variants={expandedVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{t('contact.getInTouch')}</h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/booking"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                      onClick={() => setIsExpanded(false)}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {language === 'cs' ? 'Rezervace termínu' : 'Бронирование встречи'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {language === 'cs' ? 'Online rezervace' : 'Онлайн бронирование'}
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link
                      to="/contact"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                      onClick={() => setIsExpanded(false)}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.form')}</p>
                        <p className="text-sm text-gray-500">{t('contact.quickMessage')}</p>
                      </div>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <a
                      href="tel:+420123456789"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                      onClick={() => setIsExpanded(false)}
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.phone')}</p>
                        <p className="text-sm text-gray-500">+420 123 456 789</p>
                      </div>
                    </a>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">{t('contact.responseTime')}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
