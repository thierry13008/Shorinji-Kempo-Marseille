import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Shield, Heart, Users, Globe, Award, X, Info, ExternalLink, MapPin, Clock, Zap, ArrowRight } from 'lucide-react';

export default function Encyclopedia() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const sections = [
    {
      id: 'histoire',
      title: 'Histoire',
      icon: Book,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 p-8 glass-card ki-aura-dark border-l-4 border-l-primary-gold">
              <h3 className="text-primary-gold font-label text-xs tracking-widest uppercase">Les Origines (1947)</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Fondé par <strong>Doshin So</strong> en 1947 au Japon, le Shorinji Kempo est né dans le chaos de l'après-guerre. Inspiré par les techniques anciennes du monastère de Shaolin, il fut créé comme un système éducatif pour reconstruire la nation.
              </p>
            </div>
            <div className="space-y-4 p-8 glass-card ki-aura-dark border-l-4 border-l-primary-gold">
              <h3 className="text-primary-gold font-label text-xs tracking-widest uppercase">Philosophie Fondatrice</h3>
              <p className="text-slate-300 leading-relaxed font-light italic">"La moitié pour la maîtrise de soi, la moitié pour le bien d'autrui"</p>
              <p className="text-slate-400 text-sm leading-relaxed">(Jiko kakuritsu - Jita kyōraku). Ce principe souligne que le développement personnel est inséparable de la contribution à la société.</p>
            </div>
          </div>
          <div className="p-8 glass-card ki-aura-dark border-l-4 border-l-primary-gold/30">
            <p className="text-slate-300 text-sm leading-relaxed">
              Doshin So a voyagé en Chine avant la guerre, où il a étudié diverses formes de Kempo. De retour au Japon, il a synthétisé ses connaissances pour créer une discipline qui n'est pas seulement un art de combat, mais une méthode de formation du caractère.
            </p>
          </div>
          <div className="p-8 glass-card ki-aura-dark border-l-4 border-l-primary-gold">
            <h3 className="text-primary-gold font-label text-xs tracking-widest uppercase mb-4">L'arrivée en France (1972)</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              C'est en France que choisit de s'installer <strong>Aosaka Sensei</strong> en 1972, mandaté par le fondateur Doshin So pour développer le Shorinji Kempo en Europe.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Descendant direct d’une famille de samurai, il étudie le Budo très jeune en pratiquant notamment le Judo. Il devient professeur de Shorinji Kempo en région parisienne à l'âge de 24 ans et est maintenant <strong>9ᵉ Dan Dai-Hanshi</strong> et directeur technique de la Fédération Française de Shorinji Kempo (FFSK ou France Shorinji Kempo) et de l'Europe au sein de la World Shorinji Kempo Organization (WSKO).
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'techniques',
      title: 'Les Techniques',
      icon: Shield,
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Goho (剛法)", icon: Shield, desc: "Les techniques dures incluent les coups de poing, les coups de pied, les blocages et les esquives. Elles privilégient l'efficacité et la rapidité." },
              { title: "Juho (柔法)", icon: Users, desc: "Les techniques souples comprennent les clés articulaires, les projections et les immobilisations. Elles exploitent la force de l'adversaire." },
              { title: "Seiho (整法)", icon: Heart, desc: "Le Seiho regroupe les techniques de massage thérapeutique et de réanimation. Ces connaissances permettent de restaurer l'énergie vitale." }
            ].map((tech, i) => (
              <div key={i} className="glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold hover:bg-primary-gold/5 transition-all duration-300">
                <tech.icon className="text-primary-gold mb-6" size={32} />
                <h3 className="font-headline text-2xl mb-4 text-primary-gold">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary-gold/5 p-8 rounded-2xl border-l-4 border-l-primary-gold">
            <h4 className="text-primary-gold font-bold mb-4 uppercase tracking-widest text-xs">Le principe de l'unité</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Le Shorinji Kempo enseigne que Goho et Juho sont comme les deux faces d'une même pièce. Un pratiquant complet doit maîtriser les deux aspects pour répondre de manière appropriée à toute situation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'philosophie',
      title: 'Philosophie',
      icon: Heart,
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Ken Zen Ichinyo", sub: "拳禅一如", text: "L'unité du poing et du zen. Le Shorinji Kempo unit la pratique physique à la méditation zen." },
              { title: "Riki Ai Funi", sub: "力愛不二", text: "La force et l'amour sont indivisibles. La force doit être guidée par la compassion." },
              { title: "Shushu Koju", sub: "守主攻従", text: "La défense est primordiale. On ne frappe jamais en premier, mais on se défend avec détermination." },
              { title: "Fusatsu Katsujin", sub: "不殺活人", text: "La technique sert à s’éveiller l’esprit, et non à tuer quelqu’un. On ne cherche pas à briser l’adversaire." },
              { title: "Goju Ittai", sub: "剛柔一体", text: "Goho (techniques dures) et Juho (techniques souples) sont inséparables et se mêlent ensemble." },
              { title: "Kumite Shutai", sub: "組手主体", text: "S’entraîner avec son partenaire et non contre lui pour s’élever ensemble." }
            ].map((val, i) => (
              <div key={i} className="glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold hover:bg-primary-gold/5 transition-all duration-300">
                <h3 className="font-headline text-xl text-primary-gold mb-2">{val.title}</h3>
                <p className="text-[10px] tracking-widest text-slate-500 uppercase mb-4">{val.sub}</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-slate-400 text-center italic">
              "Vivre à moitié pour soi-même et à moitié pour les autres" est le précepte central qui guide chaque action du pratiquant.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'grades',
      title: 'Grades',
      icon: Award,
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-start glass-card ki-aura-dark p-8 border-l-4 border-l-white/30">
              <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-2">Les Kyu (級)</h3>
                <p className="text-slate-400 font-light leading-relaxed">Le système de grades débute avec la ceinture blanche (6e kyu) et progresse vers la ceinture marron (1er kyu).</p>
              </div>
            </div>
            <div className="flex gap-6 items-start glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold">
              <div className="bg-primary-gold/20 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border border-primary-gold/20">
                <Award className="text-primary-gold" size={24} />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-2 text-primary-gold">Les Dan (段)</h3>
                <p className="text-slate-400 font-light leading-relaxed">Les ceintures noires vont du 1er au 9e Dan. Les trois premiers Dan représentent la maîtrise technique.</p>
              </div>
            </div>
          </div>
          <div className="glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold/30">
            <h4 className="text-white font-bold mb-2">Hokai (Grades de Prêtrise)</h4>
            <p className="text-slate-400 text-sm">
              En plus des grades techniques, le Shorinji Kempo possède un système de grades philosophiques (Doin) reflétant la compréhension spirituelle du pratiquant.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'deroulement',
      title: 'Déroulement de cours',
      icon: Clock,
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Chinkon", sub: "Méditation", icon: Heart, desc: "Un moment de méditation avec respiration Chôsoku pour se recentrer, apaiser l'esprit et améliorer la concentration." },
              { title: "Taisô", sub: "Échauffement", icon: Zap, desc: "Un échauffement complet pour préparer le corps, activer les articulations et démarrer la séance dans de bonnes conditions." },
              { title: "Kihon", sub: "Fondamentaux", icon: Shield, desc: "Le travail des fondamentaux en Goho, avec les techniques de pieds et de poings qui construisent la base du progrès." },
              { title: "Zenshin", sub: "Déplacements", icon: Globe, desc: "Les déplacements essentiels pour développer fluidité, stabilité et précision dans l'action." },
              { title: "Ukemi", sub: "Chutes", icon: Award, desc: "L'apprentissage des chutes pour pratiquer avec confiance et évoluer en toute sécurité." },
              { title: "Kata", sub: "Enchaînements", icon: Book, desc: "Des enchaînements codifiés de techniques de combat pour renforcer la coordination, le rythme et la maîtrise." },
              { title: "Randori", sub: "Dynamique", icon: Users, desc: "Des exercices dynamiques à deux ou trois pour travailler les attaques, les défenses, les esquives et les contre-attaques." }
            ].map((step, i) => (
              <div key={i} className="glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold group hover:bg-primary-gold/5 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20 group-hover:scale-110 transition-transform">
                    <step.icon size={24} className="text-primary-gold" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-headline text-white">{step.title}</h3>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-primary-gold/60 font-bold">{step.sub}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold hover:bg-primary-gold/5 transition-all duration-300">
              <h3 className="text-xl font-headline text-white mb-4">Hokei</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Un travail à deux sur les techniques dures en Goho et les techniques souples en Jûhô, avec saisies, projections, dégagements et immobilisations.
              </p>
            </div>
            <div className="glass-card ki-aura-dark p-8 border-l-4 border-l-primary-gold hover:bg-primary-gold/5 transition-all duration-300">
              <h3 className="text-xl font-headline text-white mb-4">Embu</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Des chorégraphies de combat réservées aux pratiquants expérimentés, pour allier technique, précision et intensité.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'organisation',
      title: 'Organisation',
      icon: Globe,
      content: (
        <div className="space-y-8">
          <a 
            href="https://www.shorinjikempo.or.jp/wsko/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-8 glass-card ki-aura-dark border-l-4 border-l-primary-gold hover:bg-primary-gold/5 transition-all group cursor-pointer block"
          >
            <Globe className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform" size={48} />
            <div>
              <h3 className="text-2xl font-headline mb-2 flex items-center gap-2">
                WSKO
                <ExternalLink size={18} className="text-primary-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400">World Shorinji Kempo Organization. Présente dans plus de 30 pays, elle assure la cohérence de l'enseignement mondial.</p>
            </div>
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="https://shorinjikempo.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 glass-card ki-aura-dark border-l-4 border-l-primary-gold hover:bg-primary-gold/5 transition-all group cursor-pointer block"
            >
              <Shield className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform mt-1" size={24} />
              <div>
                <h4 className="text-primary-gold font-bold mb-2 flex items-center gap-2">
                  France Shorinji Kempo
                  <ExternalLink size={14} className="text-primary-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-slate-400 text-sm">La fédération nationale qui regroupe tous les clubs officiels en France et organise les stages nationaux.</p>
              </div>
            </a>
            <div 
              className="flex items-start gap-4 p-6 glass-card ki-aura-dark border-l-4 border-l-primary-gold/30 hover:bg-primary-gold/5 transition-all group cursor-default"
            >
              <MapPin className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform mt-1" size={24} />
              <div>
                <h4 className="text-primary-gold font-bold mb-2">Le Dojo de Marseille</h4>
                <p className="text-slate-400 text-sm">Affilié officiellement à la FFSK et à la WSKO, garantissant un enseignement conforme aux standards nationaux et internationaux.</p>
              </div>
            </div>
          </div>
          <div className="p-8 glass-card ki-aura-dark border-l-4 border-l-primary-gold/30 hover:bg-primary-gold/5 transition-all">
            <p className="text-slate-400 text-sm leading-relaxed">
              En France, le Shorinji Kempo est affilié à la Fédération Française de Karaté (FFK) en tant que fédération délégataire du Ministère des sports pour la reconnaissance des grades.
            </p>
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="pt-32 pb-20 relative">
      {/* Background Hero Fixed */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none">
        <img 
          className="w-full h-full object-cover opacity-60 contrast-110" 
          src="https://i.ibb.co/67dyVgQm/background-encyclopedie-compress.png" 
          alt="Illustration historique du Shorinji Kempo - Encyclopédie"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
      </div>

      <header className="relative h-[500px] flex items-end px-6 md:px-24 pb-16 z-10">
        <div className="relative z-10 max-w-4xl">
          <span className="text-primary-gold font-label tracking-[0.3em] uppercase text-xs mb-4 block">Archive du Savoir</span>
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight mb-6">
            Encyclopédie du <br/><span className="italic text-primary-gold">Shorinji Kempo</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            Un voyage à travers l'histoire, la technique et la philosophie d'un art martial unique conçu pour transformer l'individu et la société.
          </p>
          <a 
            href="/#contact"
            className="cta-button inline-flex items-center justify-center gap-3"
          >
            Contactez-nous
            <ArrowRight size={20} />
          </a>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
        <aside className="lg:col-span-3 space-y-8">
          <div className="sticky top-32">
            <h3 className="text-primary-gold font-label text-xs tracking-[0.4em] uppercase mb-8">Sections</h3>
            <ul className="space-y-6">
              {sections.map((section) => (
                <li key={section.id}>
                  <button 
                    onClick={() => setActiveModal(section.id)}
                    className="text-white/90 hover:text-primary-gold transition-all duration-300 text-lg font-medium flex items-center gap-4 group w-full text-left hover:pl-2"
                  >
                    <span className="w-1 h-4 bg-white/20 group-hover:bg-primary-gold transition-colors rounded-full"></span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-32 border border-white/10 rounded-[48px] p-10 md:p-20 bg-surface-low/20 shadow-2xl backdrop-blur-sm">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <div className="flex items-center gap-6 mb-12 group">
                <div className="w-12 h-12 rounded-2xl bg-primary-gold/5 border border-primary-gold/20 flex items-center justify-center group-hover:bg-primary-gold/10 transition-colors">
                  <section.icon className="text-primary-gold" size={24} />
                </div>
                <h2 className="font-headline text-4xl md:text-5xl text-white">{section.title}</h2>
              </div>
              {section.content}
            </section>
          ))}
        </main>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-surface/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-surface-low border border-white/10 rounded-[40px] shadow-2xl p-8 md:p-16 scrollbar-hide"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>

              <div className="mb-12">
                <div className="flex items-center gap-4 text-primary-gold mb-4">
                  {(() => {
                    const section = sections.find(s => s.id === activeModal);
                    const Icon = section?.icon || Info;
                    return <Icon size={32} />;
                  })()}
                  <span className="font-label tracking-[0.3em] uppercase text-xs">Détails de la Section</span>
                </div>
                <h2 className="font-headline text-4xl md:text-6xl text-white">
                  {sections.find(s => s.id === activeModal)?.title}
                </h2>
              </div>

              <div className="relative">
                {sections.find(s => s.id === activeModal)?.content}
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex justify-center">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-10 py-4 bg-primary-gold text-black font-bold rounded-2xl hover:bg-bg-main hover:text-primary-gold transition-all uppercase tracking-widest text-xs"
                >
                  Fermer l'archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
