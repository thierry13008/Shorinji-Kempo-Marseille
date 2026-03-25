import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, MapPin, Clock, Download, ChevronDown, Phone, Send, Sparkles, Mail, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementHub from '@/src/components/EngagementHub';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isHubOpen, setIsHubOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20 grayscale" 
            src="https://i.ibb.co/84x3GJHv/fond-header.png" 
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
                title: "L’école de la confiance pour votre enfant à Saint-Giniez",
                desc: "Offrez-lui bien plus qu’un sport : un cadre structurant pour grandir sereinement à Marseille 8ème.",
                img: "https://i.ibb.co/8L2sN6qz/enfants.png",
                points: [
                  { label: "Confiance & Affirmation", text: "Des outils concrets pour gérer les conflits sans violence et s'affirmer face aux défis du collège." },
                  { label: "Discipline Positive", text: "Un cadre martial bienveillant qui enseigne le respect des règles, de soi et d'autrui." },
                  { label: "Réussite Scolaire", text: "Améliore la concentration et la gestion des émotions grâce à la respiration et à l'effort physique." },
                  { label: "Proximité & Sécurité", text: "Un dojo familial situé à deux pas des écoles du quartier (Prado/Michelet), encadré par des instructeurs certifiés." }
                ]
              },
              {
                tag: "Section : Adultes Débutants",
                title: "Retrouvez l’équilibre : Votre bulle de décompression à Marseille",
                desc: "Évacuez le stress de la journée et apprenez à vous défendre dans une ambiance 100% bienveillante, sans aucun prérequis.",
                img: "https://i.ibb.co/tpbN1KW4/image-debutant.png",
                points: [
                  { label: "Zéro Complexe", text: "Que vous soyez sportif ou non, nous adaptons chaque séance à votre condition physique actuelle." },
                  { label: "Self-Défense & Sérénité", text: "Apprenez des techniques efficaces et réalistes pour vous sentir plus en sécurité au quotidien dans la cité phocéenne." },
                  { label: "Santé Martiale", text: "Un travail complet sur la souplesse, la posture et l'énergie pour recharger vos batteries après le travail." },
                  { label: "Accès Facilité", text: "Situé à Saint-Giniez (13008), notre dojo est le point de chute idéal pour les actifs du secteur Prado / Euroméditerranée." }
                ],
                featured: true
              },
              {
                tag: "Section : Pratiquants Confirmés",
                title: "Exigence Technique & Lignage Officiel (WSKO)",
                desc: "Donnez une nouvelle dimension à votre parcours martial au sein d'une structure reconnue mondialement.",
                img: "https://i.ibb.co/yc6vzy0T/image-pratiquant-confirm.png",
                points: [
                  { label: "Cursus Technique Complet", text: "Maîtrisez l'équilibre parfait entre Goho (percussions) et Juho (clés et projections) pour une efficacité totale." },
                  { label: "Grades Internationaux", text: "Pratiquez dans un club affilié à la Fédération Française et à la WSKO (Japon), garantissant la reconnaissance de votre progression." },
                  { label: "Philosophie en Action", text: "Approfondissez le Kongo Zen et le Seiho (restauration du corps) pour unifier l'esprit et la technique." },
                  { label: "Dynamique de Groupe", text: "Un cadre rigoureux et passionné pour préparer vos hauts grades et perfectionner votre art." }
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
            src="https://i.ibb.co/SwqgBGQK/fond-planing.png" 
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
              { name: "Thierry", role: "Papa de Gabriel G.", text: "Un vrai déclic pour la confiance de mon fils. Nous cherchions une activité pour Lucas (10 ans) qui était assez timide et avait du mal à s'imposer à l'école. Ce que j'apprécie au club de Saint-Giniez, c'est ce mélange rare de discipline martiale et de bienveillance. En un trimestre, il a gagné une assurance incroyable et il est beaucoup plus serein dans ses relations avec les autres. C'est rassurant de savoir qu'il apprend à se défendre tout en cultivant le respect. Un pilier éducatif précieux dans le 8ème !", img: "https://picsum.photos/seed/p1/100/100" },
              { name: "Marc", role: "Pratiquant depuis 1 an", text: "À 42 ans, je n'avais pas fait de sport depuis des années et j'appréhendais de pousser la porte d'un dojo à Marseille. J'ai été immédiatement mis à l'aise : ici, pas de jugement sur la condition physique, on progresse à son rythme. C'est devenu ma véritable soupape de sécurité pour évacuer le stress de la journée. Je repars des cours avec une énergie physique et mentale que je n'avais plus. Un équilibre parfait trouvé en plein cœur de Saint-Giniez.", img: "https://picsum.photos/seed/p2/100/100", featured: true },
              { name: "Julien", role: "Ceinture Noire", text: "Après plusieurs années dans d'autres styles, je cherchais une pratique plus complète, alliant percussions et techniques de clés (Juho). La qualité de l'enseignement au dojo de Saint-Giniez est exceptionnelle. Mes acquis ont été immédiatement valorisés et le fait que les grades soient reconnus par la WSKO au Japon est un gage de sérieux indispensable. C'est un dojo de référence pour quiconque cherche la profondeur martiale et philosophique.", img: "https://picsum.photos/seed/p3/100/100" }
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
            <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center justify-center border-primary-gold/20">
              <div className="w-20 h-20 rounded-full bg-primary-gold/10 flex items-center justify-center mb-8 border border-primary-gold/30">
                <Sparkles className="text-primary-gold w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-3xl font-headline text-white mb-6 italic">Hub d'Engagement Intelligent</h3>
              <p className="text-on-surface-variant mb-10 max-w-md">
                Découvrez notre nouvelle interface de contact assistée par IA. 
                Analyse d'intention, réponse instantanée et connexion directe avec nos experts.
              </p>
              <button 
                onClick={() => setIsHubOpen(true)}
                className="w-full gold-gradient text-on-primary font-bold py-5 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl shadow-primary-gold/20"
              >
                Accéder au Hub <ArrowRight size={20} />
              </button>
              <div className="mt-8 flex items-center gap-4 text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> IA Native</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> Temps Réel</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> Sécurisé</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { q: "À quel âge peut-on commencer le Shorinji Kempo ?", a: "Le Shorinji Kempo est accessible dès 6 ans. Nous proposons des cours adaptés pour les enfants (6-12 ans), les adolescents (13-17 ans) et les adultes. Il n'y a pas d'âge maximum pour débuter. Nous accueillons régulièrement des débutants de 40, 50 ans et plus !" },
                { q: "Faut-il être déjà sportif pour commencer ?", a: "Absolument pas ! Le Shorinji Kempo s'adapte à tous les niveaux de condition physique. La progression est graduelle et respectueuse du rythme de chacun. Nos débutants viennent souvent sans aucune expérience sportive préalable. Les cours sont conçus pour développer progressivement votre condition physique, votre souplesse et votre coordination." },
                { q: "Est-ce dangereux ? Y a-t-il des risques de blessures ?", a: "Le Shorinji Kempo met l'accent sur le contrôle et le respect du partenaire. Les exercices se pratiquent de manière progressive et sécurisée. Nous utilisons des protections lors des exercices de combat. Le taux de blessures est très faible comparé à d'autres sports. La philosophie du Shorinji Kempo privilégie la maîtrise de soi et la bienveillance." },
                { q: "Peut-on essayer gratuitement avant de s'inscrire ?", a: "Oui ! Nous offrons 2 cours d'essai gratuits pour découvrir le Shorinji Kempo en toute tranquillité. Aucune obligation d'inscription. Venez simplement avec une tenue de sport confortable. Contactez-nous via WhatsApp ou par téléphone pour réserver votre créneau d'essai." },
                { q: "Quel est le tarif des cours ?", a: "Nos tarifs sont compétitifs et incluent l'adhésion à la fédération française. Cotisation annuelle : 290€ pour les adultes, 240€ pour les enfants. Possibilité de paiement en plusieurs fois. Une réduction famille est disponible pour les fratries." },
                { q: "Que faut-il apporter pour le premier cours ?", a: "Pour votre premier cours, venez avec une tenue de sport confortable (jogging, t-shirt). Vous pratiquerez pieds nus. Le gi (tenue traditionnelle) peut être acheté plus tard si vous décidez de continuer. Pensez à apporter une bouteille d'eau." }
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
      <section id="contact" className="relative py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-10 grayscale" 
            src="https://i.ibb.co/7N8gh9TJ/fond-contact.png" 
            alt="Contact background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <Mail className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Email</h4>
                      <p className="text-slate-400 text-sm">contact@shorinjikempo-marseille.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0 border border-primary-gold/20">
                      <Clock className="text-primary-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Horaires d'accueil</h4>
                      <p className="text-slate-400 text-sm">Lundi - Vendredi: 17h00 - 21h00<br />Samedi: 10h00 - 12h00</p>
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
                  <li className="flex items-center gap-2">✓ 2 cours d'essai gratuits</li>
                  <li className="flex items-center gap-2">✓ Aucune obligation d'inscription</li>
                  <li className="flex items-center gap-2">✓ Prêt du matériel pour l'essai</li>
                  <li className="flex items-center gap-2">✓ Accompagnement personnalisé</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2rem] border-primary-gold/20">
              <h3 className="text-2xl font-headline text-white mb-2">Nous contacter directement</h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Remplissez le formulaire ci-dessous ou contactez-nous via WhatsApp
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-widest">Prénom *</label>
                    <input type="text" placeholder="Jean" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-widest">Nom *</label>
                    <input type="text" placeholder="Dupont" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-widest">Email *</label>
                    <input type="email" placeholder="jean@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-widest">Téléphone</label>
                    <input type="tel" placeholder="06 12 34 56 78" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white uppercase tracking-widest">Sujet *</label>
                  <input type="text" placeholder="Ex: Inscription essai pour enfants" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white uppercase tracking-widest">Message *</label>
                  <textarea placeholder="Dites-nous comment nous pouvons vous aider..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-widest">Catégorie d'âge</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all appearance-none">
                      <option className="bg-surface">Sélectionner</option>
                      <option className="bg-surface">Enfant (6-12 ans)</option>
                      <option className="bg-surface">Adolescent (13-17 ans)</option>
                      <option className="bg-surface">Adulte</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-widest">Préféré de contact *</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-gold/50 outline-none transition-all appearance-none">
                      <option className="bg-surface">Email</option>
                      <option className="bg-surface">Téléphone</option>
                      <option className="bg-surface">WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="exp" className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary-gold focus:ring-primary-gold/50" />
                  <label htmlFor="exp" className="text-xs text-on-surface-variant">J'ai une expérience préalable en arts martiaux</label>
                </div>

                <button type="submit" className="w-full gold-gradient text-on-primary font-bold py-4 rounded-xl shadow-xl shadow-primary-gold/20 hover:brightness-110 transition-all uppercase tracking-widest text-sm">
                  Envoyer mon message
                </button>
                
                <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest">* Champs obligatoires</p>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest">Ou contactez-nous directement :</p>
                  <button type="button" className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-sm">
                    WhatsApp
                  </button>
                  <button type="button" className="w-full bg-white text-surface font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-all text-sm">
                    06 12 34 56 78
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Engagement Hub Popup */}
      <AnimatePresence>
        {isHubOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHubOpen(false)}
              className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10"
            >
              <EngagementHub onClose={() => setIsHubOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
