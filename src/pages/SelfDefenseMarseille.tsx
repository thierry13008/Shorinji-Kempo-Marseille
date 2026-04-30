import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Heart, Users, Globe, ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ScrollReveal from '@/src/components/ScrollReveal';
import Breadcrumbs from '@/src/components/Breadcrumbs';

export default function SelfDefenseMarseille() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shorinji Kempo Marseille Saint-Giniez - Self-Défense",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Rue Raphaël Ponson",
      "addressLocality": "Marseille",
      "postalCode": "13008",
      "addressCountry": "FR"
    },
    "telephone": "06 89 09 05 44",
    "url": "https://shorinji-kempo-marseille.vercel.app/self-defense-marseille",
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
      },
      {
        "@type": "Question",
        "name": "En combien de temps devient-on efficace ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dès les premières séances, vous acquérez des réflexes simples et utilisables. La maîtrise complète prend des années, mais l'efficacité de base est rapide."
        }
      },
      {
        "@type": "Question",
        "name": "Où se déroulent les cours à Marseille ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Au Centre Social Saint-Giniez, 38 Rue Raphaël Ponson, 13008 Marseille. Quartier calme, facile d'accès."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on essayer avant de s'inscrire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le premier cours est gratuit et sans engagement. L'équipement vous est prêté."
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
        "name": "Self-défense Marseille",
        "item": "https://shorinji-kempo-marseille.vercel.app/self-defense-marseille"
      }
    ]
  };

  return (
    <main className="overflow-hidden relative">
      <Helmet>
        <title>Self-défense Marseille 13008 | Shorinji Kempo Saint-Giniez</title>
        <meta name="description" content="Self-défense à Marseille 13008 Saint-Giniez. Apprenez à vous protéger au quotidien. Cours tous niveaux, essai gratuit. Shorinji Kempo Marseille." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/self-defense-marseille" />
        
        <meta property="og:title" content="Self-défense Marseille 13008 | Shorinji Kempo Saint-Giniez" />
        <meta property="og:description" content="Apprenez à vous protéger à Marseille. Self-défense réaliste et accessible à tous à Saint-Giniez 13008." />
        <meta property="og:image" content="https://i.ibb.co/tMwSy8WG/fond-page-marseillewebp.webp" />
        <meta property="og:url" content="https://shorinji-kempo-marseille.vercel.app/self-defense-marseille" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Fixed Background - Matching Marseille Page */}
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

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
          <Breadcrumbs items={[{ name: "Self-défense Marseille", path: "/self-defense-marseille" }]} />
          <ScrollReveal>
            <h1 className="text-white leading-[1.1] mb-12 text-5xl md:text-7xl font-extrabold tracking-tight text-center [text-shadow:0_4px_15px_rgba(0,0,0,0.5)]">
              Self-défense Marseille 13008 | <br/>
              <span className="text-primary-gold italic">Shorinji Kempo Saint-Giniez</span>
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

      {/* Section 1 - Content */}
      <section className="py-32 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">Sécurité & Sérénité</span>
              <h2 className="text-surface text-4xl md:text-6xl font-black leading-tight border-l-4 border-primary-gold pl-8">Apprenez à vous défendre à Marseille</h2>
              <div className="space-y-6">
                <p className="text-slate-900 text-xl leading-relaxed">
                  Marseille est une ville vibrante, mais comme toutes les grandes villes, on peut s'y sentir vulnérable. Transports en commun tard le soir, sorties entre amis, trajets quotidiens : savoir se défendre, c'est gagner en sérénité.
                </p>
                <p className="text-slate-900 text-xl leading-relaxed font-medium">
                  Le Shorinji Kempo est une self-défense complète, réaliste, accessible à tous. Pas besoin d'être sportif. Pas besoin d'avoir fait des arts martiaux. Juste l'envie d'apprendre à se protéger.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative group overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl ki-aura-light">
              <img 
                src="https://i.ibb.co/5X3v6dSz/olivierwebp.webp" 
                alt="Self-défense Marseille"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-gold/10 mix-blend-overlay" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 - Why Shorinji Kempo */}
      <section className="py-32 bg-transparent relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-20">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">Méthode</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-16">Pourquoi le Shorinji Kempo pour la self-défense ?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Shield className="text-primary-gold" size={40} />,
                title: "Efficacité réelle",
                desc: "Des techniques testées, pas de la théorie. Frappes, clés, projections : vous saurez réagir.",
                step: "01"
              },
              {
                icon: <Users className="text-primary-gold" size={40} />,
                title: "Adapté à tous",
                desc: "Femmes, hommes, jeunes, adultes. Les techniques utilisent le mouvement, pas la force brute.",
                step: "02"
              },
              {
                icon: <Zap className="text-primary-gold" size={40} />,
                title: "Pas de compétition",
                desc: "On s'entraîne pour la vraie vie, pas pour un podium.",
                step: "03"
              },
              {
                icon: <Heart className="text-primary-gold" size={40} />,
                title: "Confiance en soi",
                desc: "Savoir se défendre change votre posture. Vous marchez plus droit, vous respirez mieux.",
                step: "04"
              },
              {
                icon: <Globe className="text-primary-gold" size={40} />,
                title: "Ambiance bienveillante",
                desc: "On progresse ensemble, dans le respect. Les débutants sont accompagnés.",
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

      {/* Section 3 - Situations */}
      <section className="py-32 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">Réalité du terrain</span>
            <h2 className="text-surface text-4xl md:text-6xl font-black mb-6">La self-défense à Marseille : les situations du quotidien</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              "En sortant du métro Prado à 22h...",
              "Après un match au Vélodrome, la foule...",
              "En balade dans les Calanques, isolé(e)..."
            ].map((situation, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-12 rounded-[3rem] border border-surface/5 shadow-2xl italic text-2xl text-center text-surface font-headline leading-relaxed h-full flex items-center justify-center">
                  "{situation}"
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-16 text-center">
            <p className="text-slate-900 text-xl leading-relaxed max-w-2xl mx-auto">
              Dans toutes ces situations, avoir des réflexes de self-défense change tout. Le Shorinji Kempo vous les donne.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4 - FAQ */}
      <section className="py-32 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold font-label">FAQ</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-16">FAQ Self-défense Marseille</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              {
                q: "Faut-il être sportif pour commencer la self-défense ?",
                a: "Non. Le Shorinji Kempo s'adapte à votre niveau. Les techniques utilisent le mouvement et le placement, pas la force."
              },
              {
                q: "Les cours sont-ils mixtes ?",
                a: "Oui. Hommes et femmes pratiquent ensemble dans le respect mutuel. C'est une force : vous apprenez à vous défendre face à différents gabarits."
              },
              {
                q: "En combien de temps devient-on efficace ?",
                a: "Dès les premières séances, vous acquérez des réflexes simples et utilisables. La maîtrise complète prend des années, mais l'efficacité de base est rapide."
              },
              {
                q: "Où se déroulent les cours à Marseille ?",
                a: "Au Centre Social Saint-Giniez, 38 Rue Raphaël Ponson, 13008 Marseille. Quartier calme, facile d'accès."
              },
              {
                q: "Peut-on essayer avant de s'inscrire ?",
                a: "Oui, le premier cours est gratuit et sans engagement. L'équipement vous est prêté."
              }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-[2.5rem] border border-white/10 glass-card shadow-2xl overflow-hidden group">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-10 text-left transition-all duration-300"
                  >
                    <span className="text-2xl font-black text-white italic group-hover:text-primary-gold transition-colors">{faq.q}</span>
                    <div className={cn("w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500", openFaq === i ? "bg-primary-gold border-primary-gold text-surface rotate-180" : "text-white/30")}>
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", openFaq === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0")}>
                    <div className="px-10 pb-10 border-t border-white/5 pt-8">
                      <p className="text-slate-100 text-xl leading-relaxed">
                        {faq.a}
                      </p>
                      <div className="mt-8 flex items-center gap-3 text-primary-gold/80 text-xs font-bold uppercase tracking-widest">
                        <CheckCircle size={16} /> Self-défense Marseille 13008
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="py-32 px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-[4rem] p-16 md:p-24 glass-card border border-primary-gold/20 text-center relative overflow-hidden ki-aura shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            <div className="relative z-10">
              <span className="micro-copy text-primary-gold mb-6 block uppercase tracking-[0.3em] font-black">Cours d'essai gratuit</span>
              <h2 className="text-white text-4xl md:text-7xl font-black mb-12 italic leading-tight">Gagnez en assurance <br/> à Marseille dès aujourd'hui</h2>
              <a 
                href="/#contact"
                className="cta-button inline-flex items-center justify-center gap-4 text-xl px-16 py-8 animate-pulse-gold group"
              >
                Essayez la self-défense à Marseille — Essai gratuit
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </a>
              <p className="mt-10 text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                Aucun équipement requis pour la première séance
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
