import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Encyclopédie', path: '/encyclopedia' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightPage = location.pathname === '/mentions-legales' || location.pathname === '/politique-confidentialite';

  return (
    <header>
      <nav className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled || isLightPage ? "glass-nav h-20 shadow-2xl" : "bg-transparent h-24"
      )}>
        <input type="checkbox" id="menu-toggle" className="hidden" />
        
        <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between relative z-20">
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <img 
              src="https://i.ibb.co/PGfXsmRk/logo-shorinji-kempo-bg.png" 
              alt="Logo Shorinji Kempo Marseille - Saint-Giniez" 
              className={cn(
                "transition-all duration-500 object-contain group-hover:scale-110",
                isScrolled ? "h-10 lg:h-16" : "h-12 lg:h-20"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative font-label tracking-wide text-[19px] font-bold transition-all duration-300 group/link hover:scale-105",
                    location.pathname === link.path ? "text-primary-gold" : "text-ivory-silk hover:text-primary-gold"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[3px] bg-primary-gold transition-all duration-300 rounded-full",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover/link:w-full"
                  )} />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-6 ml-4">
              <button className="text-primary-gold hover:scale-125 transition-transform duration-300 p-2" aria-label="Discuter avec nous">
                <MessageSquare size={24} />
              </button>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] text-primary-gold/60 uppercase tracking-widest font-bold">Contactez-nous pour plus d’infos</span>
                <a 
                  href="/#contact"
                  className="cta-secondary"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-6 lg:hidden">
            <a 
              href="/#contact"
              className="cta-secondary px-4 py-2 text-[12px]"
            >
              Contact
            </a>
            <label 
              htmlFor="menu-toggle"
              className="text-white p-2 min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Ouvrir le menu de navigation"
            >
              <Menu size={32} className="menu-icon" />
              <X size={32} className="close-icon hidden" />
            </label>
          </div>
        </div>

        {/* Mobile Menu - CSS ONLY via checkbox hack */}
        <div className="mobile-menu absolute top-full left-0 w-full glass-nav border-t border-white/10 overflow-hidden lg:hidden">
          <div className="flex flex-col p-8 gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                }}
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
                href="/#contact"
                onClick={() => {
                  const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                }}
                className="cta-secondary w-full flex items-center justify-center"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
