import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Encyclopédie', path: '/encyclopedia' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      // Hauteur navbar augmentée (70-90px) et effet sticky moderne
      isScrolled ? "glass-nav h-20 shadow-2xl" : "bg-transparent h-24"
    )}>
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group shrink-0">
          <img 
            src="https://i.ibb.co/C3WkBY39/LOGO-SANS-SERIF-FOND-SOMBRE-CP.png" 
            alt="Marseille Shorinji Kempo" 
            className={cn(
              "transition-all duration-500 object-contain group-hover:scale-110",
              isScrolled ? "h-10 lg:h-16" : "h-12 lg:h-20"
            )}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav - Taille texte augmentée et hiérarchie claire */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative font-label tracking-wide text-[19px] font-bold transition-all duration-300 group/link hover:scale-105",
                  location.pathname === link.path ? "text-primary-gold" : "text-ivory-silk hover:text-primary-gold"
                )}
              >
                {link.name}
                {/* Micro-interaction : Underline animé plus épais */}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[3px] bg-primary-gold transition-all duration-300 rounded-full",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover/link:w-full"
                )} />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 ml-4">
            <button className="text-primary-gold hover:scale-125 transition-transform duration-300 p-2">
              <MessageSquare size={24} />
            </button>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] text-primary-gold/60 uppercase tracking-widest font-bold">Contactez-nous pour plus d’infos</span>
              <a 
                href="#contact"
                className="cta-secondary"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Actions - CTA visible directement même sur mobile */}
        <div className="flex items-center gap-6 lg:hidden">
          <a 
            href="#contact"
            className="cta-secondary px-4 py-2 text-[12px]"
          >
            Contact
          </a>
          <button 
            className="text-white p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Structure simplifiée et moderne */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass-nav border-t border-white/10 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-label tracking-widest text-xl font-bold transition-all",
                    location.pathname === link.path ? "text-primary-gold" : "text-ivory-silk"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-white/10 w-full my-2" />
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-primary-gold/60 uppercase tracking-widest font-bold text-center">Contactez-nous pour plus d’infos</span>
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cta-secondary w-full flex items-center justify-center"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
