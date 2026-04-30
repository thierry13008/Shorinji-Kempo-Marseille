import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, CheckCircle, ChevronDown, Shield, Heart, Users, Zap, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ScrollReveal from '@/src/components/ScrollReveal';

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

  return (
    <main className="pt-24 bg-bg-main min-h-screen">
      <Helmet>
        <title>Shorinji Kempo Marseille | Self-Défense & Art Martial Saint-Giniez 13008</title>
        <meta name="description" content="Shorinji Kempo Marseille Saint-Giniez 13008. Self-défense et art martial au cœur du Prado. Cours tous niveaux, essai gratuit. Venez essayer." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/shorinji-kempo-marseille" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-12 text-center leading-tight">
              Shorinji Kempo Marseille | <span className="text-primary-gold">Self-Défense & Art Martial Saint-Giniez 13008</span>
            </h1>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <h2 className="text-3xl font-bold text-white border-l-4 border-primary-gold pl-6">Le Shorinji Kempo à Marseille</h2>
              <p className="text-ivory-silk/80 text-lg leading-relaxed">
                Le Shorinji Kempo est un art martial japonais fondé en 1947 par Doshin So, alliant self-défense, développement personnel et philosophie zen. Plus qu'un sport de combat, c'est une voie complète qui renforce le corps et l'esprit dans un même élan.
              </p>
              <p className="text-ivory-silk/80 text-lg leading-relaxed">
                Notre dojo Marseille Saint-Giniez est affilié à la Fédération Française de Shorinji Kempo et à la WSKO (World Shorinji Kempo Organization). Il perpétue un enseignement authentique dans le respect de la tradition, au cœur du 8ème arrondissement.
              </p>
              <p className="text-ivory-silk/80 text-lg leading-relaxed">
                Installé au Centre Social Saint-Giniez, à deux pas du Prado, le dojo accueille les Marseillais depuis plusieurs années dans une ambiance bienveillante et motivante. Ici, pas de compétition : on progresse ensemble, chacun à son rythme, porté par des valeurs d'entraide et de respect mutuel.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img 
                src="https://i.ibb.co/wZfYzYPk/page-404webp.webp" 
                alt="Pratique du Shorinji Kempo Marseille"
                className="w-full aspect-video lg:aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 to-transparent" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dojo Location */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <ScrollReveal className="order-2 lg:order-1">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-[400px]">
              <iframe
                src={`https://maps.google.com/maps?q=43.2719266,5.3916423&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps Dojo Saint-Giniez"
              ></iframe>
            </div>
          </ScrollReveal>
          <ScrollReveal className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white">Notre dojo au cœur de Saint-Giniez</h2>
            <p className="text-ivory-silk/80 text-lg leading-relaxed">
              Notre dojo est situé au 38 Rue Raphaël Ponson, dans le quartier résidentiel de Saint-Giniez (13008 Marseille). Nous occupons les locaux du Centre Social Saint-Giniez, un lieu vivant et accessible à tous.
            </p>
            <p className="text-ivory-silk/80 text-lg leading-relaxed">
              Le dojo est facile d'accès depuis tous les quartiers de Marseille : le métro Prado (ligne 2) est à quelques minutes à pied, et plusieurs lignes de bus desservent le boulevard Prado tout proche. Pour ceux qui viennent en voiture, un parking gratuit est disponible à proximité immédiate.
            </p>
            <p className="text-ivory-silk/80 text-lg leading-relaxed">
              Le cadre est calme, spacieux et propice à la pratique. Un environnement idéal pour se recentrer après une journée de travail et se dépasser dans une atmosphère sereine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-12 text-center italic">Horaires du dojo Marseille Saint-Giniez</h2>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl glass-card">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary-gold/10">
                    <th className="px-8 py-6 text-primary-gold font-bold uppercase tracking-wider">Jour</th>
                    <th className="px-8 py-6 text-primary-gold font-bold uppercase tracking-wider">Horaire</th>
                    <th className="px-8 py-6 text-primary-gold font-bold uppercase tracking-wider">Public</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-8 py-6 text-white font-medium">Lundi</td>
                    <td className="px-8 py-6 text-white">20h00 - 21h30</td>
                    <td className="px-8 py-6 text-ivory-silk/70">Adultes tous niveaux</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 text-white font-medium">Mercredi</td>
                    <td className="px-8 py-6 text-white">20h00 - 21h30</td>
                    <td className="px-8 py-6 text-ivory-silk/70">Adultes tous niveaux</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 text-white font-medium">Vendredi</td>
                    <td className="px-8 py-6 text-white">20h15 - 21h45</td>
                    <td className="px-8 py-6 text-ivory-silk/70">Mixte adultes & enfants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Pourquoi les Marseillais choisissent le Shorinji Kempo ?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-primary-gold" size={32} />,
                title: "1. Self-défense réaliste",
                desc: "Techniques efficaces, adaptées à toutes les morphologies, sans force brute."
              },
              {
                icon: <Zap className="text-primary-gold" size={32} />,
                title: "2. Développement personnel",
                desc: "Confiance, sérénité, discipline : vous progressez sur tous les plans."
              },
              {
                icon: <Heart className="text-primary-gold" size={32} />,
                title: "3. Ambiance bienveillante",
                desc: "Pas de compétition, pas d'agressivité. Débutants accompagnés."
              },
              {
                icon: <Users className="text-primary-gold" size={32} />,
                title: "4. Accessible à tous",
                desc: "Femmes, hommes, jeunes, adultes, sportifs ou non. Sans prérequis."
              },
              {
                icon: <Globe className="text-primary-gold" size={32} />,
                title: "5. Une communauté locale",
                desc: "Un groupe soudé de Marseillais partageant les valeurs d'entraide et de respect."
              }
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="p-8 rounded-[2rem] glass-card border border-white/5 hover:border-primary-gold/30 transition-all duration-500 ki-aura-dark h-full">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 italic">{benefit.title}</h3>
                <p className="text-ivory-silk/70 leading-relaxed">{benefit.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-16 text-center">FAQ locale</h2>
          </ScrollReveal>
          <div className="space-y-4">
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
                <div className="glass-card border border-white/5 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-bold text-white">{faq.q}</span>
                    <ChevronDown className={cn("text-primary-gold transition-transform duration-300", openFaq === i ? "rotate-180" : "")} />
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-300", openFaq === i ? "max-h-40" : "max-h-0")}>
                    <p className="p-6 pt-0 text-ivory-silk/70 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 glass-card border border-primary-gold/20 text-center relative overflow-hidden ki-aura">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10">Prêt à débuter votre transformation ?</h2>
              <a 
                href="/#contact"
                className="inline-flex items-center gap-3 bg-primary-gold text-black font-black py-5 px-10 rounded-2xl text-lg uppercase tracking-widest hover:bg-white transition-all shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:scale-95"
              >
                Réservez votre essai gratuit à Marseille Saint-Giniez
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
