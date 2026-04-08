import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, MapPin, Clock, Download, ChevronDown, Phone, Send, Sparkles, Mail, X, Plus, Minus, Maximize2, Calendar, User, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EngagementHub from '@/src/components/EngagementHub';
import InstructorsSection from '@/src/components/InstructorsSection';
import ScrollReveal from '@/src/components/ScrollReveal';

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isHubOpen, setIsHubOpen] = useState(false);
  const [hoveredSession, setHoveredSession] = useState<string | null>(null);
  const testimonials = [
    { name: "Samuel F", role: "Débutant", text: "Je n'avais jamais fait d'arts martiaux, et j'ai adoré dès la première séance. L'accueil est incroyable et l'ambiance est vraiment bienveillante.", img: "https://picsum.photos/seed/samuel/200/200" },
    { name: "Laura P", role: "Pratiquante (1 an)", text: "C'est devenu ma bulle d'oxygène. J'évacue tout le stress de la semaine et je repars avec un mental d'acier. Une expérience vraiment immersive.", img: "https://picsum.photos/seed/laura/200/200", featured: true },
    { name: "Thierry G", role: "Parent d'élève", text: "Mon fils a gagné une confiance folle en quelques mois. Les instructeurs sont pédagogues et passionnés. Je recommande à 100%.", img: "https://picsum.photos/seed/thierry/200/200" }
  ];

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapZoom, setMapZoom] = useState(17);
  const [contactInfo, setContactInfo] = useState({
    address: "38 Rue Raphaël Ponson, 13008 Marseille - Centre Social Saint-Giniez",
    phone: "06 89 09 05 44",
    email: "shorinjikempomarseille@gmail.com",
    hours: "Lundi: 20h00 - 21h30\nMercredi: 20h00 - 21h30\nVendredi: 20h15 - 21h45",
    discoveryOffer: [
      "1 cours d’essai gratuit",
      "Aucune obligation d'inscription",
      "Prêt du matériel pour l'essai",
      "Accompagnement personnalisé"
    ],
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.023473145455!2d5.3916423!3d43.2719266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b96434863459%3A0x6a0f8b8b8b8b8b8b!2sCentre%20Social%20Saint-Giniez!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
  });

  useEffect(() => {
    // Dynamic fetching removed as per user request
  }, []);

  const handleVideoInteraction = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveVideo(2);
    
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play();
    }
  };

  const handleVideo2Ended = () => {
    setActiveVideo(1);
    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play();
    }
  };

  const handleVideo1Ended = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
          <img 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5] animate-zoom-slow" 
            src="https://i.ibb.co/84x3GJHv/fond-header.png" 
            alt="Dojo Shorinji Kempo Marseille"
            referrerPolicy="no-referrer"
          />
          {/* Overlay plus profond pour une immersion immédiate et une lisibilité parfaite */}
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/30 to-surface"></div>
        </div>
        
        <div 
          className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-40 lg:pt-20"
          onMouseEnter={handleVideoInteraction}
          onTouchStart={handleVideoInteraction}
          onClick={handleVideoInteraction}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left relative z-50 pointer-events-none lg:pointer-events-auto"
            >
              <span className="hidden lg:inline-flex micro-copy mb-6 items-center gap-2 px-4 py-1.5 border border-primary-gold/30 bg-primary-gold/10 rounded-full text-primary-gold font-bold lg:[text-shadow:none] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
                <Sparkles size={14} /> Plus qu'un sport, une voie de vie
              </span>
              <h1 className="text-white leading-[1.1] mb-8 text-5xl md:text-7xl font-extrabold tracking-tight lg:[text-shadow:none] [text-shadow:0_4px_15px_rgba(0,0,0,1)]">
                Révélez votre <span className="text-primary-gold italic">force intérieure</span> avec le Shorinji Kempo
              </h1>
              <p className="text-ivory-silk/90 lg:text-ivory-silk/80 max-w-xl mb-10 text-lg md:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 lg:[text-shadow:none] [text-shadow:0_2px_10px_rgba(0,0,0,1)]">
                Rejoignez un dojo où le corps et l'esprit s'unissent. Apprenez à <span className="text-white border-b-2 border-primary-gold/50">vous protéger</span>, gagnez en sérénité et forgez un mental d'acier.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-6 pointer-events-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                  <a 
                    href="#contact"
                    className="cta-button flex items-center justify-center gap-3 text-[16px] animate-float animate-pulse-gold group"
                  >
                    Réservez votre séance gratuite (places limitées)
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
                  </a>
                </motion.div>
                {/* Micro-copy de réassurance pour renforcer la confiance */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-ivory-silk/80 lg:text-ivory-silk/60 text-sm font-bold uppercase tracking-[0.15em] lg:ml-2 lg:[text-shadow:none] [text-shadow:0_2px_8px_rgba(0,0,0,1)]"
                >
                  Séance d’essai gratuite – Sans engagement, accessible débutants
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 lg:relative lg:mt-0 z-0 lg:z-10 lg:opacity-100 overflow-hidden lg:overflow-visible"
            >
              {/* Mobile Overlay pour la lisibilité */}
              <div className="absolute inset-0 bg-black/40 z-30 lg:hidden pointer-events-none"></div>

              <div 
                className="h-full w-full lg:w-[450px] lg:aspect-[4/5] lg:rounded-[24px] lg:overflow-hidden lg:shadow-2xl lg:border lg:border-white/10 lg:transform lg:rotate-2 lg:glass-card lg:ki-aura-dark lg:p-2 cursor-pointer relative"
              >
                {/* Vidéo 1: Normal */}
                <video 
                  ref={video1Ref}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover lg:rounded-xl transition-opacity duration-0",
                    activeVideo === 1 ? "opacity-100 z-20" : "opacity-0 z-10"
                  )}
                  src="https://res.cloudinary.com/dpfewspme/video/upload/v1774606161/video_salut_sans_watermark_gb80ku.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={handleVideo1Ended}
                />
                
                {/* Vidéo 2: Inversée */}
                <video 
                  ref={video2Ref}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover lg:rounded-xl transition-opacity duration-0",
                    activeVideo === 2 ? "opacity-100 z-20" : "opacity-0 z-10"
                  )}
                  src="https://res.cloudinary.com/dpfewspme/video/upload/e_reverse/v1774606161/video_salut_sans_watermark_gb80ku.mp4"
                  muted
                  playsInline
                  preload="auto"
                  onEnded={handleVideo2Ended}
                />

                {/* Desktop Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 via-transparent to-transparent pointer-events-none hidden lg:block z-20"></div>
                
                {/* Info Box */}
                <div className="hidden lg:block absolute bottom-6 left-6 right-6 p-6 bg-surface-low/60 backdrop-blur-md rounded-xl border border-white/10 pointer-events-none z-40">
                  <p className="italic text-lg text-white font-headline">"Le Salut - Gassho Rei"</p>
                  <p className="micro-copy mt-1 text-primary-gold">L'entrée dans la voie</p>
                </div>
              </div>
              {/* Desktop Glow */}
              <div className="hidden lg:block absolute -top-12 -right-12 w-48 h-48 bg-primary-gold/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storytelling Section - Pourquoi nous rejoindre ? */}
      <section className="py-48 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white ki-aura-light">
                <img 
                  src="https://i.ibb.co/tpbN1KW4/image-debutant.png" 
                  alt="Pratique du Shorinji Kempo" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-gold/10 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-gold/20 rounded-full blur-3xl -z-10"></div>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal>
                <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">L'Expérience Shorinji Kempo</span>
                <h2 className="text-surface text-4xl md:text-6xl font-black leading-tight mb-8">
                  Pourquoi franchir les portes de notre dojo ?
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed">
                  Plus qu'un simple entraînement, nous vous proposons un voyage vers la meilleure version de vous-même. 
                  Rejoignez une communauté qui valorise l'entraide autant que l'efficacité.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                {[
                  {
                    title: "Renforcer la confiance en soi",
                    desc: "Prenez confiance en vous, non seulement sur le tatami, mais dans chaque défi de votre vie quotidienne.",
                    icon: <Sparkles className="text-primary-gold" />
                  },
                  {
                    title: "Discipline de Fer",
                    desc: "Développez un mental solide, structuré et capable de rester calme sous la pression.",
                    icon: <Clock className="text-primary-gold" />
                  },
                  {
                    title: "Défense Efficace",
                    desc: "Apprenez à vous protéger et à protéger vos proches avec des techniques réalistes et intelligentes.",
                    icon: <CheckCircle className="text-primary-gold" />
                  }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:bg-primary-gold group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-surface text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal className="pt-8">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-4 text-surface font-black uppercase tracking-widest group border border-surface/10 px-8 py-4 rounded-full hover:border-primary-gold/50 transition-all"
                >
                  <span className="h-[2px] w-12 bg-primary-gold group-hover:w-20 transition-all duration-500"></span>
                  Essayez maintenant (offert)
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - 3 Pillars */}
      <section className="py-48 bg-surface relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Votre Transformation</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-6">Nos 3 Piliers Fondamentaux</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Développez votre confiance et votre force dès les premières séances grâce à une méthode éprouvée.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Sparkles className="text-primary-gold" size={40} />,
                title: "Confiance",
                desc: "Développez votre confiance dès la première séance",
                variant: "bg-white/5 shadow-primary-gold/5"
              },
              {
                icon: <ArrowRight className="text-primary-gold rotate-[-45deg]" size={40} />,
                title: "Discipline",
                desc: "Renforcez votre mental et votre concentration",
                variant: "bg-white/[0.07] shadow-primary-gold/10"
              },
              {
                icon: <CheckCircle className="text-primary-gold" size={40} />,
                title: "Défense",
                desc: "Apprenez à vous protéger efficacement",
                variant: "bg-white/[0.09] shadow-primary-gold/15"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className={cn(
                  "text-center p-10 rounded-[40px] glass-card border border-white/5 hover:scale-105 transition-all duration-500 group shadow-2xl ki-aura-dark",
                  benefit.variant
                )}
              >
                <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">{benefit.icon}</div>
                <h3 className="text-white mb-4 text-3xl font-bold">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
          
            <ScrollReveal className="pt-24">
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="#contact"
                  className="cta-secondary inline-flex items-center justify-center gap-3 text-lg px-12 py-6"
                >
                  Essayez maintenant
                </a>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Sans engagement – accessible à tous</p>
              </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Personas Section - Storytelling Immersif */}
      <section className="py-48 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Pour qui ?</span>
            <h2 className="text-surface text-4xl md:text-6xl font-medium mb-6">Le Shorinji Kempo est fait pour vous.</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-xl">Que vous cherchiez la sérénité, la force ou la discipline, trouvez votre voie parmi nos sections dédiées.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                tag: "Enfants & Ados (9-13 ans)",
                title: "L’école de la confiance pour votre enfant.",
                desc: "Offrez-lui un cadre structurant pour grandir sereinement et s'affirmer face aux défis de la vie.",
                img: "https://i.ibb.co/8L2sN6qz/enfants.png",
                cta: "Réserver son essai gratuit",
                icon: <Sparkles className="text-primary-gold" size={24} />,
                bg: "bg-white"
              },
              {
                tag: "Adultes Débutants",
                title: "Retrouvez l’équilibre et évacuez le stress.",
                desc: "Votre bulle de décompression à Marseille. Apprenez à vous défendre dans une ambiance 100% bienveillante.",
                img: "https://i.ibb.co/tpbN1KW4/image-debutant.png",
                featured: true,
                cta: "Je commence maintenant",
                icon: <TrendingUp className="text-primary-gold" size={24} />,
                bg: "bg-surface"
              },
              {
                tag: "Pratiquant Confirmé",
                title: "Exigence Technique & Lignage Officiel.",
                desc: "Donnez une nouvelle dimension à votre parcours martial au sein d'une structure reconnue mondialement (WSKO).",
                img: "https://i.ibb.co/wNBSpY0t/pratiquant-confirm-cp.png",
                cta: "Rejoindre le dojo",
                icon: <CheckCircle className="text-primary-gold" size={24} />,
                bg: "bg-bg-secondary"
              }
            ].map((card, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className={cn(
                  "group p-10 rounded-[48px] transition-all duration-700 flex flex-col border",
                  card.bg,
                  card.featured ? "text-white border-white/10 md:scale-105 shadow-[0_40px_80px_rgba(0,0,0,0.2)]" : "border-slate-100 shadow-xl shadow-surface/5"
                )}
              >
                <div className="mb-8 overflow-hidden rounded-[32px] aspect-video relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 drop-shadow-lg">
                    {card.icon}
                  </div>
                </div>
                <div className="flex-grow text-center">
                  <div className={cn("micro-copy mb-4 font-bold uppercase tracking-widest", card.featured ? "text-primary-gold" : "text-primary-gold")}>{card.tag}</div>
                  <h3 className={cn("mb-6 text-2xl md:text-3xl font-medium leading-tight", card.featured ? "text-white" : "text-surface")}>
                    {card.title}
                  </h3>
                  <p className={cn("mb-10 text-lg leading-relaxed", card.featured ? "text-ivory-silk/60" : "text-slate-500")}>{card.desc}</p>
                </div>
                <a 
                  href="#contact"
                  className={cn(
                    "w-full font-bold py-5 rounded-2xl transition-all uppercase tracking-widest text-sm mt-auto flex items-center justify-center hover:scale-[1.05] active:scale-95",
                    card.featured ? "cta-button" : "cta-secondary"
                  )}
                >
                  {card.cta}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="relative py-48 min-h-[80vh] flex items-center bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20 grayscale" 
            src="https://i.ibb.co/SwqgBGQK/fond-planing.png" 
            alt="Dojo"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/20 to-surface"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="micro-copy mb-4 block">Calendrier des Sessions</span>
              <h2 className="text-white mb-6">Planning du Dojo</h2>
              <p className="text-slate-300 mb-8">Rejoignez l'élite du Budo au cœur de Marseille (13008).</p>
              <button 
                onClick={() => setIsMapOpen(true)}
                className="bg-primary-gold/10 border border-primary-gold/20 px-6 py-4 rounded-xl inline-flex items-center gap-3 hover:bg-primary-gold/20 transition-all group"
              >
                <MapPin className="text-primary-gold group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bold text-sm tracking-wide uppercase text-white">Dojo Saint-Giniez</span>
              </button>
            </div>

            <div className="lg:w-2/3 w-full space-y-6">
              {[
                { day: "Lundi", time: "20h00 — 21h30", cat: "Adultes", level: "Tous Niveaux", id: "01" },
                { day: "Mercredi", time: "20h00 — 21h30", cat: "Adultes", level: "Tous Niveaux", id: "02" },
                { day: "Vendredi", time: "20h15 — 21h45", cat: "Mixte", level: "Adultes & Enf", id: "03" }
              ].map((session, i) => {
                const isActive = hoveredSession ? hoveredSession === session.id : session.id === "02";
                
                return (
                  <div 
                    key={i}
                    onMouseEnter={() => setHoveredSession(session.id)}
                    onMouseLeave={() => setHoveredSession(null)}
                  >
                    <ScrollReveal 
                      delay={i * 0.1}
                      className={cn(
                        "rounded-[24px] p-8 transition-all duration-500 group border flex flex-col md:flex-row md:items-center justify-between gap-6 glass-card ki-aura-dark",
                        isActive ? "bg-white/10 border-white/30 shadow-2xl" : "border-white/10"
                      )}
                    >
                      <div className="flex items-center gap-8">
                        <div className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center italic text-lg shrink-0 border border-white/20 transition-colors duration-500",
                          isActive ? "bg-white/20 text-white font-bold border-white/30" : "text-white/40 group-hover:text-primary-gold"
                        )}>{session.id}</div>
                        <div>
                          <p className="micro-copy mb-1">Session {session.id}</p>
                          <h3 className="text-white">
                            <span>{session.day}</span>
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-8 md:gap-12">
                        <div className="flex items-center gap-3">
                          <Clock className="text-primary-gold" size={18} />
                          <span className="text-white font-bold">{session.time}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-white font-medium">{session.cat}</p>
                          <span className="micro-copy bg-white/10 px-4 py-1.5 rounded-full border border-primary-gold/20">
                            {session.level}
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                );
              })}
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
      <section className="py-48 bg-bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">La Voix du Dojo</span>
            <h2 className="text-surface text-4xl md:text-6xl font-black mb-6">Ils ont franchi le pas.</h2>
            <p className="text-slate-600 text-xl">Rejoignez une communauté bienveillante et motivée.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={cn(
                    "relative pt-20 pb-12 px-8 rounded-[40px] border-l-4 transition-all duration-700 h-full flex flex-col items-center text-center group overflow-visible",
                    t.featured 
                      ? "bg-surface/90 backdrop-blur-xl text-white border-white/10 border-l-primary-gold shadow-[0_40px_80px_rgba(0,0,0,0.3)] ki-aura-dark" 
                      : "bg-white/80 backdrop-blur-xl border-slate-100 border-l-primary-gold/40 shadow-2xl shadow-surface/5 ki-aura-light"
                  )}
                >
                  {/* Decorative Quote Icon */}
                  <div className={cn(
                    "absolute top-8 right-8 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110",
                    t.featured ? "text-primary-gold" : "text-surface"
                  )}>
                    <Sparkles size={48} />
                  </div>

                  {/* Overlapping Photo with Floating Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <img 
                        src={t.img} 
                        className={cn(
                          "w-28 h-28 rounded-full object-cover border-4 shadow-2xl transition-transform duration-700 group-hover:scale-105",
                          t.featured ? "border-primary-gold" : "border-white"
                        )} 
                        alt={t.name} 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary-gold text-on-primary rounded-full p-2 shadow-xl border-2 border-surface">
                        <Sparkles size={16} fill="currentColor" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="mb-8 relative z-10">
                    <p className={cn("font-headline font-bold text-2xl mb-2 tracking-tight", t.featured ? "text-white" : "text-surface")}>
                      {t.name}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-px w-4 bg-primary-gold/50"></span>
                      <p className="text-primary-gold text-xs uppercase tracking-[0.2em] font-black">{t.role}</p>
                      <span className="h-px w-4 bg-primary-gold/50"></span>
                    </div>
                  </div>

                  <p className={cn(
                    "italic leading-relaxed text-xl font-medium flex-grow relative z-10 px-2", 
                    t.featured ? "text-ivory-silk/90" : "text-slate-600"
                  )}>
                    <span className="text-primary-gold/40 text-4xl font-serif absolute -top-4 -left-2">"</span>
                    {t.text}
                    <span className="text-primary-gold/40 text-4xl font-serif absolute -bottom-8 -right-2">"</span>
                  </p>

                  <div className="mt-10 flex justify-center gap-1.5 relative z-10">
                    {[...Array(5)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (starIndex * 0.1) }}
                      >
                        <Sparkles 
                          size={14} 
                          className={t.featured ? "text-primary-gold" : "text-primary-gold"} 
                          fill="currentColor" 
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[40px] overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-gold/20 blur-[80px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-gold/10 blur-[80px]"></div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <ScrollReveal>
              <a 
                href="#contact"
                className="bg-primary-gold text-black hover:bg-white hover:text-primary-gold inline-flex items-center justify-center gap-3 text-lg px-12 py-6 font-bold rounded-2xl transition-all duration-300 uppercase tracking-widest shadow-xl shadow-primary-gold/20 hover:scale-105 active:scale-95"
              >
                Rejoignez la communauté
              </a>
              <div className="mt-6 flex flex-col items-center gap-2">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Sans engagement – accessible à tous</p>
                <div className="flex items-center gap-4 text-[10px] text-primary-gold/60 uppercase tracking-[0.2em] font-bold">
                  <span>Premier cours offert</span>
                  <span className="w-1 h-1 rounded-full bg-primary-gold/30"></span>
                  <span>Équipement prêté</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-48 bg-surface-low relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <ScrollReveal>
              <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Votre Premier Pas</span>
              <h2 className="text-white text-4xl md:text-6xl font-medium">Comment nous rejoindre ?</h2>
              <p className="text-slate-400 mt-6 text-xl max-w-2xl mx-auto">Une démarche simple et bienveillante pour commencer votre transformation.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: "Réservez votre séance",
                desc: "Remplissez le formulaire en 30s. C'est gratuit, sans engagement et accessible à tous.",
                icon: <Calendar className="text-primary-gold group-hover:text-surface transition-colors duration-500" size={32} />,
                delay: 0.1
              },
              {
                step: "02",
                title: "Participez au cours",
                desc: "Nous vous accueillons avec bienveillance. L'équipement vous est prêté pour votre premier cours.",
                icon: <User className="text-primary-gold group-hover:text-surface transition-colors duration-500" size={32} />,
                delay: 0.3
              },
              {
                step: "03",
                title: "Progressez pas à pas",
                desc: "Pratiquez, ressentez l'énergie du groupe et découvrez votre potentiel inexploité.",
                icon: <TrendingUp className="text-primary-gold group-hover:text-surface transition-colors duration-500" size={32} />,
                delay: 0.5
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                className="relative group h-full"
              >
                <div className="relative z-10 p-12 rounded-[48px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary-gold/40 transition-all duration-500 h-full flex flex-col items-center text-center shadow-2xl hover:shadow-primary-gold/10 group-hover:-translate-y-2 ki-aura-dark">
                  {/* Step Number Overlay */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-headline font-black text-white/10 group-hover:text-primary-gold/20 transition-colors duration-500 select-none z-0 italic">
                    {item.step}
                  </div>

                  {/* Icon Container */}
                  <div className="mb-10 w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-primary-gold group-hover:text-surface transition-all duration-500 shadow-lg group-hover:shadow-primary-gold/30 relative z-10">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-white text-2xl font-medium mb-6 relative z-10">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg relative z-10 mb-8">{item.desc}</p>
                  
                  <div className="mt-auto w-full pt-8 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-gold/60 group-hover:text-primary-gold transition-colors duration-500">
                      <CheckCircle size={12} />
                      <span>Accessible débutants</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-8">
                <a 
                  href="#contact"
                  className="cta-button inline-flex items-center justify-center gap-4 text-lg px-16 py-7"
                >
                  Rejoignez le dojo
                  <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
                  <span>Sans engagement</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-gold/30"></span>
                  <span>Premier cours offert</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <InstructorsSection />

      {/* FAQ Section */}
      <section className="py-48 bg-bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">FAQ</span>
            <h2 className="text-surface text-4xl md:text-6xl font-medium mb-6">Questions Fréquentes</h2>
            <p className="text-slate-600 text-xl">Tout ce qu'il faut savoir avant de franchir les portes du dojo. La sécurité et l'accueil des débutants sont nos priorités.</p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircle size={18} className="text-primary-gold" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Débutants bienvenus – sécurité assurée</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircle size={18} className="text-primary-gold" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">100% Bienveillance & Respect</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal className="bg-surface glass-card p-10 rounded-[24px] flex flex-col items-center text-center justify-center border border-white/10 shadow-sm ki-aura-dark">
              <div className="w-20 h-20 rounded-full bg-primary-gold/10 flex items-center justify-center mb-8 border border-primary-gold/30">
                <Sparkles className="text-primary-gold w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-white mb-6 italic">
                <span>Hub d'assistance Intelligent</span>
              </h3>
              <p className="text-slate-300 mb-10 max-w-md">
                Découvrez notre nouvelle interface de contact assistée par IA. 
                Analyse d'intention, réponse instantanée et connexion directe avec nos experts.
              </p>
              <button 
                disabled
                className="cta-button w-full flex items-center justify-center gap-3 opacity-50 cursor-not-allowed"
              >
                Bientôt disponible <ArrowRight size={20} />
              </button>
              <div className="mt-8 flex items-center gap-4 micro-copy text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> IA Native</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> Temps Réel</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="text-primary-gold w-3 h-3" /> Sécurisé</span>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {[
                { q: "À quel âge peut-on commencer le Shorinji Kempo ?", a: "Le Shorinji Kempo est accessible dès 9 ans. Nous proposons des cours adaptés pour les enfants, les adolescents et les adultes. Il n'y a pas d'âge maximum pour débuter. La sécurité et l'accueil des débutants sont nos priorités absolues." },
                { q: "Faut-il être déjà sportif pour commencer ?", a: "Absolument pas ! Le Shorinji Kempo s'adapte à tous les niveaux. La progression est graduelle et respectueuse de votre rythme. Nos débutants viennent souvent sans aucune expérience sportive préalable." },
                { q: "Est-ce dangereux ? Y a-t-il des risques de blessures ?", a: "La sécurité est notre priorité. Les techniques sont enseignées avec contrôle et bienveillance. Nous utilisons des protections et le taux de blessures est extrêmement faible. On apprend à se protéger, pas à se blesser." },
                { q: "Peut-on essayer gratuitement avant de s'inscrire ?", a: "Oui ! Nous offrons une séance d'essai gratuite pour découvrir le Shorinji Kempo en toute tranquillité. Aucune obligation d'inscription. Venez simplement avec une tenue de sport confortable." },
                { q: "Quel est le tarif des cours ?", a: "Nos tarifs sont transparents. Cotisations adultes : à partir de 195€ hors licences, enfants 150€ hors licences. Possibilité de payer au trimestre, se renseigner auprès du professeur." },
                { q: "Que faut-il apporter pour le premier cours ?", a: "Pour votre premier cours, un simple jogging et un t-shirt suffisent. Vous pratiquerez pieds nus sur des tatamis. Pensez simplement à apporter une bouteille d'eau et votre sourire !" }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="glass-card-light rounded-[32px] overflow-hidden border border-slate-200 shadow-sm ki-aura-light hover:border-primary-gold/30 transition-all duration-500">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-8 text-left text-surface hover:text-primary-gold transition-colors group"
                  >
                    <span className="font-bold text-lg pr-8 group-hover:translate-x-2 transition-transform duration-300">{item.q}</span>
                    <div className={cn(
                      "w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-500",
                      activeFaq === i ? "bg-primary-gold border-primary-gold text-on-primary rotate-180" : "group-hover:border-primary-gold group-hover:text-primary-gold"
                    )}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-slate-600 leading-[1.6] text-lg border-t border-slate-100 mt-2">
                          {item.a}
                          <div className="mt-6 flex items-center gap-2 text-primary-gold/60 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle size={14} /> 100% Sécurisé & Bienveillant
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Conversion Focus */}
      <section id="contact" className="relative py-48 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20 grayscale" 
            src="https://i.ibb.co/7N8gh9TJ/fond-contact.png" 
            alt="Contact background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/20 to-surface"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">Dernière Étape</span>
            <h2 className="text-white text-4xl md:text-6xl font-black mb-6">Prêt à transformer votre quotidien ?</h2>
            <p className="text-ivory-silk/60 text-xl max-w-2xl mx-auto">Rejoignez les pratiquants qui ont déjà franchi le pas. Votre première séance est offerte, sans aucun engagement.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-8">
                <h3 className="text-white text-2xl font-bold mb-6">Pourquoi réserver maintenant ?</h3>
                {[
                  { title: "Sans engagement", desc: "Venez essayer, ressentez l'énergie, et décidez ensuite." },
                  { title: "Accessible débutant", desc: "Aucune expérience préalable n'est nécessaire." },
                  { title: "Places limitées", desc: "Nous limitons le nombre de nouveaux par cours pour un meilleur suivi." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-ivory-silk/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-6 p-8 bg-primary-gold/5 border border-primary-gold/20 rounded-[32px]">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-gold bg-surface-high p-2">
                  <img src="https://i.ibb.co/C3WkBY39/LOGO-SANS-SERIF-FOND-SOMBRE-CP.png" alt="Marseille Shorinji Kempo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-white font-bold">Une question ?</p>
                  <p className="text-ivory-silk/60">Remplissez le formulaire ci dessous</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Phone className="text-primary-gold mb-3" size={20} />
                  <p className="text-white font-bold text-sm uppercase tracking-widest">Appelez-nous</p>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-ivory-silk/60 hover:text-primary-gold transition-colors">{contactInfo.phone}</a>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Mail className="text-primary-gold mb-3" size={20} />
                  <p className="text-white font-bold text-sm uppercase tracking-widest">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-ivory-silk/60 hover:text-primary-gold transition-colors break-all text-xs md:text-base">{contactInfo.email}</a>
                </div>
              </div>
            </div>

            <ScrollReveal className="bg-white p-10 md:p-12 rounded-[48px] shadow-2xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-surface font-bold text-sm uppercase tracking-widest ml-1">Nom Complet *</label>
                    <input type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition-all text-surface" placeholder="Jean Dupont" required />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-surface font-bold text-sm uppercase tracking-widest ml-1">Email *</label>
                    <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition-all text-surface" placeholder="jean@exemple.com" required />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="phone" className="text-surface font-bold text-sm uppercase tracking-widest ml-1">Téléphone *</label>
                  <input type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition-all text-surface" placeholder="06 12 34 56 78" required />
                </div>

                <button type="submit" className="cta-button w-full py-6 text-lg">
                  Réservez ma séance gratuite (places limitées)
                </button>
                
                <p className="text-center text-slate-400 text-xs uppercase tracking-widest font-bold">Réponse garantie dans les meilleurs délais</p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Maps Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMapOpen(false)}
              className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 glass-card ki-aura-dark p-2"
            >
              {/* Close Button - Top Right */}
              <div className="absolute top-6 right-6 z-10">
                <button 
                  onClick={() => setIsMapOpen(false)}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Zoom & Fullscreen Controls - Bottom Right */}
              <div className="absolute bottom-24 right-6 z-10 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setMapZoom(prev => Math.min(prev + 1, 21))}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                    title="Zoom avant"
                  >
                    <Plus size={20} />
                  </button>
                  <button 
                    onClick={() => setMapZoom(prev => Math.max(prev - 1, 1))}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                    title="Zoom arrière"
                  >
                    <Minus size={20} />
                  </button>
                </div>

                <button 
                  onClick={() => {
                    const iframe = document.querySelector('iframe[title="Google Maps Dojo Saint-Giniez"]');
                    if (iframe) {
                      if (iframe.requestFullscreen) {
                        iframe.requestFullscreen();
                      }
                    }
                  }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-all shadow-xl active:scale-95"
                  title="Plein écran"
                >
                  <Maximize2 size={20} />
                </button>
              </div>
              <iframe
                src={`https://maps.google.com/maps?q=43.2719266,5.3916423&z=${mapZoom}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2rem]"
                title="Google Maps Dojo Saint-Giniez"
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onViewportEnter={(entry) => {
                if (entry?.target) {
                  entry.target.classList.add('is-visible');
                }
              }}
              className="relative w-full max-w-5xl h-[80vh] bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 glass-card ki-aura-dark"
            >
              <EngagementHub onClose={() => setIsHubOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
