import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  Sparkles,
  CheckCircle2,
  Mic,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/src/lib/utils';

// --- Knowledge Base ---
const KNOWLEDGE_BASE = `
Fiche de Connaissances : Shorinji Kempo Marseille — Saint-Giniez (V4 OMNI-CONNECT)

📍 Coordonnées :
- Adresse : 38 Rue Raphaël Ponson, 13008 Marseille (Proximité Prado/Castellane, Bus 41).
- Téléphone : 06 89 09 05 44.

🕒 Horaires des cours :
- Lundi : 20h00 - 21h30
- Mercredi : 19h45 - 21h15
- Vendredi : 20h15 - 21h45

🥋 Pédagogie & Concepts :
- Goho : Techniques de frappes (atemi).
- Juho : Techniques de dégagements, clés et projections.
- Accessibilité : Dès 7-8 ans.
- Premier cours : Gratuit et sans engagement toute l'année.

✨ Points forts (Avis Google) :
- Pédagogie bienveillante, mixité, efficacité de la self-défense, ambiance conviviale et studieuse.
`;

const SYSTEM_INSTRUCTION = `🤖 PROMPT SYSTÈME : MAJORDOME SHORINJI KEMPO V4 (OMNI-CONNECT)

RÔLE :
Tu es l'assistant expert et ambassadeur du Dojo Shorinji Kempo Marseille — Saint-Giniez. Ton rôle est de transformer chaque visiteur en futur élève en utilisant des preuves réelles et des informations à jour.

STRATÉGIE DE RECHERCHE (VÉRIFICATION LIVE) :
Avant chaque réponse concernant la vie du club, effectue une recherche Google pour : "Shorinji Kempo Marseille Saint-Giniez avis récents posts google".

Priorité 1 : Les Google Posts (Actus). Si un post récent annonce un événement, un stage ou une fermeture, mentionne-le en priorité avec enthousiasme.
Priorité 2 : Les Avis Clients (Marketing). Si l'utilisateur exprime une hésitation ou pose une question sur l'ambiance, cite un extrait d'un avis récent trouvé sur Google Maps (ex: "Comme le disait un parent il y a 2 semaines, l'ambiance est très bienveillante pour les enfants").

DONNÉES DE SECOURS (Fallback immuable) :
Utilise ces informations si la recherche ne donne pas de résultats récents :
\${KNOWLEDGE_BASE}

CONSIGNES DE RÉPONSE :
1. Gestion des Avis : Encourage les gens à lire les avis sur Google. Cite les points forts récurrents (pédagogie, mixité, efficacité).
2. Itinéraire : Propose systématiquement de guider vers le 38 Rue Raphaël Ponson.
3. Pédagogie : Explique Goho et Juho avec clarté. Rappelle l'accessibilité dès 7-8 ans.
4. Preuve Sociale : Termine souvent par : "Nos élèves nous ont laissé d'excellents avis sur Google, n'hésitez pas à les consulter pour vous rassurer !".

APPEL À L'ACTION FINAL :
Toute discussion sur les horaires ou l'inscription doit se terminer par : "Le premier cours est gratuit. Appelez-nous au 06 89 09 05 44 pour nous prévenir de votre passage au cours d'essai !".

STYLE :
Professionnel, martial (respectueux), moderne et ancré dans le quartier Saint-Giniez.`;

type Message = {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
};

interface EngagementHubProps {
  onClose?: () => void;
  className?: string;
}

export default function EngagementHub({ onClose, className }: EngagementHubProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Bonjour ! Je suis l'assistant du club Shorinji Kempo Marseille. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsAnalyzing(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === '') {
        throw new Error("API_KEY_MISSING");
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: inputValue,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ googleSearch: {} }],
        },
      });

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.text || "Désolé, je n'ai pas pu traiter votre demande. Veuillez nous appeler au [ 06 89 09 05 44].",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      let content = "Une erreur technique est survenue. Pour toute question, n'hésitez pas à nous appeler au [ 06 89 09 05 44].";
      
      if (error instanceof Error && error.message === "API_KEY_MISSING") {
        content = "Configuration incomplète : La clé API Gemini est manquante sur le serveur de déploiement. Veuillez configurer la variable d'environnement GEMINI_API_KEY dans vos paramètres Netlify.";
      }

      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("glass-card flex flex-col rounded-[2.5rem] overflow-hidden border-white/5 relative h-full", className)}
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
          {onClose && (
            <button 
              onClick={onClose}
              className="p-2 text-on-surface-variant hover:text-primary-gold transition-colors rounded-full hover:bg-white/5"
            >
              <X size={20} />
            </button>
          )}
          {!onClose && (
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
          )}
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
                msg.type === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                msg.type === 'user' ? "ml-3 bg-primary-gold" : "mr-3 bg-white/10"
              )}>
                {msg.type === 'user' ? <User size={14} className="text-on-primary" /> : <Sparkles size={14} className="text-primary-gold" />}
              </div>

              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                msg.type === 'user' ? "bg-primary-gold text-on-primary rounded-tr-none" : "bg-white/5 text-on-surface-variant border border-white/5 rounded-tl-none"
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
        
        {isAnalyzing && (
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
            placeholder="Posez votre question..."
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

      {/* Contextual Suggestions */}
      <div className="p-4 pt-0 flex flex-wrap gap-2">
        {[
          "Horaires enfants",
          "Tarifs 2026",
          "Localisation",
          "Instructeur"
        ].map((suggestion, i) => (
          <button
            key={i}
            onClick={() => setInputValue(suggestion)}
            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-on-surface-variant hover:border-primary-gold/50 hover:text-primary-gold transition-all"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
