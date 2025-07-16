import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white transform-gpu"
      style={{
        willChange: 'opacity',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            // Use transform3d for GPU acceleration - only transform properties
            transform: [
              'translate3d(0, 0, 0) scale3d(1, 1, 1) rotate(0deg)',
              'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotate(180deg)',
              'translate3d(0, 0, 0) scale3d(1, 1, 1) rotate(360deg)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full transform-gpu"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-600 font-medium"
        >
          Loading...
        </motion.span>
      </div>
    </motion.div>
  );
}
