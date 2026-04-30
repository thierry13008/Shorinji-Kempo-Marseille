import { Sparkles, Download } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ScrollReveal from '@/src/components/ScrollReveal';

const TESTIMONIALS = [
  { name: "Samuel F", role: "Débutant", text: "Je n'avais jamais fait d'arts martiaux, et j'ai adoré dès la première séance. L'accueil est incroyable et l'ambiance est vraiment bienveillante.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" },
  { name: "Laura P", role: "Pratiquante (1 an)", text: "C'est devenu ma bulle d'oxygène. J'évacue tout le stress de la semaine et je repars avec un mental d'acier. Une expérience vraiment immersive.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop", featured: true },
  { name: "Thierry G", role: "Parent d'élève", text: "Mon fils a gagné une confiance folle en quelques mois. Les instructeurs sont pédagogues et passionnés. Je recommande à 100%.", img: "https://i.ibb.co/MxkgHT8H/titi.jpg" }
];

export default function TestimonialsSection() {
  return (
    <section className="py-48 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">La Voix du Dojo</span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-6">Ils ont franchi le pas</h2>
          <p className="text-slate-300 text-xl font-medium">Rejoignez une communauté bienveillante et motivée.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div
                className="relative pt-20 pb-12 px-8 rounded-[40px] border-l-4 transition-all duration-700 h-full flex flex-col items-center text-center group overflow-visible bg-[#1A243A]/10 backdrop-blur-[16px] border-white/10 border-l-primary-gold shadow-[0_40px_80px_rgba(0,0,0,0.4)] ki-aura-dark hover:-translate-y-3 hover:scale-[1.02]"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 text-primary-gold" icon-id="sparkle-icon">
                  <Sparkles size={48} />
                </div>

                {/* Overlapping Photo with Floating Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="relative animate-float">
                    <img 
                      src={t.img} 
                      className={cn(
                        "w-28 h-28 rounded-full object-cover border-4 shadow-2xl transition-transform duration-700 group-hover:scale-105",
                        t.featured ? "border-primary-gold" : "border-white/20"
                      )} 
                      alt={t.name} 
                      referrerPolicy="no-referrer" 
                      width={112}
                      height={112}
                      loading="lazy"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary-gold text-on-primary rounded-full p-2 shadow-xl border-2 border-surface">
                      <Sparkles size={16} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="mb-8 relative z-10">
                  <p className="font-headline font-bold text-2xl mb-2 tracking-tight text-white">
                    {t.name}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-px w-4 bg-primary-gold/50"></span>
                    <p className="text-primary-gold text-xs uppercase tracking-[0.2em] font-black">{t.role}</p>
                    <span className="h-px w-4 bg-primary-gold/50"></span>
                  </div>
                </div>

                <p className="italic leading-relaxed text-xl font-medium flex-grow relative z-10 px-2 text-slate-100">
                  <span className="text-primary-gold/40 text-4xl font-serif absolute -top-4 -left-2">"</span>
                  {t.text}
                  <span className="text-primary-gold/40 text-4xl font-serif absolute -bottom-8 -right-2">"</span>
                </p>

                <div className="mt-10 flex justify-center gap-1.5 relative z-10">
                  {[...Array(5)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="reveal-scale"
                      style={{ transitionDelay: `${0.5 + (starIndex * 0.1)}s` }}
                    >
                      <Sparkles 
                        size={14} 
                        className="text-primary-gold" 
                        fill="currentColor" 
                      />
                    </div>
                  ))}
                </div>

                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[40px] overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-gold/20 blur-[80px]"></div>
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-gold/10 blur-[80px]"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center">
                <a 
                  href="/#contact"
                  className="bg-primary-gold text-black hover:bg-bg-main hover:text-primary-gold inline-flex items-center justify-center gap-3 text-lg px-12 py-6 font-bold rounded-2xl transition-all duration-300 uppercase tracking-widest shadow-xl shadow-primary-gold/20 hover:scale-105 active:scale-95"
                >
                  Rejoignez la communauté
                </a>
                <div className="mt-6 flex flex-col items-center gap-2">
                  <p className="text-slate-300 text-sm font-bold uppercase tracking-widest">Sans engagement – accessible à tous</p>
                  <div className="flex items-center gap-4 text-[10px] text-primary-gold/80 uppercase tracking-[0.2em] font-bold">
                    <span>Premier cours offert</span>
                    <span className="w-1 h-1 rounded-full bg-primary-gold/30"></span>
                    <span>Équipement prêté</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://drive.google.com/file/d/1vnFGVh97khWmP9wlkZFw5kCni7uZTwxB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-primary-gold transition-colors group lg:[text-shadow:none] [text-shadow:0_2px_10px_rgba(0,0,0,1)]"
              >
                <span className="h-[1px] w-8 bg-primary-gold/30 group-hover:w-16 transition-all"></span>
                <span className="text-xs font-bold uppercase tracking-widest">CALENDRIER DES EVENEMENTS</span>
                <Download size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
