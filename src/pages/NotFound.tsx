import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center pt-20 relative overflow-hidden">
      <Helmet>
        <title>Page Introuvable | Shorinji Kempo Marseille</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Main Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.ibb.co/wZfYzYPk/page-404webp.webp" 
          alt="" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/40 to-surface" />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center bg-surface/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
        >
          {/* Logo with specific background image behind it */}
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[900px] md:h-[900px] rounded-full overflow-hidden blur-[0px] border border-white/20 shadow-[0_0_100px_rgba(212,175,55,0.1)] pointer-events-none"
            >
              <img 
                src="https://i.ibb.co/wZfYzYPk/page-404webp.webp" 
                alt="" 
                className="w-full h-full object-cover scale-150 animate-pulse-slow"
              />
            </motion.div>

            <div className="relative z-10 p-6 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" 
                alt="Logo Shorinji Kempo" 
                className="w-32 h-32 md:w-44 md:h-44 object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6 drop-shadow-lg">
            Page introuvable
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto font-medium drop-shadow-md">
            La page que vous cherchez n'existe pas. Retournez à l'accueil ou contactez-nous.
          </p>

          <Link
            to="/"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#FFD700] text-black font-sans font-extrabold text-lg rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <HomeIcon size={22} className="relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Retour à l'accueil</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-gold/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
