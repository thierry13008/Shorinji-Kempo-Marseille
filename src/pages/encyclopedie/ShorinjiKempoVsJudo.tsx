import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/src/components/ScrollReveal';
import Breadcrumbs from '@/src/components/Breadcrumbs';

export default function ShorinjiKempoVsJudo() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://shorinji-kempo-marseille.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Encyclopédie", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie" },
      { "@type": "ListItem", "position": 3, "name": "Shorinji Kempo vs Judo", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-judo" }
    ]
  };

  return (
    <main className="pt-32 bg-surface min-h-screen text-ivory-silk selection:bg-primary-gold/30">
      <Helmet>
        <title>Shorinji Kempo vs Judo : Lequel choisir ? | Marseille</title>
        <meta name="description" content="Shorinji Kempo vs Judo : self-défense complète ou sport olympique ? Découvrez pourquoi les adultes choisissent le Shorinji Kempo. Essayez gratuitement à Marseille." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-judo" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-20 pb-32">
        <Breadcrumbs items={[{ name: "Encyclopédie", path: "/encyclopedia" }, { name: "vs Judo", path: "/encyclopedie/shorinji-kempo-vs-judo" }]} />
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight italic tracking-tight">
            Shorinji Kempo vs Judo : <span className="text-primary-gold">Lequel est fait pour vous ?</span>
          </h1>
        </ScrollReveal>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white border-l-4 border-primary-gold pl-6 italic">
              Vous hésitez entre Shorinji Kempo et Judo à Marseille ?
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Deux arts martiaux japonais, deux approches radicalement différentes du combat et du développement personnel.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Judo : la voie de la souplesse... et de la compétition</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Créé par Jigoro Kano en 1882, le Judo est un sport olympique. Projections, immobilisations, étranglements. Le but : déséquilibrer et maîtriser l'adversaire au sol. Mais le Judo est avant tout une discipline de compétition. On gagne par ippon. On perd par immobilisation.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Shorinji Kempo : l'art de se défendre debout comme au sol</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Le Shorinji Kempo intègre les projections du Judo (Juho) mais y ajoute les frappes (Goho). Vous savez vous défendre debout ET au sol. Et surtout : pas de compétition à Saint-Giniez. On travaille la technique pour elle-même, pour être prêt dans la vraie vie.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white/5 p-10 rounded-[2.5rem] border border-primary-gold/20 glass-card ki-aura-dark">
            <h3 className="text-2xl font-bold text-primary-gold mb-8 italic">Ce que le Shorinji Kempo vous apporte que le Judo ne vous donnera pas</h3>
            <ul className="space-y-4">
              {[
                "Pas de compétition obligatoire — on pratique pour soi, pas pour un podium",
                "Self-défense complète — debout + sol, frappes + projections",
                "Adapté aux adultes — pas besoin d'avoir 20 ans et un corps de gymnaste",
                "Méditation et philosophie zen incluses",
                "Moins de blessures — pas de chutes répétitives de compétition"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-gold shrink-0 mt-1" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Imaginez...</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6 mb-12">
              Vous apprenez à projeter un adversaire. Mais aussi à frapper si nécessaire. Vous n'êtes pas limité à une seule distance de combat. Vous êtes complet. C'est ça, la méthode Shorinji Kempo.
            </p>
            
            <div className="flex justify-center pt-8">
              <a 
                href="/shorinji-kempo-marseille"
                className="cta-button flex items-center justify-center gap-4 text-xl px-12 py-6 animate-pulse-gold group"
              >
                Essayez le Shorinji Kempo à Marseille Saint-Giniez
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
