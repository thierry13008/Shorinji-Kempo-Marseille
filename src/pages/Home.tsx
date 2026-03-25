import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, MapPin, Clock, Download, ChevronDown, Phone, Send, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20 grayscale" 
            src="https://picsum.photos/seed/dojo/1920/1080" 
            alt="Dojo background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 mb-6 border border-primary-gold/20 bg-primary-gold/5 text-primary-gold text-xs font-label uppercase tracking-widest rounded-full">
                Art Martial Traditionnel
              </span>
              <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight mb-8">
                Maîtrisez votre <span className="italic text-primary-gold">esprit</span>, forgez votre <span className="text-primary-container">corps</span>.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
                Découvrez le Shorinji Kempo à Marseille. Une discipline japonaise unique alliant self-défense efficace, méditation zen et philosophie de vie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="gold-gradient text-on-primary font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary-gold/10 flex items-center justify-center gap-2 group transition-all duration-300">
                  Réserver un cours gratuit
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="bg-white/5 text-on-surface border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all backdrop-blur-md">
                  Voir le planning
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 glass-card p-2">
                <img 
                  className="w-full aspect-[4/5] object-cover rounded-xl" 
                  src="https://i.ibb.co/39sdZqv0/gassho-rei.jpg" 
                  alt="Le Salut - Gassho Rei"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-low/60 backdrop-blur-md rounded-xl border border-white/10">
                  <p className="font-headline italic text-lg text-primary-gold">"Le Salut - Gassho Rei"</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">L'entrée dans la voie</p>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-gold/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-32 bg-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl text-white mb-4">Le Shorinji Kempo est fait pour vous</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Que vous soyez parent, débutant ou pratiquant confirmé, trouvez votre voie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "Section : Enfants & Ados (9-13 ans)",
                title: "L’école de la confiance pour votre enfant",
                desc: "Un cadre structurant pour grandir sereinement à Marseille 8ème.",
                img: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=800&auto=format&fit=crop",
                points: [
                  { label: "Confiance & Affirmation", text: "Gérer les conflits sans violence." },
                  { label: "Discipline Positive", text: "Respect de soi et d'autrui." }
                ]
              },
              {
                tag: "Section : Adultes Débutants",
                title: "Retrouvez l’équilibre : Votre bulle de décompression",
                desc: "Évacuez le stress et apprenez à vous défendre sans aucun prérequis.",
                img: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=800&auto=format&fit=crop",
                points: [
                  { label: "Zéro Complexe", text: "Adapté à votre condition physique." },
                  { label: "Self-Défense", text: "Techniques efficaces et réalistes." }
                ],
                featured: true
              },
              {
                tag: "Section : Pratiquants Confirmés",
                title: "Exigence Technique & Lignage Officiel (WSKO)",
                desc: "Donnez une nouvelle dimension à votre parcours martial.",
                img: "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=800&auto=format&fit=crop",
                points: [
                  { label: "Cursus Technique", text: "Équilibre parfait Goho/Juho." },
                  { label: "Grades Internationaux", text: "Reconnaissance WSKO (Japon)." }
                ]
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group p-8 rounded-2xl transition-all duration-500 flex flex-col border",
                  card.featured ? "bg-primary-gold/5 border-primary-gold/20 md:scale-105 shadow-2xl" : "glass-card border-white/5"
                )}
              >
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img src={card.img} alt={card.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow text-center">
                  <div className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{card.tag}</div>
                  <h3 className="font-headline text-xl text-white mb-4 leading-tight">{card.title}</h3>
                  <p className="text-on-surface-variant mb-6 text-sm italic">{card.desc}</p>
                  <ul className="space-y-4 mb-8 text-left">
                    {card.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-on-surface/80 text-[11px] leading-relaxed">
                        <CheckCircle className="text-primary-gold shrink-0" size={14} />
                        <span><strong>{p.label} :</strong> {p.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-primary-gold text-on-primary font-bold py-3.5 rounded-lg hover:brightness-110 transition-all text-[10px] uppercase tracking-widest mt-auto">
                  Essayer gratuitement
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="relative py-32 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-[0.2]" 
            src="https://picsum.photos/seed/planning/1920/1080" 
            alt="Dojo"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Calendrier des Sessions</span>
              <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">Planning du Dojo</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">Rejoignez l'élite du Budo au cœur de Marseille (13008).</p>
              <div className="bg-primary-gold/10 border border-primary-gold/20 px-6 py-4 rounded-xl inline-flex items-center gap-3">
                <MapPin className="text-primary-gold" size={20} />
                <span className="font-bold text-sm tracking-wide uppercase text-white">Dojo Saint-Giniez</span>
              </div>
            </div>

            <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { day: "Lundi", time: "20h00 — 21h30", cat: "Adultes", level: "Tous Niveaux", id: "01" },
                { day: "Mercredi", time: "19h30 — 21h00", cat: "Adultes", level: "Tous Niveaux", id: "02", featured: true },
                { day: "Vendredi", time: "20h15 — 21h45", cat: "Mixte", level: "Adultes & Enf", id: "03" }
              ].map((session, i) => (
                <div 
                  key={i}
                  className={cn(
                    "rounded-2xl p-8 transition-all duration-500 group border",
                    session.featured ? "bg-primary-gold/10 border-primary-gold/30 md:scale-105 shadow-2xl" : "glass-card border-white/10 hover:bg-white/10"
                  )}
                >
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <p className="text-primary-gold font-bold text-[10px] tracking-widest uppercase mb-1">Session {session.id}</p>
                      <h3 className="text-3xl font-headline text-white">{session.day}</h3>
                    </div>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center italic text-sm",
                      session.featured ? "bg-primary-gold text-on-primary font-bold" : "border border-white/20 text-white/40 group-hover:text-primary-gold"
                    )}>{session.id}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="text-primary-gold" size={16} />
                      <span className="text-white font-bold text-sm">{session.time}</span>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white font-medium mb-3">{session.cat}</p>
                      <span className="px-3 py-1 bg-white/10 text-primary-gold text-[10px] font-bold rounded-full uppercase tracking-tighter border border-primary-gold/20">
                        {session.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-4 text-white hover:text-primary-gold transition-colors group">
              <span className="h-[1px] w-12 bg-primary-gold/30 group-hover:w-20 transition-all"></span>
              <span className="text-xs font-bold uppercase tracking-widest">Télécharger le calendrier complet</span>
              <Download size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl text-white mb-4">Ce que disent nos pratiquants</h2>
            <p className="text-on-surface-variant">Des témoignages authentiques de notre communauté</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Thierry", role: "Papa de Gabriel G.", text: "Un vrai déclic pour la confiance de mon fils. Lucas (10 ans) était assez timide. Ce que j'apprécie au club, c'est ce mélange rare de discipline martiale et de bienveillance.", img: "https://picsum.photos/seed/p1/100/100" },
              { name: "Marc", role: "Pratiquant depuis 1 an", text: "Ma parenthèse de déconnexion après le travail. J'ai été immédiatement mis à l'aise : ici, pas de jugement sur la condition physique, on progresse à son rythme.", img: "https://picsum.photos/seed/p2/100/100", featured: true },
              { name: "Julien", role: "Ceinture Noire", text: "L'exigence technique et la reconnaissance internationale. La qualité de l'enseignement au dojo est exceptionnelle. Le fait que les grades soient reconnus par la WSKO au Japon est un gage de sérieux.", img: "https://picsum.photos/seed/p3/100/100" }
            ].map((t, i) => (
              <div key={i} className={cn(
                "p-10 rounded-2xl relative border shadow-xl",
                t.featured ? "bg-primary-gold/5 border-primary-gold/20" : "glass-card border-white/10"
              )}>
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.img} className="w-12 h-12 rounded-full border-2 border-primary-gold/20" alt={t.name} referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-xs text-primary-gold">{t.role}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed text-sm">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl text-white mb-4">Questions Fréquentes</h2>
            <p className="text-on-surface-variant">Tout ce qu'il faut savoir avant de franchir les portes du dojo.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="glass-card p-2 rounded-2xl">
              <img src="https://picsum.photos/seed/video/800/450" className="w-full aspect-video object-cover rounded-xl" alt="Video preview" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              {[
                { q: "À quel âge peut-on commencer ?", a: "Le Shorinji Kempo est accessible dès 6 ans. Nous proposons des cours adaptés pour les enfants, les adolescents et les adultes." },
                { q: "Faut-il être déjà sportif ?", a: "Absolument pas ! Notre enseignement est progressif. Vous développerez votre condition physique à votre rythme." },
                { q: "Est-ce dangereux ?", a: "Le Shorinji Kempo met l'accent sur le contrôle et la coopération. Les techniques sont pratiquées en toute sécurité." },
                { q: "Peut-on essayer gratuitement ?", a: "Oui ! Nous offrons 2 cours d'essai gratuits pour découvrir la pratique en toute tranquillité." }
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl overflow-hidden border border-white/5">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left text-white hover:text-primary-gold transition-colors"
                  >
                    <span className="font-medium">{i + 1}. {item.q}</span>
                    <ChevronDown className={cn("transition-transform duration-300", activeFaq === i && "rotate-180")} size={20} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: activeFaq === i ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl text-white mb-4">Prêt à commencer ?</h2>
            <p className="text-slate-300 text-lg">Réservez vos 2 cours d'essai gratuits dès maintenant</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="glass-card p-10 rounded-3xl">
                <h3 className="font-headline text-2xl text-white mb-10">Informations de Contact</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <MapPin className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Adresse</h4>
                      <p className="text-slate-400 text-sm">Dojo Principal, Avenue du Prado, 13008 Marseille</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <Phone className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Téléphone</h4>
                      <p className="text-slate-400 text-sm">06 12 34 56 78</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-gold/5 border border-primary-gold/20 rounded-3xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="text-primary-gold" size={24} />
                  <h4 className="text-white font-bold uppercase tracking-widest">Offre Découverte</h4>
                </div>
                <ul className="space-y-4 text-slate-300">
                  <li>• 2 cours d'essai gratuits</li>
                  <li>• Prêt du matériel pour l'essai</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center justify-center border-primary-gold/20">
              <div className="w-20 h-20 rounded-full bg-primary-gold/10 flex items-center justify-center mb-8 border border-primary-gold/30">
                <Sparkles className="text-primary-gold w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-3xl font-headline text-white mb-6 italic">Hub d'Engagement Intelligent</h3>
              <p className="text-on-surface-variant mb-10 max-w-md">
                Découvrez notre nouvelle interface de contact assistée par IA. 
                Analyse d'intention, réponse instantanée et connexion directe avec nos experts.
              </p>
              <Link 
                to="/contact"
                className="w-full gold-gradient text-on-primary font-bold py-5 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl shadow-primary-gold/20"
              >
                Accéder au Hub <ArrowRight size={20} />
              </Link>
              <div className="mt-8 flex items-center gap-4 text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> IA Native</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> Temps Réel</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
