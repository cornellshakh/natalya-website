import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ContactButton() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-8 right-8 z-40"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/contact"
        className="flex items-center space-x-2 px-6 py-3 bg-[#eaf4e5] text-[#4c7c42] rounded-full shadow-lg 
                   hover:bg-[#eaf4e5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#eaf4e5] focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">{t('home.cta.button')}</span>
      </Link>
    </motion.div>
  );
}