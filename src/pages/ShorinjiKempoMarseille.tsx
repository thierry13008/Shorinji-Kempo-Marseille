import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, CheckCircle, ChevronDown, Shield, Heart, Users, Zap, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ScrollReveal from '@/src/components/ScrollReveal';
import Breadcrumbs from '@/src/components/Breadcrumbs';

export default function ShorinjiKempoMarseille() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shorinji Kempo Marseille Saint-Giniez",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Rue Raphaël Ponson",
      "addressLocality": "Marseille",
      "postalCode": "13008",
      "addressCountry": "FR"
    },
    "telephone": "06 89 09 05 44",
    "url": "https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille",
    "openingHours": [
      "Mo 20:00-21:30",
      "We 20:00-21:30",
      "Fr 20:15-21:45"
    ]
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
    <main className="overflow-hidden relative">
      <Helmet>
        <title>Shorinji Kempo Marseille | Self-Défense & Art Martial Saint-Giniez 13008</title>
        <meta name="description" content="Shorinji Kempo Marseille Saint-Giniez 13008. Self-défense et art martial au cœur du Prado. Cours tous niveaux, essai gratuit. Venez essayer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shorinji Kempo Marseille | Self-Défense & Art Martial Saint-Giniez 13008" />
        <meta property="og:description" content="Shorinji Kempo Marseille Saint-Giniez 13008. Self-défense et art martial au cœur du Prado. Cours tous niveaux, essai gratuit." />
        <meta property="og:image" content="https://i.ibb.co/5X3v6dSz/olivierwebp.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Fixed Background for Footer area consistency */}
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

      {/* Hero Section - Matching Home Style - Fixed Background Feel */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
          <Breadcrumbs items={[{ name: "Marseille", path: "/shorinji-kempo-marseille" }]} />
          <ScrollReveal>
            <h1 className="text-white leading-[1.1] mb-12 text-5xl md:text-7xl font-extrabold tracking-tight text-center [text-shadow:0_4px_15px_rgba(0,0,0,0.5)]">
              Shorinji Kempo Marseille | <br/>
              <span className="text-primary-gold italic">Self-Défense & Art Martial Saint-Giniez 13008</span>
            </h1>
          </ScrollReveal>
          
          <div className="flex justify-center">
            <ScrollReveal className="flex flex-col items-center gap-6">
              <a 
                href="/#contact"
                className="cta-button flex items-center justify-center gap-3 text-[16px] animate-float animate-pulse-gold group"
              >
                Réservez votre séance gratuite à Saint-Giniez
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
              </a>
              <p className="text-ivory-silk/80 text-sm font-bold uppercase tracking-[0.15em] [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                Séance d’essai gratuite – Accessible débutants
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 1 - Light Background (bg-bg-main) */}
      <section className="py-32 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">Art Martial Japonais</span>
              <h2 className="text-surface text-4xl md:text-6xl font-black leading-tight border-l-4 border-primary-gold pl-8">Le Shorinji Kempo à Marseille</h2>
              <div className="space-y-6">
                <p className="text-slate-900 text-xl leading-relaxed">
                  Le Shorinji Kempo est un art martial japonais fondé en 1947 par Doshin So, alliant self-défense, développement personnel et philosophie zen. Plus qu'un sport de combat, c'est une voie complète qui renforce le corps et l'esprit dans un même élan.
                </p>
                <p className="text-slate-900 text-xl leading-relaxed">
                  Notre dojo Marseille Saint-Giniez est affilié à la Fédération Française de Shorinji Kempo et à la WSKO (World Shorinji Kempo Organization). Il perpétue un enseignement authentique dans le respect de la tradition, au cœur du 8ème arrondissement.
                </p>
                <p className="text-slate-900 text-xl leading-relaxed font-medium">
                  Installé au Centre Social Saint-Giniez, à deux pas du Prado, le dojo accueille les Marseillais depuis plusieurs années dans une ambiance bienveillante et motivante. Ici, pas de compétition : on progresse ensemble.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative group overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl ki-aura-light">
              <img 
                src="https://i.ibb.co/5X3v6dSz/olivierwebp.webp" 
                alt="Pratique du Shorinji Kempo Marseille"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-gold/10 mix-blend-overlay" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 - Dark Background (bg-surface) - Now Transparent */}
      <section className="py-32 bg-transparent relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[450px] glass-card ki-aura-dark p-2">
              <iframe
                src={`https://maps.google.com/maps?q=43.2719266,5.3916423&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps Dojo Saint-Giniez"
                className="rounded-[2.5rem]"
              ></iframe>
            </div>
          </ScrollReveal>
          <ScrollReveal className="space-y-8 order-1 lg:order-2">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">Localisation</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-6">Notre dojo au cœur de Saint-Giniez</h2>
            <div className="space-y-6">
              <p className="text-slate-100 text-xl leading-relaxed">
                Notre dojo est situé au 38 Rue Raphaël Ponson, dans le quartier résidentiel de Saint-Giniez (13008 Marseille). Nous occupons les locaux du Centre Social Saint-Giniez.
              </p>
              <p className="text-slate-100 text-xl leading-relaxed">
                Le dojo est facile d'accès depuis tous les quartiers de Marseille : le métro Prado (ligne 2) est à quelques minutes à pied, et plusieurs lignes de bus desservent le boulevard Prado tout proche. Un parking gratuit est disponible à proximité.
              </p>
              <p className="text-slate-100 text-xl leading-relaxed font-light italic">
                Le cadre est calme, spacieux et propice à la pratique. Un environnement idéal pour se recentrer et se dépasser dans une atmosphère sereine.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3 - Schedule (Light Background) */}
      <section className="py-32 bg-bg-main relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">Calendrier</span>
            <h2 className="text-surface text-4xl md:text-6xl font-black mb-6 italic">Horaires du dojo Marseille Saint-Giniez</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-hidden rounded-[3rem] border border-surface/5 shadow-2xl bg-white p-2">
              <table className="w-full text-left bg-white rounded-[2.5rem] overflow-hidden">
                <thead>
                  <tr className="bg-surface/5">
                    <th className="px-8 py-8 text-surface font-black uppercase tracking-widest text-xs">Jour</th>
                    <th className="px-8 py-8 text-surface font-black uppercase tracking-widest text-xs">Horaire</th>
                    <th className="px-8 py-8 text-primary-gold font-black uppercase tracking-widest text-xs">Public</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface/5">
                  <tr className="hover:bg-surface/5 transition-colors">
                    <td className="px-8 py-8 text-surface text-xl font-bold italic">Lundi</td>
                    <td className="px-8 py-8 text-slate-800 text-lg font-medium">20h00 - 21h30</td>
                    <td className="px-8 py-8 text-slate-800 text-lg">Adultes tous niveaux</td>
                  </tr>
                  <tr className="hover:bg-surface/5 transition-colors">
                    <td className="px-8 py-8 text-surface text-xl font-bold italic">Mercredi</td>
                    <td className="px-8 py-8 text-slate-800 text-lg font-medium">20h00 - 21h30</td>
                    <td className="px-8 py-8 text-slate-800 text-lg">Adultes tous niveaux</td>
                  </tr>
                  <tr className="hover:bg-surface/5 transition-colors">
                    <td className="px-8 py-8 text-surface text-xl font-bold italic">Vendredi</td>
                    <td className="px-8 py-8 text-slate-800 text-lg font-medium">20h15 - 21h45</td>
                    <td className="px-8 py-8 text-slate-800 text-lg">Mixte adultes & enfants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4 - Benefits (Dark Background) - Now Transparent */}
      <section className="py-32 bg-transparent relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-20">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">L'Expérience</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-16">Pourquoi les Marseillais choisissent le Shorinji Kempo ?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Shield className="text-primary-gold" size={40} />,
                title: "Self-défense réaliste",
                desc: "Techniques efficaces, adaptées à toutes les morphologies, sans force brute.",
                step: "01"
              },
              {
                icon: <Zap className="text-primary-gold" size={40} />,
                title: "Développement personnel",
                desc: "Confiance, sérénité, discipline : vous progressez sur tous les plans.",
                step: "02"
              },
              {
                icon: <Heart className="text-primary-gold" size={40} />,
                title: "Ambiance bienveillante",
                desc: "Pas de compétition, pas d'agressivité. Débutants accompagnés.",
                step: "03"
              },
              {
                icon: <Users className="text-primary-gold" size={40} />,
                title: "Accessible à tous",
                desc: "Femmes, hommes, jeunes, adultes, sportifs ou non. Sans prérequis.",
                step: "04"
              },
              {
                icon: <Globe className="text-primary-gold" size={40} />,
                title: "Une communauté locale",
                desc: "Un groupe soudé de Marseillais partageant les valeurs d'entraide et de respect.",
                step: "05"
              }
            ].map((benefit, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 0.1} 
                className="relative group p-10 rounded-[3rem] glass-card border border-white/10 hover:border-primary-gold/30 transition-all duration-500 ki-aura-dark flex flex-col items-center text-center shadow-2xl"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 italic text-[80px] font-headline font-black text-white/5 group-hover:text-primary-gold/10 transition-colors duration-500 z-0">
                  {benefit.step}
                </div>
                <div className="mb-8 w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-primary-gold group-hover:text-surface transition-all duration-500 relative z-10 animate-float">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 italic relative z-10">{benefit.title}</h3>
                <p className="text-slate-100 text-lg leading-relaxed relative z-10">{benefit.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - FAQ (Light Background) */}
      <section className="py-32 bg-bg-main relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">FAQ</span>
            <h2 className="text-surface text-4xl md:text-6xl font-black mb-16">FAQ Shorinji Kempo Marseille 13008</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              {
                q: "Où se garer près du dojo ?",
                a: "Un parking gratuit est disponible à proximité immédiate du Centre Social Saint-Giniez, rue Raphaël Ponson."
              },
              {
                q: "Y a-t-il des cours enfants à Marseille ?",
                a: "Oui, les enfants et ados (9-13 ans) sont les bienvenus le vendredi soir lors du créneau mixte."
              },
              {
                q: "Quel est le tarif des cours ?",
                a: "Contactez-nous pour connaître les tarifs. Le premier cours d'essai est gratuit et sans engagement."
              },
              {
                q: "Peut-on essayer avant de s'inscrire ?",
                a: "Absolument. Réservez votre séance d'essai gratuite. L'équipement vous est prêté."
              },
              {
                q: "Comment venir en transport en commun ?",
                a: "Métro Prado (ligne 2) à 5 minutes à pied. Bus lignes 19, 83 et 583 à proximité."
              }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-[2.5rem] border border-surface/5 bg-white shadow-xl shadow-surface/5 overflow-hidden group">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-10 text-left transition-all duration-300"
                  >
                    <span className="text-2xl font-black text-surface italic group-hover:text-primary-gold transition-colors">{faq.q}</span>
                    <div className={cn("w-10 h-10 rounded-full border border-surface/10 flex items-center justify-center transition-all duration-500", openFaq === i ? "bg-primary-gold border-primary-gold text-surface rotate-180" : "text-surface/30")}>
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", openFaq === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0")}>
                    <div className="px-10 pb-10 border-t border-surface/5 pt-8">
                      <p className="text-slate-900 text-xl leading-relaxed">
                        {faq.a}
                      </p>
                      <div className="mt-8 flex items-center gap-3 text-primary-gold/80 text-xs font-bold uppercase tracking-widest">
                        <CheckCircle size={16} /> Dojo Saint-Giniez 13008
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - CTA (Footer/Dark consistency) */}
      <section className="py-32 px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-[4rem] p-16 md:p-24 glass-card border border-primary-gold/20 text-center relative overflow-hidden ki-aura shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            <div className="relative z-10">
              <span className="micro-copy text-primary-gold mb-6 block uppercase tracking-[0.3em] font-black">Prenez Rendez-vous</span>
              <h2 className="text-white text-4xl md:text-7xl font-black mb-12 italic leading-tight">Prêt à débuter votre <br/> transformation à Marseille ?</h2>
              <a 
                href="/#contact"
                className="cta-button inline-flex items-center justify-center gap-4 text-xl px-16 py-8 animate-pulse-gold group"
              >
                Réservez votre essai gratuit (Marseille 13008)
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </a>
              <p className="mt-10 text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                Aucun équipement requis pour la première séance
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Internal Link to Self-Defense */}
      <section className="pb-8 bg-transparent text-center relative z-10">
        <ScrollReveal>
          <Link to="/self-defense-marseille" className="text-primary-gold text-sm md:text-base hover:text-white transition-colors font-bold uppercase tracking-widest border-b border-primary-gold/30 pb-1">
            En savoir plus sur la self-défense à Marseille
          </Link>
        </ScrollReveal>
      </section>

      {/* Internal SEO Links */}
      <section className="pb-12 bg-transparent text-center relative z-10">
        <ScrollReveal>
          <p className="text-slate-500 text-xs md:text-sm tracking-wide">
            Comparer le Shorinji Kempo : <Link to="/encyclopedie/shorinji-kempo-vs-karate" className="hover:text-primary-gold transition-colors">vs Karaté</Link> · <Link to="/encyclopedie/shorinji-kempo-vs-judo" className="hover:text-primary-gold transition-colors">vs Judo</Link> · <Link to="/encyclopedie/shorinji-kempo-vs-aikido" className="hover:text-primary-gold transition-colors">vs Aïkido</Link> · <Link to="/encyclopedie/shorinji-kempo-vs-kung-fu" className="hover:text-primary-gold transition-colors">vs Kung Fu</Link>
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
}
