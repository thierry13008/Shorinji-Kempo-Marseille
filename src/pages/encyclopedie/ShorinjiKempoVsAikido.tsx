import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/src/components/ScrollReveal';
import Breadcrumbs from '@/src/components/Breadcrumbs';

export default function ShorinjiKempoVsAikido() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://shorinji-kempo-marseille.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Encyclopédie", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie" },
      { "@type": "ListItem", "position": 3, "name": "Shorinji Kempo vs Aïkido", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-aikido" }
    ]
  };

  return (
    <main className="pt-32 bg-surface min-h-screen text-ivory-silk selection:bg-primary-gold/30">
      <Helmet>
        <title>Shorinji Kempo vs Aïkido : Lequel choisir ? | Marseille</title>
        <meta name="description" content="Shorinji Kempo vs Aïkido : deux arts martiaux non-compétitifs, mais lequel est le plus efficace en self-défense ? Essayez gratuitement à Marseille Saint-Giniez." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-aikido" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-20 pb-32">
        <Breadcrumbs items={[{ name: "Encyclopédie", path: "/encyclopedia" }, { name: "vs Aïkido", path: "/encyclopedie/shorinji-kempo-vs-aikido" }]} />
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight italic tracking-tight">
            Shorinji Kempo vs Aïkido : <span className="text-primary-gold">Lequel est fait pour vous ?</span>
          </h1>
        </ScrollReveal>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white border-l-4 border-primary-gold pl-6 italic">
              Vous hésitez entre Shorinji Kempo et Aïkido à Marseille ?
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Deux arts martiaux japonais non-compétitifs, basés sur la self-défense et la philosophie. Pourtant, leur approche du combat est radicalement différente.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">L'Aïkido : la voie de l'harmonie... parfois trop théorique</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Fondé par Morihei Ueshiba, l'Aïkido utilise la force de l'adversaire contre lui-même. Des mouvements circulaires sublimes, une philosophie de paix. Mais en situation réelle, l'Aïkido est souvent critiqué pour son manque d'efficacité : pas de frappes réelles, des attaques codifiées, peu de résistance.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Shorinji Kempo : l'harmonie, oui. L'efficacité, toujours à Saint-Giniez.</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Le Shorinji Kempo partage les valeurs de l'Aïkido : non-violence, respect, développement spirituel. Mais il y ajoute un réalisme martial : les frappes sont réelles, les défenses sont testées, les techniques fonctionnent même sous pression.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white/5 p-10 rounded-[2.5rem] border border-primary-gold/20 glass-card ki-aura-dark">
            <h3 className="text-2xl font-bold text-primary-gold mb-8 italic">Ce que le Shorinji Kempo vous apporte que l'Aïkido ne vous donnera pas</h3>
            <ul className="space-y-4">
              {[
                "Des frappes réelles (Goho) en plus des clés et projections (Juho)",
                "Une self-défense testée et réaliste",
                "Un apprentissage progressif — pas besoin de 10 ans pour être efficace",
                "Des partenaires qui résistent vraiment — pas de compliance",
                "La même philosophie de paix, avec une efficacité martiale"
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
