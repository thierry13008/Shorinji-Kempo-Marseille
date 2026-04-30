import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/src/components/ScrollReveal';
import Breadcrumbs from '@/src/components/Breadcrumbs';

export default function ShorinjiKempoVsKarate() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://shorinji-kempo-marseille.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Encyclopédie", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie" },
      { "@type": "ListItem", "position": 3, "name": "Shorinji Kempo vs Karaté", "item": "https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-karate" }
    ]
  };

  return (
    <main className="pt-32 bg-surface min-h-screen text-ivory-silk selection:bg-primary-gold/30">
      <Helmet>
        <title>Shorinji Kempo vs Karaté : Lequel est fait pour vous ? | Marseille</title>
        <meta name="description" content="Shorinji Kempo vs Karaté : découvrez pourquoi le Shorinji Kempo est le choix des adultes qui cherchent la self-défense sans compétition. Essayez gratuitement à Marseille Saint-Giniez." />
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/encyclopedie/shorinji-kempo-vs-karate" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-20 pb-32">
        <Breadcrumbs items={[{ name: "Encyclopédie", path: "/encyclopedia" }, { name: "vs Karaté", path: "/encyclopedie/shorinji-kempo-vs-karate" }]} />
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight italic tracking-tight">
            Shorinji Kempo vs Karaté : <span className="text-primary-gold">Lequel est fait pour vous ?</span>
          </h1>
        </ScrollReveal>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white border-l-4 border-primary-gold pl-6 italic">
              Vous hésitez entre Shorinji Kempo et Karaté ? Lisez ceci.
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Les deux sont japonais. Les deux font travailler le corps et l'esprit. Mais la ressemblance s'arrête là. L'un vous prépare à la compétition. L'autre vous prépare à la vie.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Karaté : performer sous le regard des autres à Marseille</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              En Karaté, le but est clair : maîtriser des techniques pour marquer des points. Les katas sont évalués. Les kumités sont jugés. Il y a un gagnant et un perdant. C'est excellent pour la confiance et la discipline. Mais tout le monde n'a pas envie de se mesurer aux autres.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le Shorinji Kempo : se dépasser sans se comparer à Saint-Giniez</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              Ici, pas de médailles. Pas de podium. Votre seul adversaire, c'est vous-même. Le Shorinji Kempo part d'un principe simple : la vraie force, c'est de savoir se protéger ET protéger les autres. Vous apprenez des techniques redoutables (frappes, clés, projections). Mais vous apprenez surtout à rester calme, à désamorcer un conflit. C'est de la self-défense adulte. Pas de la bagarre.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white/5 p-10 rounded-[2.5rem] border border-primary-gold/20 glass-card ki-aura-dark">
            <h3 className="text-2xl font-bold text-primary-gold mb-8 italic">Ce que le Shorinji Kempo vous apporte que le Karaté ne vous donnera pas</h3>
            <ul className="space-y-4">
              {[
                "Zéro compétition — pas de stress, pas de jugement, on progresse à son rythme",
                "100% self-défense — apprenez à vous protéger dans la rue, pas sur un tatami de compétition",
                "Travail à deux, pas l'un contre l'autre — on progresse ensemble, les débutants sont portés par les avancés",
                "Philosophie zen — méditation, respiration, sérénité. Vous repartez apaisé",
                "Accessible à tous — femme, homme, 25 ou 55 ans, sportif ou non. Le Shorinji Kempo s'adapte à vous"
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
            <p className="text-xl leading-relaxed opacity-90 mt-6">
              C'est vendredi soir, 20h. Vous entrez au dojo. Le calme. L'odeur du bois. Les saluts échangés avec bienveillance. Pendant 1h30, vous oubliez tout. Vous travaillez votre corps. Vous canalisez votre mental. Vous repartez vidé du stress, plein d'énergie. C'est ça, le Shorinji Kempo.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white italic">Le seul vrai perdant, c'est celui qui n'essaie pas</h2>
            <p className="text-xl leading-relaxed opacity-90 mt-6 mb-12">
              Premier cours gratuit. Aucun engagement. Équipement prêté. Juste vous, le tatami, et la découverte de ce que votre corps et votre esprit peuvent accomplir ensemble.
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
