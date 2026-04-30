import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";

const ShorinjiKempoVsJudo = () => {
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.classList.add('home-footer-glass');
    }
    return () => {
      if (footer) {
        footer.classList.remove('home-footer-glass');
      }
    };
  }, []);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://shorinji-kempo-marseille.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Encyclopédie",
        "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedia"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Shorinji Kempo vs Judo",
        "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-judo"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-main font-sans selection:bg-primary-gold/30 selection:text-primary-gold relative">
      <Helmet>
        <title>Shorinji Kempo vs Judo : Lequel choisir ? | Marseille</title>
        <meta name="description" content="Shorinji Kempo vs Judo : self-défense complète ou sport olympique ? Découvrez pourquoi les adultes choisissent le Shorinji Kempo. Essayez gratuitement à Marseille." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-judo" />
        
        <meta property="og:title" content="Shorinji Kempo vs Judo : Lequel choisir ? | Marseille" />
        <meta property="og:description" content="Shorinji Kempo vs Judo : self-défense complète ou sport olympique ? Découvrez pourquoi les adultes choisissent le Shorinji Kempo. Essayez gratuitement à Marseille." />
        <meta property="og:image" content="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-judo" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://i.ibb.co/tMwSy8WG/fond-page-marseillewebp.webp" 
          alt="Background fixe"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20 overflow-hidden">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex micro-copy mb-6 items-center gap-2 px-4 py-1.5 border border-primary-gold/30 bg-primary-gold/10 rounded-full text-primary-gold font-bold">
              <Sparkles size={14} /> Encyclopédie Martiale
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Shorinji Kempo <span className="text-primary-gold italic">vs</span> Judo
            </h1>
            <p className="text-ivory-silk/90 text-2xl md:text-3xl font-bold max-w-2xl mx-auto">
              Lequel est fait pour vous ?
            </p>
          </motion.div>
        </section>

        {/* INTRODUCTION */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                <h2 className="text-primary-gold text-2xl md:text-3xl font-black mb-8 italic">
                  Vous hésitez entre Shorinji Kempo et Judo à Marseille ?
                </h2>
                <div className="space-y-6 text-ivory-silk/80 text-lg md:text-xl leading-relaxed">
                  <p>
                    Deux arts martiaux japonais, deux approches radicalement différentes du combat et du développement personnel.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* COMPARISON SECTIONS */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="glass-card p-8 h-full border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
                <h2 className="text-white text-2xl font-bold mb-6 italic">Le Judo : la voie de la souplesse... et de la compétition</h2>
                <p className="text-ivory-silk/70 leading-relaxed text-lg">
                  Créé par Jigoro Kano en 1882, le Judo est un sport olympique. Projections, immobilisations, étranglements. Le but : déséquilibrer et maîtriser l'adversaire au sol. Mais le Judo est avant tout une discipline de compétition. On gagne par ippon. On perd par immobilisation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 h-full border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-500 bg-primary-gold/5 hover:-translate-y-1">
                <h2 className="text-primary-gold text-2xl font-bold mb-6 italic">Le Shorinji Kempo : l'art de se défendre debout comme au sol</h2>
                <p className="text-ivory-silk/80 leading-relaxed text-lg">
                  Le Shorinji Kempo intègre les projections du Judo (Juho) mais y ajoute les frappes (Goho). Vous savez vous défendre debout ET au sol. Et surtout : pas de compétition. On travaille la technique pour elle-même, pour être prêt dans la vraie vie.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ADVANTAGES LIST */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-white text-3xl font-extrabold mb-10 text-center tracking-tight">Ce que le Shorinji Kempo vous apporte à Saint-Giniez que le Judo ne vous donnera pas</h2>
                <div className="grid md:grid-cols-1 gap-6">
                  {[
                    "Pas de compétition obligatoire — on pratique pour soi, pas pour un podium",
                    "Self-défense complète — debout + sol, frappes + projections",
                    "Adapté aux adultes — pas besoin d'avoir 20 ans et un corps de gymnaste",
                    "Méditation et philosophie zen incluses",
                    "Moins de blessures — pas de chutes répétitives de compétition"
                  ].map((benefit, idx) => {
                    const [title, desc] = benefit.split(' — ');
                    return (
                      <div key={idx} className="group flex gap-5 items-center p-6 bg-white/2 rounded-[24px] border border-white/5 hover:border-primary-gold/30 hover:bg-white/5 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center text-primary-gold shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <CheckCircle2 size={24} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg mb-1">{title}</p>
                          <p className="text-ivory-silk/50">{desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* EMOTIONAL SECTION */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl font-bold mb-8 italic opacity-60">Imaginez...</h2>
              <div className="glass-card p-10 md:p-16 bg-surface-high/40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-ivory-silk/90 text-2xl md:text-3xl leading-relaxed italic relative z-10 font-medium">
                  "Vous apprenez à projeter un adversaire. Mais aussi à frapper si nécessaire. Vous n'êtes pas limité à une seule distance de combat. Vous êtes complet. C'est ça, la méthode Shorinji Kempo."
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CONCLUSION */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden group border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-gold/10 rounded-full blur-[120px] group-hover:bg-primary-gold/20 transition-colors duration-1000" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-gold/5 rounded-full blur-[120px]" />
              <div className="relative z-10">
                <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight italic">Prêt pour une approche <span className="text-primary-gold">complète ?</span></h2>
                <Link 
                  to="/shorinji-kempo-marseille" 
                  className="cta-button bg-primary-gold text-surface-high font-black px-12 py-6 rounded-2xl inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary-gold/30 duration-500 uppercase tracking-widest text-sm"
                >
                  Essayez le Shorinji Kempo à Marseille Saint-Giniez
                  <ChevronRight size={24} />
                </Link>
                <p className="mt-8 text-ivory-silk/40 font-bold uppercase tracking-widest text-xs">Sessions Adultes & Mixte — Tout Marseille 13008</p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default ShorinjiKempoVsJudo;
