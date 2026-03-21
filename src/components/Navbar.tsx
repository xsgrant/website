import { useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavbarProps = {
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
};

export function Navbar({ onNavigateHome, onNavigateSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigateHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    onNavigateSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center h-16">
          <a
            href="/"
            onClick={handleHomeClick}
            className="absolute left-0 flex items-center gap-2"
            aria-label="Go to xsGrant homepage"
          >
            <img src="/logos/xsgrant.jpeg" alt="xsGrant logo" className="h-8 w-8 rounded-md object-cover" />
            <span className="text-xl font-extrabold tracking-tight text-slate-950">xsGrant</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" onClick={(event) => handleSectionClick(event, 'features')} className="text-sm font-medium text-slate-600 transition-colors hover:text-accent-500">Features</a>
            <a href="/#install" onClick={(event) => handleSectionClick(event, 'install')} className="text-sm font-medium text-slate-600 transition-colors hover:text-accent-500">How it Works</a>
            <a href="/#pricing" onClick={(event) => handleSectionClick(event, 'pricing')} className="text-sm font-medium text-slate-600 transition-colors hover:text-accent-500">Pricing</a>
          </div>

          <div className="absolute right-0 flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200/80 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a
                href="/#features"
                onClick={(event) => handleSectionClick(event, 'features')}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              >
                Features
              </a>
              <a
                href="/#install"
                onClick={(event) => handleSectionClick(event, 'install')}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              >
                How it Works
              </a>
              <a
                href="/#pricing"
                onClick={(event) => handleSectionClick(event, 'pricing')}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              >
                Pricing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
