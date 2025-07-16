import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ 
            opacity: 0, 
            // Use transform3d for GPU acceleration
            transform: 'translate3d(0, 20px, 0)',
          }}
          animate={{ 
            opacity: 1, 
            // Use transform3d for GPU acceleration
            transform: 'translate3d(0, 0, 0)',
          }}
          exit={{ 
            opacity: 0, 
            // Use transform3d for GPU acceleration
            transform: 'translate3d(0, 20px, 0)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     transform-gpu button-gpu"
          whileHover={{ 
            // Use transform3d for GPU acceleration
            transform: 'translate3d(0, 0, 0) scale3d(1.1, 1.1, 1)',
          }}
          whileTap={{ 
            // Use transform3d for GPU acceleration
            transform: 'translate3d(0, 0, 0) scale3d(0.9, 0.9, 1)',
          }}
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            perspective: 1000,
          }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
