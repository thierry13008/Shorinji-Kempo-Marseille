import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center pt-20">
      <Helmet>
        <title>Page Introuvable | Shorinji Kempo Marseille</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="relative z-10 w-full max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <div className="mb-8 p-4 bg-white/5 rounded-full backdrop-blur-md border border-white/10">
            <img 
              src="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" 
              alt="Logo Shorinji Kempo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">
            Page introuvable
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto">
            La page que vous cherchez n'existe pas. Retournez à l'accueil ou contactez-nous.
          </p>

          <Link
            to="/"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary-gold text-surface font-sans font-semibold rounded-lg hover:bg-white transition-all duration-300"
          >
            <HomeIcon size={20} className="group-hover:scale-110 transition-transform" />
            Retour à l'accueil
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
