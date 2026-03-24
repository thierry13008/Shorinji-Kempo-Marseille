import { Link } from 'react-router-dom';
import { Globe, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <span className="font-headline text-primary-gold text-lg">Marseille Shorinji Kempo</span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Une école d'excellence dédiée à la transmission du Shorinji Kempo, alliant rigueur technique et épanouissement spirituel au cœur de la cité phocéenne.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-primary-gold font-label text-[10px] tracking-widest uppercase">Exploration</h4>
              <ul className="text-xs text-slate-400 space-y-3">
                <li><Link to="/" className="hover:text-primary-gold transition-colors">Accueil</Link></li>
                <li><Link to="/encyclopedia" className="hover:text-primary-gold transition-colors">Encyclopédie</Link></li>
                <li><Link to="/blog" className="hover:text-primary-gold transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-primary-gold font-label text-[10px] tracking-widest uppercase">Légal</h4>
              <ul className="text-xs text-slate-400 space-y-3">
                <li><a href="#" className="hover:text-primary-gold transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-primary-gold transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary-gold hover:border-primary-gold transition-all">
                <Globe size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary-gold hover:border-primary-gold transition-all">
                <Facebook size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary-gold hover:border-primary-gold transition-all">
                <Instagram size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary-gold hover:border-primary-gold transition-all">
                <Twitter size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary-gold hover:border-primary-gold transition-all">
                <Mail size={16} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 md:text-right">
              © 2024 Shorinji Kempo Marseille. Membre de la WSKO (World Shorinji Kempo Organization).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
