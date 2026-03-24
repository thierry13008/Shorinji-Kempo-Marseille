import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Mic, 
  Image as ImageIcon, 
  Send, 
  User, 
  ShieldCheck, 
  Clock, 
  Zap, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Eye,
  Leaf
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/src/lib/utils';

// --- Types ---
type Message = {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
  metadata?: any;
};

type InteractionState = 'idle' | 'analyzing' | 'routing' | 'human_connected';

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Bonjour ! Je suis votre assistant intelligent. Je vois que vous avez consulté nos articles sur le Shorinji Kempo pour enfants. Souhaitez-vous des informations spécifiques sur les inscriptions pour les 9-13 ans ?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState<InteractionState>('idle');
  const [intentScore, setIntentScore] = useState(85); // Simulated intent score
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setState('analyzing');

    // Simulate AI Response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "Parfait. J'analyse votre demande... Il semble que vous ayez besoin d'un contact direct avec notre instructeur technique. Je vous connecte à Maître Tanaka (disponible dans 2 min).",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
      setState('routing');

      // Simulate Human Connection
      setTimeout(() => {
        setState('human_connected');
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          type: 'system',
          content: "Maître Tanaka a rejoint la conversation. Il a reçu le résumé de votre échange.",
          timestamp: new Date(),
        }]);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- Left Column: Contextual Insights & Trust --- */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 rounded-[2rem] border-primary-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-gold/10 rounded-lg">
                <Zap className="text-primary-gold w-5 h-5" />
              </div>
              <h2 className="font-headline text-xl text-white">Hub Prédictif</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Intention Détectée</span>
                  <span className="text-primary-gold font-bold text-xs">{intentScore}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${intentScore}%` }}
                    className="h-full gold-gradient"
                  />
                </div>
                <p className="text-[11px] text-on-surface-variant mt-3 leading-relaxed">
                  Basé sur votre lecture de <span className="text-white italic">"La Voie de l'Enfant"</span> et votre temps passé sur le planning.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Clock className="text-primary-gold w-5 h-5 mb-2" />
                  <span className="text-[10px] font-label uppercase text-on-surface-variant">Attente Humaine</span>
                  <span className="text-white font-bold text-sm">~2 min</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <User className="text-primary-gold w-5 h-5 mb-2" />
                  <span className="text-[10px] font-label uppercase text-on-surface-variant">Experts en ligne</span>
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacy & Ethics */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-[2rem] border-white/5"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary-gold w-5 h-5" />
                <h3 className="font-headline text-lg text-white">Confiance & Éthique</h3>
              </div>
              <button 
                onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                className="text-on-surface-variant hover:text-primary-gold transition-colors"
              >
                <Eye size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="text-primary-gold/50 w-4 h-4 mt-0.5" />
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  <span className="text-white font-bold">Privacy by Design :</span> Vos données de navigation sont anonymisées et utilisées uniquement pour personnaliser cette session.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="text-primary-gold/50 w-4 h-4 mt-0.5" />
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  <span className="text-white font-bold">Green UX :</span> Interaction optimisée pour réduire l'empreinte carbone des serveurs IA.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Right Column: Multimodal Interaction Hub --- */}
        <div className="lg:col-span-8 flex flex-col h-[700px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card flex-1 flex flex-col rounded-[2.5rem] overflow-hidden border-white/5 relative"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary-gold/20 flex items-center justify-center border border-primary-gold/30">
                    <Sparkles className="text-primary-gold w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-surface" />
                </div>
                <div>
                  <h3 className="text-white font-headline text-lg">Engagement Hub 2026</h3>
                  <p className="text-[10px] font-label uppercase tracking-widest text-primary-gold">IA Conversationnelle Multimodale</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-white/10 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/expert${i}/40/40`} alt="Expert" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">Experts Disponibles</span>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={cn(
                      "flex max-w-[80%]",
                      msg.type === 'user' ? "ml-auto flex-row-reverse" : "mr-auto",
                      msg.type === 'system' ? "max-w-full mx-auto" : ""
                    )}
                  >
                    {msg.type !== 'system' && (
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                        msg.type === 'user' ? "ml-3 bg-primary-gold" : "mr-3 bg-white/10"
                      )}>
                        {msg.type === 'user' ? <User size={14} className="text-on-primary" /> : <Sparkles size={14} className="text-primary-gold" />}
                      </div>
                    )}

                    <div className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed",
                      msg.type === 'user' ? "bg-primary-gold text-on-primary rounded-tr-none" : "bg-white/5 text-on-surface-variant border border-white/5 rounded-tl-none",
                      msg.type === 'system' ? "bg-primary-gold/10 border border-primary-gold/20 text-primary-gold text-center italic text-xs w-full" : ""
                    )}>
                      {msg.content}
                      <div className={cn(
                        "text-[9px] mt-2 opacity-50",
                        msg.type === 'user' ? "text-right" : "text-left"
                      )}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {state === 'analyzing' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-primary-gold text-[10px] font-label uppercase tracking-widest"
                >
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-primary-gold rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-primary-gold rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-primary-gold rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                  Analyse de l'intention par l'IA...
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/[0.02] border-t border-white/5">
              <div className="flex items-center gap-4 bg-surface-low border border-white/10 rounded-2xl p-2 focus-within:border-primary-gold/50 transition-all">
                <div className="flex items-center gap-1 px-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary-gold transition-colors rounded-lg hover:bg-white/5">
                    <Mic size={20} />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary-gold transition-colors rounded-lg hover:bg-white/5">
                    <ImageIcon size={20} />
                  </button>
                </div>
                
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question ou décrivez votre besoin..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm py-3"
                />

                <button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="gold-gradient p-3 rounded-xl text-on-primary disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={20} />
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-[9px] text-on-surface-variant uppercase tracking-widest">
                  <CheckCircle2 size={12} className="text-green-500" /> Chiffrement Quantique
                </div>
                <div className="flex items-center gap-2 text-[9px] text-on-surface-variant uppercase tracking-widest">
                  <CheckCircle2 size={12} className="text-green-500" /> RGPD 2026 Compliant
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contextual Suggestions */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Horaires des cours enfants",
              "Tarifs inscriptions 2026",
              "Localisation du dojo",
              "Parler à un instructeur"
            ].map((suggestion, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                onClick={() => setInputValue(suggestion)}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] text-on-surface-variant hover:border-primary-gold/50 hover:text-primary-gold transition-all"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>
        </div>

      </div>

      {/* --- Strategic Note Section (Hidden/Expandable) --- */}
      <div className="max-w-7xl mx-auto mt-32 border-t border-white/5 pt-20">
        <div className="glass-card p-12 rounded-[3rem] border-white/5">
          <h2 className="font-headline text-3xl text-white mb-8 italic">Note Stratégique : Hub d'Engagement 2026</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-primary-gold font-label uppercase tracking-widest text-sm">Vision UX</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Ce hub remplace le formulaire de contact passif par une interface conversationnelle multimodale. L'IA n'est plus un simple chatbot, mais un orchestrateur de relation qui prépare le terrain pour l'humain.
              </p>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-center gap-3"><ArrowRight size={14} className="text-primary-gold" /> Scoring d'intention en temps réel via navigation.</li>
                <li className="flex items-center gap-3"><ArrowRight size={14} className="text-primary-gold" /> Triage intelligent vers l'expert le plus qualifié.</li>
                <li className="flex items-center gap-3"><ArrowRight size={14} className="text-primary-gold" /> Accessibilité native (Vocal/Visuel).</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-primary-gold font-label uppercase tracking-widest text-sm">Cahier des Charges Technique</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-label text-primary-gold uppercase block mb-2">IA & NLP</span>
                  <p className="text-[11px] text-on-surface-variant">LLM de pointe (Gemini 2.5+) pour l'analyse sémantique et le résumé de contexte.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-label text-primary-gold uppercase block mb-2">Multimodalité</span>
                  <p className="text-[11px] text-on-surface-variant">Web Speech API pour le vocal natif et Vision API pour l'analyse d'images.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-label text-primary-gold uppercase block mb-2">Infrastructure</span>
                  <p className="text-[11px] text-on-surface-variant">WebSockets pour le temps réel et Edge Computing pour la latence ultra-faible.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-label text-primary-gold uppercase block mb-2">Sécurité</span>
                  <p className="text-[11px] text-on-surface-variant">Chiffrement de bout en bout et Privacy-Preserving Analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
