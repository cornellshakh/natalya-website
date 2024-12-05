import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  navItems: Array<{ path: string; label: string }>;
  isActive: (path: string) => boolean;
  onClose: () => void;
}

export default function MobileMenu({ navItems, isActive, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden border-b border-gray-100 bg-white shadow-lg"
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
                ${isActive(path)
                  ? 'bg-[#eaf4e5] text-[#4c7c42]'
                  : 'text-gray-600 hover:bg-[#eaf4e5] hover:text-gray-900'
                }
              `}
            >
              <span>{label}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${isActive(path) ? 'text-[#fd8e81]' : 'text-gray-400'}`} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}