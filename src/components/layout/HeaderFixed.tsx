import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function HeaderFixed() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/booking', label: language === 'cs' ? 'Rezervace' : 'Бронирование' },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-navy text-white px-4 py-2 rounded-lg shadow-lg z-50 font-medium transition-all duration-200 hover:bg-brand-navy-light focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:ring-offset-2"
      >
        {language === 'cs' ? 'Přeskočit na obsah' : 'Перейти к содержанию'}
      </a>

      {/* Top bar with contact info - Hidden on mobile */}
      <div className="bg-brand-navy text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
                <a 
                  href="tel:+420123456789" 
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 xl:w-4 xl:h-4" />
                <a 
                  href="mailto:info@natalyashakh.cz" 
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  info@natalyashakh.cz
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 xl:w-4 xl:h-4" />
                <span>Praha, Česká republika</span>
              </div>
            </div>
            
            {/* Language switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3 xl:w-4 xl:h-4" />
              <button
                onClick={() => setLanguage('cs')}
                className={cn(
                  'px-2 py-1 rounded text-xs font-medium transition-colors duration-200',
                  language === 'cs' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:text-primary text-gray-600'
                )}
                aria-label="Switch to Czech"
              >
                CS
              </button>
              <span className="text-neutral-400 text-xs">|</span>
              <button
                onClick={() => setLanguage('ru')}
                className={cn(
                  'px-2 py-1 rounded text-xs font-medium transition-colors duration-200',
                  language === 'ru' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:text-primary text-gray-600'
                )}
                aria-label="Switch to Russian"
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header 
        className={cn(
          'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b transition-all duration-300',
          isScrolled ? 'shadow-md border-neutral-200' : 'border-transparent'
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <img
                src="https://i.imgur.com/mHlm62R.png"
                alt="Natalya Shakh Logo"
                className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-serif font-bold text-brand-navy leading-tight">
                  Natalya Shakh
                </span>
                <span className="text-2xs sm:text-xs text-neutral-600 uppercase tracking-wide">
                  {language === 'cs' ? 'Účetní služby' : 'Бухгалтерские услуги'}
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    'relative px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive(path)
                      ? 'text-brand-emerald bg-brand-emerald/5'
                      : 'text-neutral-700 hover:text-brand-emerald hover:bg-brand-emerald/5'
                  )}
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {label}
                  {isActive(path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-emerald rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile language switcher */}
              <div className="flex items-center space-x-1 lg:hidden">
                <button
                  onClick={() => setLanguage('cs')}
                  className={cn(
                    'px-2 py-1 rounded text-xs font-medium transition-colors duration-200',
                    language === 'cs' 
                      ? 'bg-brand-emerald text-white' 
                      : 'text-neutral-700 hover:text-brand-emerald'
                  )}
                  aria-label="Switch to Czech"
                >
                  CS
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={cn(
                    'px-2 py-1 rounded text-xs font-medium transition-colors duration-200',
                    language === 'ru' 
                      ? 'bg-brand-emerald text-white' 
                      : 'text-neutral-700 hover:text-brand-emerald'
                  )}
                  aria-label="Switch to Russian"
                >
                  RU
                </button>
              </div>

              {/* CTA Button */}
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link to="/contact">
                  {language === 'cs' ? 'Konzultace' : 'Консультация'}
                </Link>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-brand-emerald hover:bg-neutral-100 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
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
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-neutral-200 bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      isActive(path)
                        ? 'text-brand-emerald bg-brand-emerald/5'
                        : 'text-neutral-700 hover:text-brand-emerald hover:bg-neutral-100'
                    )}
                  >
                    {label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-neutral-200">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      {language === 'cs' ? 'Konzultace zdarma' : 'Бесплатная консультация'}
                    </Link>
                  </Button>
                </div>

                {/* Mobile contact info */}
                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <a 
                    href="tel:+420123456789" 
                    className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-brand-emerald transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+420 123 456 789</span>
                  </a>
                  <a 
                    href="mailto:info@natalyashakh.cz" 
                    className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-brand-emerald transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@natalyashakh.cz</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
