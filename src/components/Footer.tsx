import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [contactInfo, setContactInfo] = useState({
    address: "38 Rue Raphaël Ponson, 13008 Marseille - Centre Social Saint-Giniez",
    email: "thguey@gmail.com",
    facebook: "https://www.facebook.com/shorinjikempo.marseille",
    hours: "Lundi: 20h00 - 21h30\nMercredi: 19h30 - 21h00\nVendredi: 20h15 - 21h45"
  });

  useEffect(() => {
    // Dynamic fetching removed as per user request
  }, []);

  return (
    <footer className="bg-white/5 backdrop-blur-md text-[#CCCCCC] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-[60px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Logo Section */}
          <div className="lg:w-1/5 flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="https://i.ibb.co/C3WkBY39/LOGO-SANS-SERIF-FOND-SOMBRE-CP.png" 
                alt="Marseille Shorinji Kempo" 
                className="h-[120px] w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Columns Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Colonne 1: Contact */}
            <div className="space-y-6">
              <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] md:text-[20px] uppercase tracking-wide">Contact</h4>
              <div className="space-y-4 text-[14px] md:text-[16px]">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#FFC107] shrink-0 mt-1" />
                  <span className="leading-relaxed font-normal">{contactInfo.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#FFC107] shrink-0 mt-1" />
                  <span className="whitespace-pre-line leading-relaxed font-normal">{contactInfo.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#FFC107] shrink-0 mt-1" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-[#FFC107] transition-colors min-h-[44px] flex items-center font-normal">{contactInfo.email}</a>
                </div>
              </div>
            </div>

            {/* Colonne 2: Plan du site */}
            <div className="space-y-6">
              <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] md:text-[20px] uppercase tracking-wide">Plan du site</h4>
              <nav>
                <ul className="text-[14px] md:text-[16px] space-y-1">
                  <li><Link to="/" className="hover:text-[#FFC107] transition-colors font-normal py-2 block min-h-[44px] flex items-center">Accueil</Link></li>
                  <li><Link to="/encyclopedia" className="hover:text-[#FFC107] transition-colors font-normal py-2 block min-h-[44px] flex items-center">Encyclopédie</Link></li>
                  <li><Link to="/blog" className="hover:text-[#FFC107] transition-colors font-normal py-2 block min-h-[44px] flex items-center">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-[#FFC107] transition-colors font-normal py-2 block min-h-[44px] flex items-center">Contact</Link></li>
                  <li><Link to="/mentions-legales" className="hover:text-[#FFC107] transition-colors font-normal py-2 block min-h-[44px] flex items-center">Mentions Légales</Link></li>
                  <li><Link to="/politique-confidentialite" className="hover:text-[#FFC107] transition-colors font-normal py-2 block min-h-[44px] flex items-center">Confidentialité</Link></li>
                </ul>
              </nav>
            </div>

            {/* Colonne 3: Réseaux sociaux & CTA */}
            <div className="space-y-10 md:text-right flex flex-col md:items-end">
              <div className="space-y-6 w-full">
                <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] md:text-[20px] uppercase tracking-wide">Suivez-nous</h4>
                <div className="flex gap-4 md:justify-end">
                  <a 
                    href={contactInfo.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#FFC107] hover:scale-110 transition-all duration-200 shadow-xl backdrop-blur-sm"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <button 
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#FFC107] hover:scale-110 transition-all duration-200 shadow-xl backdrop-blur-sm"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </button>
                </div>
              </div>

              <div className="space-y-4 w-full">
                <p className="text-[12px] text-[#FFC107]/80 font-bold uppercase tracking-widest md:text-right">
                  Rejoignez notre communauté de pratiquants
                </p>
                <a 
                  href="#contact"
                  className="cta-secondary w-full md:w-auto flex items-center justify-center"
                >
                  Inscrivez-vous – séance gratuite
                </a>
                <p className="text-[12px] text-[#999999] font-light tracking-wide md:text-right">
                  Places limitées ce mois-ci – Sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#999999] font-light text-center md:text-left">
            © 2026 Shorinji Kempo Marseille.
          </p>
          <p className="text-[12px] text-[#999999] font-light">
            Développé avec passion par <span className="text-primary-gold font-bold">KAIRYOS Web Agency</span> pour les arts martiaux.
          </p>
        </div>
      </div>
    </footer>
  );
}
