import { Link } from 'react-router-dom';
import { Mail, Facebook, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [contactInfo, setContactInfo] = useState({
    address: "38 Rue Raphaël Ponson, 13008 Marseille - Centre Social Saint-Giniez",
    email: "shorinjikempomarseille@gmail.com",
    facebook: "https://www.facebook.com/shorinjikempo.marseille",
    hours: "Lundi: 20h00 - 21h30\nMercredi: 20h00 - 21h30\nVendredi: 20h15 - 21h45"
  });

  useEffect(() => {
    // Dynamic fetching removed as per user request
  }, []);

  return (
    <footer className="bg-white/5 backdrop-blur-md text-[#CCCCCC] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Logo Section */}
          <div className="lg:w-[15%] flex-shrink-0 lg:-mt-8">
            <a href="http://www.shorinjikempomarseille.fr/" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="https://i.ibb.co/C3WkBY39/LOGO-SANS-SERIF-FOND-SOMBRE-CP.png" 
                alt="Marseille Shorinji Kempo" 
                className="h-[120px] w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Columns Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1fr_1.4fr] gap-8 items-start">
            {/* Colonne 1: Plan du site */}
            <div className="space-y-6">
              <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] uppercase tracking-wider border-b border-primary-gold/30 pb-2 inline-block">Navigation</h4>
              <nav>
                <ul className="text-[14px] md:text-[15px] space-y-2">
                  <li><Link to="/" className="hover:text-[#FFC107] transition-colors font-normal py-1 block text-slate-300">Accueil</Link></li>
                  <li><Link to="/encyclopedia" className="hover:text-[#FFC107] transition-colors font-normal py-1 block text-slate-300">Encyclopédie</Link></li>
                  <li><Link to="/blog" className="hover:text-[#FFC107] transition-colors font-normal py-1 block text-slate-300">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-[#FFC107] transition-colors font-normal py-1 block text-slate-300">Contact</Link></li>
                  <li><Link to="/mentions-legales" className="hover:text-[#FFC107] transition-colors font-normal py-1 block text-slate-300">Mentions Légales</Link></li>
                </ul>
              </nav>
            </div>

            {/* Colonne 2: Liens Externes */}
            <div className="space-y-6">
              <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] uppercase tracking-wider border-b border-primary-gold/30 pb-2 inline-block">Liens</h4>
              <ul className="text-[14px] md:text-[15px] space-y-3">
                <li>
                  <a href="https://shorinjikempo.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors text-slate-300 group">
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    Fédération Française
                  </a>
                </li>
                <li>
                  <a href="https://www.shorinjikempo.or.jp/wsko/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors text-slate-300 group">
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    WSKO (World Organization)
                  </a>
                </li>
                <li>
                  <a href="http://www.shorinjikempomarseille.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors text-slate-300 group">
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    Site Officiel Marseille
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Shorinjikempomarseille" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors text-slate-300 group">
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    Facebook Club
                  </a>
                </li>
                <li>
                  <a href="https://shorinjikempomarseille.wordpress.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors text-slate-300 group">
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    Blog WordPress
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonne 3: Contacts */}
            <div className="space-y-6">
              <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] uppercase tracking-wider border-b border-primary-gold/30 pb-2 inline-block">Contacts</h4>
              <div className="space-y-4 text-[14px] md:text-[15px]">
                <div className="flex items-start gap-3 group">
                  <MapPin size={18} className="text-[#FFC107] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed font-normal text-slate-300">{contactInfo.address}</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <Clock size={18} className="text-[#FFC107] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="whitespace-pre-line leading-relaxed font-normal text-slate-300">{contactInfo.hours}</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <Mail size={18} className="text-[#FFC107] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-[#FFC107] transition-colors flex items-center font-normal text-slate-300">{contactInfo.email}</a>
                </div>
              </div>
            </div>

            {/* Colonne 4: Réseaux sociaux & CTA */}
            <div className="space-y-8 flex flex-col bg-white/[0.03] p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
              <div className="space-y-4">
                <h4 className="text-[#FFFFFF] font-sans font-bold text-[18px] uppercase tracking-wider border-b border-primary-gold/30 pb-2 inline-block">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a 
                    href={contactInfo.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CCCCCC] hover:text-[#FFC107] hover:border-[#FFC107]/50 transition-all duration-500 shadow-xl backdrop-blur-md group"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-gold animate-pulse"></span>
                  <p className="text-[11px] text-[#FFC107] font-black uppercase tracking-[0.2em]">
                    Séance gratuite offerte
                  </p>
                </div>
                <a 
                  href="#contact"
                  className="bg-primary-gold hover:bg-white text-black font-black py-4 px-8 rounded-2xl transition-all duration-500 text-center text-sm uppercase tracking-widest shadow-[0_20px_40px_rgba(255,215,0,0.2)] hover:shadow-primary-gold/40 hover:-translate-y-1 active:scale-95 block"
                >
                  Réserver mon essai
                </a>
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
