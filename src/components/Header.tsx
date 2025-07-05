import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <nav className="container-pad">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Text */}
          <Link 
            to="/" 
            className="relative group flex items-center"
          >
            <img 
              src="https://i.imgur.com/mHlm62R.png" 
              alt="Logo" 
              className="h-10 w-auto mr-2 opacity-80 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" 
            />
            <span className="text-lg font-albert font-black text-gray-900 opacity-85 group-hover:opacity-100 group-hover:text-[#00000] transition-all duration-200 uppercase tracking-[0.05em]">
              Shakh
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#4c7c42] group-hover:w-full transition-all duration-300"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive(path)
                    ? 'text-[#4c7c42] bg-[#eaf4e5]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-[#eaf4e5]'
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('cs')}
                className={`
                  px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                  ${language === 'cs'
                    ? 'bg-white text-[#4c7c42] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                CS
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('ru')}
                className={`
                  px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                  ${language === 'ru'
                    ? 'bg-white text-[#4c7c42] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                RU
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 
                hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            navItems={navItems} 
            isActive={isActive} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </header>
  );
}
