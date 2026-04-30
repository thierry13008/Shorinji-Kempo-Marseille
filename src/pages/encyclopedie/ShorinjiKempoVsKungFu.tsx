import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/src/components/ScrollReveal';
import Breadcrumbs from '@/src/components/Breadcrumbs';

export default function ShorinjiKempoVsKungFu() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://shorinji-kempo-marseille.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Encyclopédie", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie" },
      { "@type": "ListItem", "position": 3, "name": "Shorinji Kempo vs Kung Fu", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-kung-fu" }
    ]
  };

  return (
    <main className="pt-32 bg-surface min-h-screen text-ivory-silk selection:bg-primary-gold/30">
      <Helmet>
        <title>Shorinji Kempo vs Kung Fu : Lequel choisir ? | Marseille</title>
        <meta name="description" content="Shorinji Kempo vs Kung Fu : deux héritiers de Shaolin, mais un seul est structuré pour la self-défense moderne. Essayez gratuitement à Marseille." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-kung-fu" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-20 pb-32">
        <Breadcrumbs items={[{ name: "Encyclopédie", path: "/encyclopedia" }, { name: "vs Kung Fu", path: "/encyclopedie/shorinji-kempo-vs-kung-fu" }]} />
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight italic tracking-tight">
            Shorinji Kempo vs Kung Fu : <span className="text-primary-gold">Lequel est fait pour vous ?</span>
          </h1>
        </ScrollReveal>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white border-l-4 border-primary-gold pl-6 italic">
              Vous hésitez entre Shorinji Kempo et Kung Fu à Marseille ?
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Le Shorinji Kempo tire ses racines du Kung Fu de Shaolin. Mais en 1500 ans, les deux arts ont pris des chemins très différents.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Kung Fu : un art, un spectacle... mais quelle école ?</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Le Kung Fu chinois est multiple : Wushu acrobatique, Wing Chun, Tai Chi... Difficile de savoir ce qu'on va apprendre. Certaines écoles sont excellentes, d'autres font du spectacle. Et beaucoup se concentrent sur les formes (taolu) plus que sur l'application martiale réelle.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Shorinji Kempo : l'héritage de Shaolin, structuré et moderne à Saint-Giniez</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Doshin So a repris l'essence du Kung Fu de Shaolin et l'a structurée en une méthode cohérente. Même racine spirituelle, mais un enseignement standardisé, reconnu dans le monde entier par la WSKO. Vous savez exactement ce que vous apprenez, et pourquoi.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white/5 p-10 rounded-[2.5rem] border border-primary-gold/20 glass-card ki-aura-dark">
            <h3 className="text-2xl font-bold text-primary-gold mb-8 italic">Ce que le Shorinji Kempo vous apporte que le Kung Fu ne vous donnera pas</h3>
            <ul className="space-y-4">
              {[
                "Une méthode structurée et reconnue mondialement",
                "Self-défense réaliste, pas du spectacle",
                "Pas de risque de tomber sur une école \"fantaisiste\"",
                "La philosophie zen, pas le folklore",
                "Une progression claire (kyus et dans)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-gold shrink-0 mt-1" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
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
