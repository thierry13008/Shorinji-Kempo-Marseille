import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-main relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <Helmet>
        <title>Page Introuvable | Shorinji Kempo Marseille</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/wZfYzYPk/page-404webp.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-transparent" />
      </div>

      {/* Background elements to match the site style */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-1 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-primary-gold/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl"
      >
        <img 
          src="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" 
          alt="Shorinji Kempo Logo" 
          className="w-32 h-32 mx-auto mb-8 drop-shadow-2xl"
        />
        
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 uppercase tracking-tight">
          Page <span className="text-primary-gold italic">introuvable</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
          La page que vous cherchez n'existe pas. Retournez à l'accueil ou contactez-nous.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-primary-gold transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-center gap-2 text-bg-main font-medium uppercase tracking-widest text-sm">
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </div>
          </Link>
          
          <Link
            to="/contact"
            className="group relative px-8 py-4 border border-primary-gold/30 hover:border-primary-gold transition-all duration-300"
          >
            <div className="relative text-primary-gold font-medium uppercase tracking-widest text-sm">
              Nous contacter
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Artistic accent */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-10">
        <span className="text-[120px] font-serif font-black text-primary-gold select-none pointer-events-none">404</span>
      </div>
    </div>
  );
}
