import { useState, useEffect } from 'react';
import { Share2, Check, X, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ShareButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload QR Code image
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl || 'https://shorinji-kempo-marseille.fr')}`;

  const handleShare = async () => {
    const shareData = {
      title: 'Découvrez le Shorinji Kempo Marseille — Saint-Giniez',
      text: 'Découvrez le Shorinji Kempo Marseille — Saint-Giniez, un art martial japonais traditionnel axé sur la self-défense et le développement personnel.',
      url: currentUrl,
    };

    // 1. Proposer le partage natif si disponible
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Erreur lors du partage:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Erreur lors de la copie:', err);
      }
    }

    // 2. Ouvrir la modale QR Code
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hidden Preload Image */}
      <img src={qrCodeUrl} alt="" className="hidden" aria-hidden="true" loading="eager" />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-[20px] right-[20px] z-[9999] lg:hidden"
          >
            <div className="relative">
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -50 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-surface-high text-white text-[12px] font-bold py-2 px-4 rounded-full whitespace-nowrap shadow-xl border border-white/10"
                  >
                    Lien copié !
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleShare}
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] active:scale-90",
                  "bg-primary-gold text-surface-high border-2 border-white/20"
                )}
                aria-label="Partager le site"
              >
                {copied ? <Check size={24} /> : <Share2 size={24} className="text-white" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code Modal - Fixed and independent of scroll */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 lg:hidden touch-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-surface/90 backdrop-blur-lg"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-[40px] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col items-center text-center touch-auto"
            >
              <div className="mb-6 w-20 h-20 rounded-[24px] bg-primary-gold/10 flex items-center justify-center">
                <QrCode className="text-primary-gold" size={40} />
              </div>

              <h3 className="text-surface text-3xl font-bold mb-3">Partager le Dojo</h3>
              <p className="text-slate-500 text-base mb-8">Faites scanner ce code pour transmettre le lien.</p>

              {/* QR Code Image Container */}
              <div className="bg-white p-6 rounded-[32px] border-4 border-slate-50 mb-10 shadow-inner">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code du Dojo" 
                  className="w-[200px] h-[200px] object-contain"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-surface text-white font-bold py-5 rounded-2xl hover:bg-surface-high transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                <X size={24} />
                Fermer
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
