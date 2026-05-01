import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Shield, CheckCircle2, ChevronRight, Plus, Minus, Info, Sparkles, MapPin, Zap, Users, Globe } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ScrollReveal from "../components/ScrollReveal";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary-gold transition-colors group"
      >
        <span className="font-bold text-lg md:text-xl text-white group-hover:text-primary-gold transition-colors">{question}</span>
        {isOpen ? <Minus className="text-primary-gold shrink-0" /> : <Plus className="text-primary-gold shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-ivory-silk/60 text-lg leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SelfDefenseMarseille = () => {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shorinji Kempo Marseille Saint-Giniez",
    "image": "https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp",
    "description": "Self-défense à Marseille 13008 Saint-Giniez. Apprenez à vous protéger au quotidien. Cours tous niveaux, essai gratuit.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Rue Raphaël Ponson",
      "addressLocality": "Marseille",
      "postalCode": "13008",
      "addressCountry": "FR"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Faut-il être sportif pour commencer la self-défense ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non. Le Shorinji Kempo s'adapte à votre niveau. Les techniques utilisent le mouvement et le placement, pas la force."
        }
      },
      {
        "@type": "Question",
        "name": "Les cours sont-ils mixtes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Hommes et femmes pratiquent ensemble dans le respect mutuel. C'est une force : vous apprenez à vous défendre face à différents gabarits."
        }
      }
    ]
  };

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
        "name": "Self-défense Marseille",
        "item": "https://shorinji-kempo-marseille.vercel.app/self-defense-marseille"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-main font-sans selection:bg-primary-gold/30 selection:text-primary-gold relative">
      <Helmet>
        <title>Self-défense Marseille 13008 | Shorinji Kempo Saint-Giniez</title>
        <meta name="description" content="Self-défense à Marseille 13008 Saint-Giniez. Apprenez à vous protéger au quotidien. Cours tous niveaux, essai gratuit. Shorinji Kempo Marseille." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/self-defense-marseille" />
        
        <meta property="og:title" content="Self-défense Marseille 13008 | Shorinji Kempo Saint-Giniez" />
        <meta property="og:description" content="Self-défense à Marseille 13008 Saint-Giniez. Apprenez à vous protéger au quotidien. Cours tous niveaux, essai gratuit." />
        <meta property="og:image" content="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/self-defense-marseille" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://i.ibb.co/tMwSy8WG/fond-page-marseillewebp.webp" 
          alt="Self-défense Marseille"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/60 to-surface"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20 overflow-hidden">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-32">
          <div className="flex justify-center mb-12">
            <Breadcrumb />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-flex micro-copy mb-6 items-center gap-2 px-4 py-1.5 border border-primary-gold/30 bg-primary-gold/10 rounded-full text-primary-gold font-bold">
              <Shield size={14} /> Sécurité & Sérénité
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight italic">
              Self-défense Marseille <span className="text-primary-gold">13008</span>
            </h1>
            <p className="text-ivory-silk/70 text-2xl md:text-3xl font-medium max-w-3xl mx-auto italic">
              Shorinji Kempo Saint-Giniez : donnez-vous les moyens de réagir.
            </p>
          </motion.div>
        </section>

        {/* SECTION 1: INTRODUCTION */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-32">
            <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-gold" />
              <h2 className="text-white text-3xl font-black mb-8">Apprenez à vous défendre à Marseille</h2>
              <div className="space-y-6 text-ivory-silk/80 text-lg md:text-xl leading-relaxed">
                <p>
                  Marseille est une ville vibrante, mais comme toutes les grandes villes, on peut s'y sentir vulnérable. Transports en commun tard le soir, sorties entre amis, trajets quotidiens : savoir se défendre, c'est gagner en sérénité.
                </p>
                <p>
                  Le Shorinji Kempo est une self-défense complète, réaliste, accessible à tous. Pas besoin d'être sportif. Pas besoin d'avoir fait des arts martiaux. Juste l'envie d'apprendre à se protéger.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 2: WHY FOR SELF DEFENSE */}
        <section className="container mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">Pourquoi le Shorinji Kempo pour la self-défense ?</h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Efficacité réelle", desc: "Des techniques testées, pas de la théorie. Frappes, clés, projections : vous saurez réagir.", icon: Zap },
              { title: "Adapté à tous", desc: "Femmes, hommes, jeunes, adultes. Les techniques utilisent le mouvement, pas la force brute.", icon: Info },
              { title: "Pas de compétition", desc: "On s'entraîne pour la vraie vie, pas pour un podium.", icon: Shield },
              { title: "Confiance en soi", desc: "Savoir se défendre change votre posture. Vous marchez plus droit, vous respirez mieux.", icon: Sparkles },
              { title: "Ambiance bienveillante", desc: "On progresse ensemble, dans le respect. Les débutants sont accompagnés.", icon: CheckCircle2 }
            ].map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col items-start gap-6 border-white/5 hover:border-primary-gold/40 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-gold/10 flex items-center justify-center text-primary-gold group-hover:scale-110 transition-transform duration-500">
                    <card.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl mb-3">{card.title}</h3>
                    <p className="text-ivory-silk/50 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* SECTION 3: DAILY SCENARIOS */}
        <section className="container mx-auto px-6 mb-32 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-black mb-12 text-center">La self-défense à Marseille : les situations du quotidien</h2>
            <div className="space-y-6">
              {[
                { scenario: "En sortant du métro Prado à 22h...", icon: MapPin },
                { scenario: "Après un match au Vélodrome, la foule...", icon: Users },
                { scenario: "En balade dans les Calanques, isolé(e)...", icon: Globe }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 flex items-center gap-6 border-white/5 hover:bg-white/5 transition-all duration-300 italic text-ivory-silk/80 text-lg md:text-xl">
                    <div className="shrink-0 text-primary-gold">
                      <ChevronRight size={24} />
                    </div>
                    "{item.scenario}"
                  </div>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={0.4}>
                <div className="text-center mt-12 bg-primary-gold/10 p-8 rounded-[30px] border border-primary-gold/20">
                  <p className="text-white text-xl font-medium">Dans toutes ces situations, avoir des réflexes de self-défense change tout. Le Shorinji Kempo vous les donne.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ ACCORDION */}
        <section className="container mx-auto px-6 mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-black mb-12 text-center italic">FAQ Self-défense Marseille 13008</h2>
            <div className="glass-card p-6 md:p-12">
              <FaqItem 
                question="Faut-il être sportif pour commencer la self-défense ?" 
                answer="Non. Le Shorinji Kempo s'adapte à votre niveau. Les techniques utilisent le mouvement et le placement, pas la force." 
              />
              <FaqItem 
                question="Les cours sont-ils mixtes ?" 
                answer="Oui. Hommes et femmes pratiquent ensemble dans le respect mutuel. C'est une force : vous apprenez à vous défendre face à différents gabarits." 
              />
              <FaqItem 
                question="En combien de temps devient-on efficace ?" 
                answer="Dès les premières séances, vous acquérez des réflexes simples et utilisables. La maîtrise complète prend des années, mais l'efficacité de base est rapide." 
              />
              <FaqItem 
                question="Où se déroulent les cours à Marseille ?" 
                answer="Au Centre Social Saint-Giniez, 38 Rue Raphaël Ponson, 13008 Marseille. Quartier calme, facile d'accès." 
              />
              <FaqItem 
                question="Peut-on essayer avant de s'inscrire ?" 
                answer="Oui, le premier cours est gratuit et sans engagement. L'équipement vous est prêté." 
              />
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden group border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-gold/10 rounded-full blur-[120px] group-hover:bg-primary-gold/20 transition-colors duration-1000" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-gold/5 rounded-full blur-[120px]" />
              <div className="relative z-10">
                <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Il est temps de vous sentir <span className="text-primary-gold italic">en sécurité</span></h2>
                <Link 
                  to="/#contact" 
                  className="cta-button bg-primary-gold text-surface-high font-black px-12 py-6 rounded-2xl inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary-gold/30 duration-500 uppercase tracking-widest text-sm"
                >
                  Essayez la self-défense à Marseille — Essai gratuit
                  <ChevronRight size={24} />
                </Link>
                <p className="mt-8 text-ivory-silk/40 font-bold uppercase tracking-widest text-xs">Centre Social Saint-Giniez — Sessions Adultes & Mixte</p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default SelfDefenseMarseille;
