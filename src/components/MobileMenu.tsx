import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface MobileMenuProps {
  navItems: Array<{ path: string; label: string }>;
  isActive: (path: string) => boolean;
  onClose: () => void;
  id?: string;
}

export default function MobileMenu({ navItems, isActive, onClose, id }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable body scroll when menu is open
    document.body.style.overflow = 'hidden';

    // Focus trap
    const focusableElements = menuRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={menuRef}
      id={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden border-b border-gray-100 bg-white shadow-lg"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <motion.div
        initial="closed"
        animate="open"
        variants={{
          open: {
            transition: {
              staggerChildren: 0.05,
            },
          },
          closed: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        className="container-pad py-4 space-y-1"
      >
        {navItems.map(({ path, label }) => (
          <motion.div
            key={path}
            variants={{
              open: {
                opacity: 1,
                y: 0,
              },
              closed: {
                opacity: 0,
                y: 20,
              },
            }}
          >
            <Link
              to={path}
              onClick={onClose}
              className={`
                flex items-center justify-between w-full px-4 py-3 rounded-lg
                text-sm font-medium transition-all duration-200
                ${
                  isActive(path)
                    ? 'bg-[#eaf4e5] text-[#4c7c42]'
                    : 'text-gray-600 hover:bg-[#eaf4e5] hover:text-gray-900'
                }
              `}
            >
              <span>{label}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${isActive(path) ? 'text-[#4c7c42]' : 'text-gray-400'}`}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
