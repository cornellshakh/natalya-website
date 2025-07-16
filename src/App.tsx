import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import FloatingCTA from './components/ui/FloatingCTA';
import { ToastProvider } from './components/ui/Toast';
import { useMotionPreference, cn } from './lib/utils';
import './index.css';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Booking = lazy(() => import('./pages/Booking'));

// Enhanced loading fallback component with accessibility
function PageLoadingFallback() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="text-center">
        <motion.div
          initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
          animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
          className="relative"
        >
          {/* Enhanced loading spinner with reduced motion support */}
          <div className="relative">
            <div 
              className={cn(
                'w-16 h-16 border-4 border-neutral-200 rounded-full mb-4 mx-auto border-t-brand-emerald',
                !prefersReducedMotion && 'animate-spin'
              )}
            />
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-brand-emerald/20 mb-4 mx-auto" />
            )}
          </div>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.2 }}
            className="text-neutral-600 font-medium"
          >
            Načítání...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Accessible page transition variants
const createPageVariants = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      initial: { opacity: 0 },
      in: { opacity: 1 },
      out: { opacity: 0 },
    };
  }

  return {
    initial: {
      opacity: 0,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 20px, 0) scale3d(0.98, 0.98, 1)',
    },
    in: {
      opacity: 1,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
    out: {
      opacity: 0,
      // Use transform3d for GPU acceleration
      transform: 'translate3d(0, -20px, 0) scale3d(1.02, 1.02, 1)',
    },
  };
};

const createPageTransition = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return { duration: 0 };
  }

  return {
    type: 'tween',
    ease: [0.25, 0.1, 0.25, 1], // Optimized cubic-bezier
    duration: 0.4,
    // Force hardware acceleration
    transformTemplate: ({ transform }: any) => `${transform} translateZ(0)`,
  };
};

// Page wrapper component for consistent transitions
function PageWrapper({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useMotionPreference();
  const pageVariants = createPageVariants(prefersReducedMotion);
  const pageTransition = createPageTransition(prefersReducedMotion);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
      // Announce page changes to screen readers
      aria-live="polite"
      aria-atomic="true"
      // GPU acceleration optimizations
      style={{
        willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
        backfaceVisibility: 'hidden',
        perspective: 1000,
        transform: 'translateZ(0)', // Force hardware layer
      }}
    >
      {children}
    </motion.div>
  );
}

// Route transition component with enhanced accessibility
function AnimatedRoutes() {
  const location = useLocation();
  const prefersReducedMotion = useMotionPreference();

  // Announce route changes to screen readers
  useEffect(() => {
    // Get page title from route or use default
    const getPageTitle = () => {
      switch (location.pathname) {
        case '/': return 'Domovská stránka';
        case '/about': return 'O nás';
        case '/services': return 'Služby';
        case '/contact': return 'Kontakt';
        case '/blog': return 'Blog';
        case '/booking': return 'Rezervace';
        case '/privacy': return 'Ochrana soukromí';
        case '/terms': return 'Obchodní podmínky';
        default: return 'Stránka';
      }
    };

    // Announce navigation to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'assertive');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.setAttribute('class', 'sr-only');
    announcement.textContent = `Přešli jste na: ${getPageTitle()}`;
    
    document.body.appendChild(announcement);
    
    // Clean up
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);

    // Set focus to main content for keyboard users
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [location.pathname]);

  return (
    <AnimatePresence 
      mode="wait" 
      onExitComplete={() => {
        if (!prefersReducedMotion) {
          window.scrollTo(0, 0);
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <Services />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageWrapper>
              <BlogPost />
            </PageWrapper>
          }
        />
        <Route
          path="/booking"
          element={
            <PageWrapper>
              <Booking />
            </PageWrapper>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageWrapper>
              <Privacy />
            </PageWrapper>
          }
        />
        <Route
          path="/terms"
          element={
            <PageWrapper>
              <Terms />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main 
        className="flex-grow pt-0" 
        id="main-content"
        role="main"
        tabIndex={-1}
        aria-label="Main content"
      >
        <Suspense fallback={<PageLoadingFallback />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </motion.div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <ToastProvider>
            <Router>
              <AppContent />
            </Router>
          </ToastProvider>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
