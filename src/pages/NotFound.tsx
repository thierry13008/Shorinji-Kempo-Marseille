import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home, MessageCircle, Undo2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-main relative flex items-center justify-center p-6 sm:p-12 overflow-hidden">
      <Helmet>
        <title>Page Introuvable | Shorinji Kempo Marseille</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Immersive Background with Layered Circle Expansion Reveal */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Soft Reveal (Slow) - Base Atmosphere */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img 
            src="https://i.ibb.co/wZfYzYPk/page-404webp.webp" 
            alt="Zen Background Soft" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-bg-main/20" />
        </motion.div>

        {/* Layer 2: Central Clear Spotlight (Zero Filter) */}
        <motion.div 
          className="absolute inset-0 z-1"
          initial={{ clipPath: 'circle(0% at 50% 55%)', opacity: 0 }}
          animate={{ clipPath: 'circle(400px at 50% 55%)', opacity: 1 }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <img 
            src="https://i.ibb.co/wZfYzYPk/page-404webp.webp" 
            alt="Zen Background Clear Spotlight" 
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/5 to-bg-main/20" />
        </motion.div>

        {/* Animated Spotlight Overlay */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{
            background: 'radial-gradient(circle at 50% 55%, transparent 10%, #080808 70%)'
          }}
        />
        
        {/* Decorative Gold Light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-gold/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-20">
        {/* Top Branding - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.23, 1, 0.32, 1] 
          }}
          className="mb-12 relative"
        >
          {/* Subtle Glow Behind Logo */}
          <div className="absolute inset-0 bg-primary-gold/20 rounded-full blur-2xl animate-pulse scale-150" />
          
          <Link to="/" className="group relative block">
            <div className="relative">
              <img 
                src="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" 
                alt="Logo Shorinji Kempo" 
                className="w-48 md:w-64 h-auto mx-auto mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-700 group-hover:scale-105 group-hover:rotate-[360deg] filter brightness-110 object-contain"
              />
            </div>
            <div className="space-y-1">
              <span className="block text-white uppercase tracking-[0.4em] text-xs font-bold transition-colors group-hover:text-primary-gold">
                Shorinji Kempo
              </span>
              <span className="block text-primary-gold/60 uppercase tracking-[0.2em] text-[10px] font-medium italic">
                Marseille
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Main Content Sections - Centered Under Logo */}
        <div className="space-y-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-[clamp(4rem,15vw,10rem)] leading-none font-serif font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap z-0">
              404 LOST
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-2 relative z-10 leading-tight">
              Le chemin est <br />
              <span className="text-primary-gold italic">interrompu</span>
            </h2>
            <div className="h-px w-24 bg-primary-gold mx-auto" />
          </motion.div>

          <motion.p 
            className="text-[#fdfbf7] text-lg md:text-xl max-w-lg leading-relaxed z-10 drop-shadow-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Même les pratiquants les plus aguerris s'égarent parfois. 
            La page que vous recherchez semble s'être volatilisée.
          </motion.p>

          <motion.div 
            className="pt-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/"
              className="flex items-center gap-3 px-12 py-4 bg-primary-gold text-bg-main font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 active:scale-95 group shadow-xl"
            >
              <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Vertical Decorative Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 vertical-text hidden xl:block mix-blend-overlay">
        <span className="text-[120px] font-black text-transparent stroke-text tracking-tighter opacity-10">
          SHORINJI
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}} />
    </div>
  );
}
