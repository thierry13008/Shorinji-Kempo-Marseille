import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Calendar, MapPin, ChevronRight, CheckCircle2, Info, Sparkles } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ScrollReveal from "../components/ScrollReveal";
import { cn } from "../lib/utils";

const ShorinjiKempoMarseille = () => {
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
    "telephone": "06 14 36 29 35",
    "url": "https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Rue Raphaël Ponson",
      "addressLocality": "Marseille",
      "postalCode": "13008",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.2683,
      "longitude": 5.3942
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday"],
        "opens": "20:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "20:15",
        "closes": "21:45"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Où se garer près du dojo ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un parking gratuit est disponible à proximité immédiate du Centre Social Saint-Giniez, rue Raphaël Ponson."
        }
      },
      {
        "@type": "Question",
        "name": "Y a-t-il des cours enfants à Marseille ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, les enfants et ados (9-13 ans) sont les bienvenus le vendredi soir lors du créneau mixte."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le tarif des cours ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contactez-nous pour connaître les tarifs. Le premier cours d'essai est gratuit et sans engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on essayer avant de s'inscrire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. Réservez votre séance d'essai gratuite. L'équipement vous est prêté."
        }
      },
      {
        "@type": "Question",
        "name": "Comment venir en transport en commun ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Métro Prado (ligne 2) à 5 minutes à pied. Bus lignes 19, 83 et 583 à proximité."
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
        "name": "Shorinji Kempo Marseille",
        "item": "https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-main font-sans selection:bg-primary-gold/30 selection:text-primary-gold relative">
      <Helmet>
        <title>Shorinji Kempo Marseille | Self-Défense & Art Martial Saint-Giniez 13008</title>
        <meta name="description" content="Shorinji Kempo Marseille Saint-Giniez 13008. Self-défense et art martial au cœur du Prado. Cours tous niveaux, essai gratuit. Venez essayer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille" />
        
        <meta property="og:title" content="Shorinji Kempo Marseille | Self-Défense & Art Martial Saint-Giniez 13008" />
        <meta property="og:description" content="Shorinji Kempo Marseille Saint-Giniez 13008. Self-défense et art martial au cœur du Prado. Cours tous niveaux, essai gratuit. Venez essayer." />
        <meta property="og:image" content="https://i.ibb.co/zT9kZ0D2/logo-shorinji-kempo-WEBP.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      {/* Fixed Background for CTA & Footer (Encyclopedia style) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://i.ibb.co/tMwSy8WG/fond-page-marseillewebp.webp" 
          alt="Background fixe"
          referrerPolicy="no-referrer"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface"></div>
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
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex micro-copy mb-6 items-center gap-2 px-4 py-1.5 border border-primary-gold/30 bg-primary-gold/10 rounded-full text-primary-gold font-bold">
              <Sparkles size={14} /> Le Dojo de Saint-Giniez
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
              Shorinji Kempo <span className="text-primary-gold italic">Marseille</span> <br className="hidden md:block" />
              <span className="text-ivory-silk/90 text-3xl md:text-5xl block mt-4 font-bold">Self-Défense & Art Martial Saint-Giniez 13008</span>
            </h1>
          </motion.div>
        </section>

        {/* SECTION 1 - Presentation */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-24">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden group h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-primary-gold text-2xl md:text-3xl font-black mb-8 flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-primary-gold/30" />
                  Art Martial Japonais - Le Shorinji Kempo à Marseille
                </h2>
                <div className="space-y-6 text-ivory-silk/80 text-lg leading-relaxed font-medium">
                  <p>
                    Le Shorinji Kempo est un art martial japonais fondé en 1947 par Doshin So, alliant self-défense, développement personnel et philosophie zen. Plus qu'un sport de combat, c'est une voie complète qui renforce le corps et l'esprit dans un même élan.
                  </p>
                  <p>
                    Notre dojo Marseille Saint-Giniez est affilié à la Fédération Française de Shorinji Kempo et à la WSKO (World Shorinji Kempo Organization). Il perpétue un enseignement authentique dans le respect de la tradition, au cœur du 8ème arrondissement.
                  </p>
                  <p>
                    Installé au Centre Social Saint-Giniez, à deux pas du Prado, le dojo accueille les Marseillais depuis plusieurs années dans une ambiance bienveillante et motivante. Ici, pas de compétition : on progresse ensemble, chacun à son rythme, porté par des valeurs d'entraide et de respect mutuel.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl">
                <div className="absolute inset-0 bg-primary-gold/10 group-hover:bg-primary-gold/0 transition-colors duration-1000 z-10" />
                <img 
                  src="https://i.ibb.co/5X3v6dSz/olivierwebp.webp" 
                  alt="Shorinji Kempo Marseille Practice" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 2 - Location */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-24">
            <div className="max-w-4xl mx-auto">
              <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold text-center">Localisation Privilégiée</span>
              <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight text-center">Notre dojo au cœur de Saint-Giniez</h2>
              <div className="space-y-6 text-ivory-silk/70 text-lg leading-relaxed text-center">
                <p>
                  Notre dojo est situé au <span className="text-white font-bold border-b border-primary-gold/30">38 Rue Raphaël Ponson</span>, dans le quartier résidentiel de Saint-Giniez (13008 Marseille). Nous occupons les locaux du Centre Social Saint-Giniez, un lieu vivant et accessible à tous.
                </p>
                <p>
                  Le dojo est facile d'accès depuis tous les quartiers de Marseille : le métro Prado (ligne 2) est à quelques minutes à pied, et plusieurs lignes de bus desservent le boulevard Prado tout proche.
                </p>
                <p>
                  Le cadre est calme, spacieux et propice à la pratique. Un environnement idéal pour se recentrer après une journée de travail et se dépasser dans une atmosphère sereine.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 3 - Horaires */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Planning des cours</span>
                <h2 className="text-white text-4xl md:text-5xl font-black mb-4 italic">Horaires des entraînements à Marseille 13008</h2>
                <p className="text-ivory-silk/60">3 créneaux hebdomadaires au Dojo Saint-Giniez</p>
              </div>
              <div className="overflow-hidden glass-card rounded-[40px] border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-10 py-6 text-primary-gold font-bold uppercase tracking-widest text-xs">Jour</th>
                      <th className="px-10 py-6 text-primary-gold font-bold uppercase tracking-widest text-xs">Horaire</th>
                      <th className="px-10 py-6 text-primary-gold font-bold uppercase tracking-widest text-xs">Public</th>
                    </tr>
                  </thead>
                  <tbody className="text-ivory-silk/80">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="px-10 py-6 font-bold text-white text-lg">Lundi</td>
                      <td className="px-10 py-6 font-medium">20h00 — 21h30</td>
                      <td className="px-10 py-6">
                        <span className="px-4 py-1 bg-surface/40 rounded-full border border-white/5 text-sm uppercase tracking-wider">Adultes tous niveaux</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="px-10 py-6 font-bold text-white text-lg">Mercredi</td>
                      <td className="px-10 py-6 font-medium">20h00 — 21h30</td>
                      <td className="px-10 py-6">
                        <span className="px-4 py-1 bg-surface/40 rounded-full border border-white/5 text-sm uppercase tracking-wider">Adultes tous niveaux</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-10 py-6 font-bold text-white text-lg">Vendredi</td>
                      <td className="px-10 py-6 font-medium">20h15 — 21h45</td>
                      <td className="px-10 py-6">
                        <span className="px-4 py-1 bg-primary-gold/10 text-primary-gold rounded-full border border-primary-gold/20 text-sm uppercase tracking-wider font-bold">Mixte adultes & enfants</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 4 - Cards */}
        <section className="relative mb-24 py-32 overflow-hidden">
          <div className="absolute inset-0 bg-surface/60 backdrop-blur-md -skew-y-3 scale-110 origin-center z-0" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Pourquoi nous ?</span>
                <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">Pourquoi les <span className="text-primary-gold italic">Marseillais</span> choisissent le Shorinji Kempo ?</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Self-défense réaliste", desc: "Techniques efficaces, adaptées à toutes les morphologies, sans force brute.", icon: "👊" },
                  { title: "Développement personnel", desc: "Confiance, sérénité, discipline : vous progressez sur tous les plans.", icon: "✨" },
                  { title: "Ambiance bienveillante", desc: "Pas de compétition, pas d'agressivité. Débutants accompagnés.", icon: "🤝" },
                  { title: "Accessible à tous", desc: "Femmes, hommes, jeunes, adultes, sportifs ou non. Sans prérequis.", icon: "👥" },
                  { title: "Une communauté locale", desc: "Un groupe soudé de Marseillais partageant les valeurs d'entraide et de respect.", icon: "🏛️" }
                ].map((card, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="glass-card p-10 group hover:border-primary-gold/40 transition-all duration-700 h-full flex flex-col hover:-translate-y-2">
                      <div className="w-16 h-16 rounded-[24px] bg-primary-gold/10 flex items-center justify-center mb-8 text-3xl group-hover:scale-110 group-hover:bg-primary-gold/20 transition-all duration-500 shadow-lg shadow-black/20">
                        {card.icon}
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
                      <p className="text-ivory-silk/60 text-lg leading-relaxed">{card.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - FAQ */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-32">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Réponses à vos questions</span>
                <h2 className="text-white text-4xl md:text-5xl font-black mb-4 italic">FAQ du Dojo Marseille 13008</h2>
              </div>
              <div className="space-y-6">
                {[
                  { q: "Où se garer près du dojo ?", r: "Un parking gratuit est disponible à proximité immédiate du Centre Social Saint-Giniez, rue Raphaël Ponson." },
                  { q: "Y a-t-il des cours enfants à Marseille ?", r: "Oui, les enfants et ados (9-13 ans) sont les bienvenus le vendredi soir lors du créneau mixte." },
                  { q: "Quel est le tarif des cours ?", r: "Contactez-nous pour connaître les tarifs. Le premier cours d'essai est gratuit et sans engagement." },
                  { q: "Peut-on essayer avant de s'inscrire ?", r: "Absolument. Réservez votre séance d'essai gratuite. L'équipement vous est prêté." },
                  { q: "Comment venir en transport en commun ?", r: "Métro Prado (ligne 2) à 5 minutes à pied. Bus lignes 19, 83 et 583 à proximité." }
                ].map((faq, idx) => (
                  <details key={idx} className="group glass-card border border-white/10 rounded-[24px] overflow-hidden transition-all duration-500 open:border-primary-gold/30">
                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-white/5 transition-colors">
                      <span className="text-white font-bold text-xl pr-6 leading-tight">{faq.q}</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary-gold group-open:bg-primary-gold group-open:text-surface transition-all duration-300">
                        <ChevronRight className="w-6 h-6 group-open:rotate-90 transition-transform duration-300" />
                      </div>
                    </summary>
                    <div className="px-8 pb-8 text-ivory-silk/70 text-lg leading-relaxed border-t border-white/5 pt-6 bg-surface/20">
                      {faq.r}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 6 - CTA */}
        <ScrollReveal>
          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.4)] border-white/20">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-gold/10 rounded-full blur-[120px] group-hover:bg-primary-gold/20 transition-colors duration-1000" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-gold/5 rounded-full blur-[120px]" />
              <div className="relative z-10">
                <h3 className="text-white text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight">Prêt à commencer à <br /><span className="text-primary-gold">Marseille Saint-Giniez ?</span></h3>
                <a 
                  href="/#contact" 
                  className="cta-button bg-primary-gold text-surface-high font-black px-12 py-6 rounded-2xl inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary-gold/30 duration-500 uppercase tracking-widest text-sm animate-pulse-gold"
                >
                  Réservez votre essai gratuit à Marseille Saint-Giniez
                  <ChevronRight className="w-6 h-6" />
                </a>
                <p className="mt-8 text-ivory-silk/40 font-bold uppercase tracking-widest text-xs">Sans engagement — Débutants bienvenus</p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        <p className="text-xs text-slate-500 text-center mt-16">
          Comparer le Shorinji Kempo : <a href="/encyclopedie/shorinji-kempo-vs-karate" className="hover:text-primary-gold transition-colors">vs Karaté</a> · <a href="/encyclopedie/shorinji-kempo-vs-judo" className="hover:text-primary-gold transition-colors">vs Judo</a> · <a href="/encyclopedie/shorinji-kempo-vs-aikido" className="hover:text-primary-gold transition-colors">vs Aïkido</a> · <a href="/encyclopedie/shorinji-kempo-vs-kung-fu" className="hover:text-primary-gold transition-colors">vs Kung Fu</a>
        </p>
        <p className="text-xs text-slate-500 text-center mt-16">
          <a href="/self-defense-marseille" className="hover:text-primary-gold transition-colors">En savoir plus sur la self-défense à Marseille</a>
        </p>
      </main>
    </div>
  );
};

export default ShorinjiKempoMarseille;
