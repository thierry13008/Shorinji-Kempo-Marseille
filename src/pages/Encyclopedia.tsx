import { motion } from 'motion/react';
import { Book, Shield, Heart, Users, Globe, Award } from 'lucide-react';

export default function Encyclopedia() {
  return (
    <div className="pt-32 pb-20">
      <header className="relative h-[500px] flex items-end px-6 md:px-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30" 
            src="https://picsum.photos/seed/history/1920/1080" 
            alt="History"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-primary-gold font-label tracking-[0.3em] uppercase text-xs mb-4 block">Archive du Savoir</span>
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight mb-6">
            Encyclopédie du <br/><span className="italic text-primary-gold">Shorinji Kempo</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Un voyage à travers l'histoire, la technique et la philosophie d'un art martial unique conçu pour transformer l'individu et la société.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
        <aside className="lg:col-span-3 space-y-8">
          <div className="sticky top-32">
            <h3 className="text-primary-gold font-label text-[10px] tracking-[0.4em] uppercase mb-6 opacity-80">Sections</h3>
            <ul className="space-y-4">
              {['Histoire', 'Les Techniques', 'Philosophie', 'Grades', 'Organisation'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary-gold transition-colors text-sm font-medium flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary-gold transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-32">
          {/* History */}
          <section id="histoire">
            <h2 className="font-headline text-4xl mb-8">Histoire du <span className="text-primary-gold italic">Shorinji Kempo</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-primary-gold font-label text-xs tracking-widest uppercase">Les Origines (1947)</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  Fondé par <strong>Doshin So</strong> en 1947 au Japon, le Shorinji Kempo est né dans le chaos de l'après-guerre. Inspiré par les techniques anciennes du monastère de Shaolin, il fut créé comme un système éducatif pour reconstruire la nation.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary-gold font-label text-xs tracking-widest uppercase">Philosophie Fondatrice</h3>
                <p className="text-slate-300 leading-relaxed font-light italic">"La moitié pour la maîtrise de soi, la moitié pour le bien d'autrui"</p>
                <p className="text-slate-400 text-sm leading-relaxed">(Jiko kakuritsu - Jita kyōraku). Ce principe souligne que le développement personnel est inséparable de la contribution à la société.</p>
              </div>
            </div>
          </section>

          {/* Techniques */}
          <section id="techniques">
            <h2 className="font-headline text-4xl mb-12 border-b border-primary-gold/20 pb-4">Les Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Goho (剛法)", icon: Shield, desc: "Les techniques dures incluent les coups de poing, les coups de pied, les blocages et les esquives. Elles privilégient l'efficacité et la rapidité." },
                { title: "Juho (柔法)", icon: Users, desc: "Les techniques souples comprennent les clés articulaires, les projections et les immobilisations. Elles exploitent la force de l'adversaire." },
                { title: "Seiho (整法)", icon: Heart, desc: "Le Seiho regroupe les techniques de massage thérapeutique et de réanimation. Ces connaissances permettent de restaurer l'énergie vitale." }
              ].map((tech, i) => (
                <div key={i} className="bg-surface-high p-8 rounded-xl border border-white/5">
                  <tech.icon className="text-primary-gold mb-6" size={32} />
                  <h3 className="font-headline text-2xl mb-4 text-primary-gold">{tech.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section id="philosophie">
            <div className="bg-primary-gold/5 border border-primary-gold/20 rounded-2xl p-12">
              <h2 className="font-headline text-4xl mb-12 text-center">Philosophie et Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: "Ken Zen Ichinyo", sub: "拳禅一如", text: "L'unité du poing et du zen. Le Shorinji Kempo unit la pratique physique à la méditation zen." },
                  { title: "Riki Ai Funi", sub: "力愛不二", text: "La force et l'amour sont indivisibles. La force doit être guidée par la compassion." },
                  { title: "Shushu Koju", sub: "守主攻従", text: "La défense est primordiale. On ne frappe jamais en premier, mais on se défend avec détermination." }
                ].map((val, i) => (
                  <div key={i} className="text-center space-y-4">
                    <h3 className="font-headline text-xl text-primary-gold">{val.title}</h3>
                    <p className="text-[10px] tracking-widest text-slate-500 uppercase">{val.sub}</p>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">{val.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Grades */}
          <section id="grades">
            <h2 className="font-headline text-4xl mb-12">Structure et <span className="text-primary-gold italic">Grades</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6 items-start">
                <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-2xl mb-2">Les Kyu (級)</h3>
                  <p className="text-slate-400 font-light leading-relaxed">Le système de grades débute avec la ceinture blanche (6e kyu) et progresse vers la ceinture marron (1er kyu).</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-primary-gold/20 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border border-primary-gold/20">
                  <Award className="text-primary-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-2xl mb-2 text-primary-gold">Les Dan (段)</h3>
                  <p className="text-slate-400 font-light leading-relaxed">Les ceintures noires vont du 1er au 9e Dan. Les trois premiers Dan représentent la maîtrise technique.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
