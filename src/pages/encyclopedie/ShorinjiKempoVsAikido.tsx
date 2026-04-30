import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";

const ShorinjiKempoVsAikido = () => {
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
        "name": "Shorinji Kempo vs Aïkido",
        "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-aikido"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-main font-sans selection:bg-primary-gold/30 selection:text-primary-gold relative">
      <Helmet>
        <title>Shorinji Kempo vs Aïkido : Lequel choisir ? | Marseille</title>
        <meta name="description" content="Shorinji Kempo vs Aïkido : deux arts martiaux non-compétitifs, mais lequel est le plus efficace en self-défense ? Essayez gratuitement à Marseille Saint-Giniez." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-aikido" />
        
        <meta property="og:title" content="Shorinji Kempo vs Aïkido : Lequel choisir ? | Marseille" />
        <meta property="og:description" content="Shorinji Kempo vs Aïkido : deux arts martiaux non-compétitifs, mais lequel est le plus efficace en self-défense ? Essayez gratuitement à Marseille Saint-Giniez." />
        <meta property="og:image" content="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-aikido" />
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
              Shorinji Kempo <span className="text-primary-gold italic">vs</span> Aïkido
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
                  Vous hésitez entre Shorinji Kempo et Aïkido à Marseille ?
                </h2>
                <div className="space-y-6 text-ivory-silk/80 text-lg md:text-xl leading-relaxed">
                  <p>
                    Deux arts martiaux japonais non-compétitifs, basés sur la self-défense et la philosophie. Pourtant, leur approche du combat est radicalement différente.
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
                <h2 className="text-white text-2xl font-bold mb-6 italic">L'Aïkido : la voie de l'harmonie... parfois trop théorique</h2>
                <p className="text-ivory-silk/70 leading-relaxed text-lg">
                  Fondé par Morihei Ueshiba, l'Aïkido utilise la force de l'adversaire contre lui-même. Des mouvements circulaires sublimes, une philosophie de paix. Mais en situation réelle, l'Aïkido est souvent critiqué pour son manque d'efficacité : pas de frappes réelles, des attaques codifiées, peu de résistance.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 h-full border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-500 bg-primary-gold/5 hover:-translate-y-1">
                <h2 className="text-primary-gold text-2xl font-bold mb-6 italic">Le Shorinji Kempo : l'harmonie, oui. L'efficacité, toujours.</h2>
                <p className="text-ivory-silk/80 leading-relaxed text-lg">
                  Le Shorinji Kempo partage les valeurs de l'Aïkido : non-violence, respect, développement spirituel. Mais il y ajoute un réalisme martial : les frappes sont réelles, les défenses sont testées, les techniques fonctionnent même sous pression.
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
                <h2 className="text-white text-3xl font-extrabold mb-10 text-center tracking-tight">Ce que le Shorinji Kempo vous apporte à Saint-Giniez que l'Aïkido ne vous donnera pas</h2>
                <div className="grid md:grid-cols-1 gap-6">
                  {[
                    "Des frappes réelles (Goho) en plus des clés et projections (Juho)",
                    "Une self-défense testée et réaliste",
                    "Un apprentissage progressif — pas besoin de 10 ans pour être efficace",
                    "Des partenaires qui résistent vraiment — pas de compliance",
                    "La même philosophie de paix, avec une efficacité martiale"
                  ].map((benefit, idx) => {
                    const [title, desc] = benefit.split(' — ');
                    return (
                      <div key={idx} className="group flex gap-5 items-center p-6 bg-white/2 rounded-[24px] border border-white/5 hover:border-primary-gold/30 hover:bg-white/5 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center text-primary-gold shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <CheckCircle2 size={24} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg mb-1">{title}</p>
                          <p className="text-ivory-silk/50">{desc || 'Efficacité éprouvée'}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight italic text-shadow-lg">Choisir l'harmonie <span className="text-primary-gold">efficace</span></h2>
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

export default ShorinjiKempoVsAikido;
