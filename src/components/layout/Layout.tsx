import { ReactNode } from 'react';
import HeaderFixed from './HeaderFixed';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import FloatingCTA from '../ui/FloatingCTA';

interface LayoutProps {
  children: ReactNode;
  showFloatingCTA?: boolean;
}

export default function Layout({ children, showFloatingCTA = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderFixed />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      {showFloatingCTA && <FloatingCTA />}
    </div>
  );
}
