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
    { name: 'Home', path: '/' },
    { name: 'Encyclopédie', path: '/encyclopedia' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-headline text-xl text-white tracking-tight">
            MARSEILLE <span className="text-primary-gold">Shorinji Kempo</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-8 border-r border-white/10 pr-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-label tracking-[0.02em] uppercase text-[15px] font-semibold transition-colors",
                  location.pathname === link.path ? "text-primary-gold" : "text-slate-400 hover:text-primary-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-primary-gold hover:scale-110 transition-transform">
              <MessageSquare size={20} />
            </button>
            <a 
              href="#contact"
              className="gold-gradient text-on-primary font-semibold px-6 py-2.5 rounded-lg transition-all hover:brightness-110 active:scale-95 font-label text-[15px] uppercase tracking-[0.02em] flex items-center justify-center"
            >
              S'inscrire
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-nav border-t border-white/5 py-6 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-label tracking-[0.02em] uppercase text-[15px] font-semibold",
                    location.pathname === link.path ? "text-primary-gold" : "text-slate-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="gold-gradient text-on-primary font-semibold py-3 rounded-lg font-label text-[15px] uppercase tracking-[0.02em] flex items-center justify-center"
              >
                S'inscrire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
