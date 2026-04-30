import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Mail, CheckCircle, X, Plus, Minus, Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '@/src/components/ScrollReveal';

export default function Contact() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapZoom, setMapZoom] = useState(17);

  // Apply Encyclopedia-style glass effect to footer on Contact page
  useEffect(() => {
    // Tally embed script loader
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector(`script[src="${w}"]`) === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }

    const footer = document.querySelector('footer');
    if (footer) {
      // Enhanced glass effect: surface-low tint with higher blur
      footer.style.backgroundColor = 'rgba(26, 36, 58, 0.1)';
      footer.style.backdropFilter = 'blur(16px)';
      (footer.style as any).webkitBackdropFilter = 'blur(16px)';
      footer.style.transition = 'all 0.5s ease';
    }
    return () => {
      if (footer) {
        footer.style.backgroundColor = '';
        footer.style.backdropFilter = '';
        (footer.style as any).webkitBackdropFilter = '';
        footer.style.transition = '';
      }
    };
  }, []);

  const [contactInfo] = useState({
    address: "38 Rue Raphaël Ponson, 13008 Marseille - Centre Social Saint-Giniez",
    phone: "06 89 09 05 44",
    email: "shorinjikempomarseille@gmail.com",
    hours: "Lundi: 20h00 - 21h30\nMercredi: 20h00 - 21h30\nVendredi: 20h15 - 21h45",
    discoveryOffer: [
      "1 cours d’essai gratuit",
      "Aucune obligation d'inscription",
      "Prêt du matériel pour l'essai",
      "Accompagnement personnalisé"
    ],
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.023473145455!2d5.3916423!3d43.2719266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b96434863459%3A0x6a0f8b8b8b8b8b8b!2sCentre%20Social%20Saint-Giniez!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
  });

  return (
    <main className="min-h-screen bg-transparent pt-20 relative overflow-hidden">
      <Helmet>
        <title>Contact Shorinji Kempo Marseille | Essai Gratuit Saint-Giniez</title>
        <meta name="description" content="Contactez le dojo Shorinji Kempo Marseille Saint-Giniez. Téléphone, adresse, horaires. Réservez votre cours d'essai gratuit au 06 89 09 05 44." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact Shorinji Kempo Marseille | Essai Gratuit Saint-Giniez" />
        <meta property="og:description" content="Contactez le dojo Shorinji Kempo Marseille Saint-Giniez. Téléphone, adresse, horaires. Réservez votre cours d'essai gratuit au 06 89 09 05 44." />
        <meta property="og:image" content="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data: BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://shorinji-kempo-marseille.vercel.app/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://shorinji-kempo-marseille.vercel.app/contact" }
            ]
          })}
        </script>
      </Helmet>
      {/* Fixed Background for Contact Page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://i.ibb.co/B5F7V0Bh/backgrount-agenda-WEBP.webp" 
          alt="Fond fixe contact"
          referrerPolicy="no-referrer"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-transparent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-white mb-4">Prêt à commencer ?</h1>
            <p className="text-slate-300">Réservez votre cours d’essai gratuit dès maintenant</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <ScrollReveal className="glass-card ki-aura-dark p-10 rounded-[24px]">
                <h2 className="text-white mb-10">Informations de Contact</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <MapPin className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Adresse</h3>
                      <p className="text-slate-400 text-[14px]">{contactInfo.address}</p>
                      <button 
                        onClick={() => setIsMapOpen(true)}
                        className="mt-2 text-primary-gold text-xs font-label uppercase tracking-widest hover:underline"
                      >
                        Voir sur la carte
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <Phone className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Téléphone</h3>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-slate-400 text-[14px] hover:text-primary-gold transition-colors">{contactInfo.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <Mail className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-slate-400 text-[14px] hover:text-primary-gold transition-colors">{contactInfo.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <Clock className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Horaires d'accueil</h3>
                      <p className="text-slate-400 text-[14px] whitespace-pre-line">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal className="bg-surface glass-card border border-primary-gold/20 rounded-[24px] p-10 ki-aura-dark">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="text-primary-gold" size={24} />
                  <h3 className="text-white font-bold uppercase tracking-widest">Offre Découverte</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                  {contactInfo.discoveryOffer.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">✓ {item}</li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <button 
                  onClick={() => setIsMapOpen(true)}
                  className="w-full bg-primary-gold/10 border border-primary-gold/20 px-6 py-4 rounded-xl inline-flex items-center justify-center gap-3 hover:bg-primary-gold/20 transition-all group"
                >
                  <MapPin className="text-primary-gold group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-bold text-sm tracking-wide uppercase text-white">Dojo Saint-Giniez</span>
                </button>
              </ScrollReveal>
            </div>

            <div className="space-y-8">
              <ScrollReveal className="glass-card ki-aura-dark p-10 rounded-[24px] border border-primary-gold/20">
                <h2 className="text-white mb-2">Envoyez-nous un message</h2>
                <p className="text-on-surface-variant mb-8">Remplissez le formulaire ci-dessous</p>
                
                <div className="w-full overflow-hidden rounded-xl">
                  <iframe 
                    data-tally-src="https://tally.so/embed/vG0JyA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="423" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0} 
                    title="Nous contacter directement"
                  ></iframe>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="glass-card ki-aura-dark p-10 rounded-[24px] border border-primary-gold/20 text-center">
                <p className="text-on-surface-variant flex items-center justify-center gap-4 mb-6">
                  <span className="h-px bg-white/10 flex-1"></span>
                  <span className="micro-copy uppercase tracking-widest text-white">ou contactez nous Directement</span>
                  <span className="h-px bg-white/10 flex-1"></span>
                </p>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                  className="w-full bg-white text-surface font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all text-[16px] uppercase tracking-widest shadow-xl group"
                >
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-black" size={20} />
                  </div>
                  {contactInfo.phone}
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMapOpen(false)}
              className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 glass-card ki-aura-dark p-2"
            >
              {/* Close Button - Top Right */}
              <div className="absolute top-6 right-6 z-10">
                <button 
                  onClick={() => setIsMapOpen(false)}
                  className="w-12 h-12 rounded-full bg-bg-main flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Zoom & Fullscreen Controls - Bottom Right */}
              <div className="absolute bottom-24 right-6 z-10 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setMapZoom(prev => Math.min(prev + 1, 21))}
                    className="w-12 h-12 rounded-full bg-bg-main flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                    title="Zoom avant"
                  >
                    <Plus size={20} />
                  </button>
                  <button 
                    onClick={() => setMapZoom(prev => Math.max(prev - 1, 1))}
                    className="w-12 h-12 rounded-full bg-bg-main flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                    title="Zoom arrière"
                  >
                    <Minus size={20} />
                  </button>
                </div>

                <button 
                  onClick={() => {
                    const iframe = document.querySelector('iframe[title="Google Maps Dojo Saint-Giniez"]');
                    if (iframe) {
                      if (iframe.requestFullscreen) {
                        iframe.requestFullscreen();
                      }
                    }
                  }}
                  className="w-12 h-12 rounded-full bg-bg-main flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                  title="Plein écran"
                >
                  <Maximize2 size={20} />
                </button>
              </div>
              <iframe
                src={`https://maps.google.com/maps?q=43.2719266,5.3916423&z=${mapZoom}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2rem]"
                title="Google Maps Dojo Saint-Giniez"
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
