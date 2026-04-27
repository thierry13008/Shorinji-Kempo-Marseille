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
import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/src/lib/utils';

// --- Knowledge Base ---
let KNOWLEDGE_BASE = `
Fiche de Connaissances : Shorinji Kempo Marseille — Saint-Giniez
26: 🟢 Pour les Grands Débutants & Curieux
27: 1. C’est quoi le Shorinji Kempo ? Une discipline japonaise complète combinant self-défense (atemi, dégagements, projections) et philosophie pour l'équilibre corps-esprit.
28: 2. Est-ce que c’est violent ? Non, l'accent est mis sur le contrôle de soi et le respect du partenaire. On apprend à se défendre, pas à agresser.
29: 3. Puis-je faire un cours d'essai ? Oui, le premier cours est gratuit et sans engagement toute l'année.
30: 4. Faut-il être souple ou sportif ? Pas du tout. La souplesse et la condition physique viennent avec la pratique régulière.
31: 5. Quelle est la différence avec le Karaté ou le Judo ? Le Shorinji Kempo est plus varié : il utilise à la fois des techniques de frappe (Goho) et des techniques de dégagement/clés (Juho).
32: 6. Y a-t-il de la compétition ? Non, nous privilégions l'entraide (Kumite主体 - Kumite shutai) plutôt que la victoire sur l'autre.
33: 7. Peut-on s'inscrire en cours d'année ? Oui, l'enseignement est adapté pour intégrer des débutants à tout moment.
34: 8. Est-ce efficace pour la self-défense ? Oui, les techniques sont basées sur des principes de levier et de points vitaux, permettant de répondre à une agression même face à plus fort que soi.
35: 9. Quelle est l'ambiance au club ? Conviviale, studieuse et respectueuse. On s'entraide pour progresser ensemble.
36: 10. Dois-je acheter un équipement tout de suite ? Non, un simple jogging et un t-shirt suffisent pour les premiers cours.
37: 🧒 Pour les Parents (Section Enfants/Ados)
38: 11. À partir de quel âge peut-on commencer ? Les enfants sont acceptés dès 9 ans (Section 9-13 ans).
39: 12. Qu’est-ce que ça apporte à mon enfant ? Confiance en soi, discipline, respect des autres et meilleure coordination motrice.
40: 13. Est-ce dangereux pour la croissance ? Non, les chutes sont apprises en douceur et les frappes sont contrôlées.
41: 14. Mon enfant est timide, est-ce une bonne idée ? C'est idéal. Le travail en binôme aide énormément à sortir de sa bulle.
42: 15. Mon enfant est très énergique, va-t-il se canaliser ? Oui, le rituel du dojo et la concentration demandée aident à apaiser le trop-plein d'énergie.
43: 16. Dois-je rester pendant le cours ? C'est possible au début pour rassurer l'enfant, mais le laisser seul favorise son autonomie.
44: 17. Y a-t-il des passages de grades pour les enfants ? Oui, il y a des examens de ceintures pour marquer leur progression.
45: 18. L'équipement enfant est-il cher ? Le Dogi (kimono) enfant est très abordable (environ 25-30€).
46: 19. Que se passe-t-il pendant les vacances scolaires ? Les cours s'arrêtent généralement (sauf stages exceptionnels).
47: 20. Y a-t-il une assurance ? Oui, la licence fédérale inclut une assurance spécifique pour la pratique.
48: 💰 Tarifs, Horaires et Logistique
49: 21. Quels sont les jours de cours à Saint-Giniez ? Lundi, Mercredi et Vendredi.
50: 22. Quels sont les horaires ? Lundi 20h00-21h30, Mercredi 20h00-21h30, Vendredi 20h15-21h45.
51: 23. Combien coûte l'adhésion annuelle ? Contactez-nous pour les tarifs détaillés 2026.
52: 24. Peut-on payer en plusieurs fois ? Oui, nous acceptons les paiements échelonnés (3 fois généralement).
53: 25. Prenez-vous les chèques vacances ou coupons sport ? Oui.
54: 26. Y a-t-il un tarif famille (réduction) ? Oui, réduction pour le deuxième membre de la même famille.
55: 27. Où se trouve précisément le dojo ? Dojo Saint-Giniez, Avenue du Prado, 13008 Marseille.
56: 28. Y a-t-il un parking à proximité ? Oui, stationnement possible aux alentours du Prado.
57: 29. Y a-t-il des douches et vestiaires ? Oui, des vestiaires séparés sont disponibles.
58: 30. Faut-il un certificat médical ? Oui, un certificat de "non-contre-indication à la pratique des arts martiaux" est obligatoire.
59: 🥋 Pour les Pratiquants (Avancés ou Transferts)
60: 31. De quelle fédération dépendez-vous ? Nous sommes affiliés à France Shorinji Kempo (FSK) et à la World Shorinji Kempo Organization (WSKO).
61: 32. Le grade d'un autre club est-il valable chez vous ? Oui, les grades WSKO sont reconnus mondialement.
62: 33. Pratiquez-vous le Seiho (massage/remise en forme) ? Oui, cela fait partie intégrante de notre cursus.
63: 34. Pratiquez-vous le Chinkon (méditation Zazen) ? Oui, chaque cours commence ou finit par un moment de méditation.
64: 35. Peut-on participer aux stages nationaux ? Bien sûr, c'est même encouragé pour rencontrer d'autres pratiquants.
65: 36. Vendez-vous des Dogis (kimonos) officiels ? Nous pouvons vous conseiller sur les marques officielles (Ozaki, Isami) ou fournir des modèles standards.
66: 37. Quelles sont les protections nécessaires pour les gradés ? Protège-dents, coquille, et éventuellement protège-tibias.
67: 38. Faites-vous du Randori (combat souple) ? Oui, de manière éducative pour tester l'application des techniques.
68: 39. Y a-t-il des cours d'armes ? Le Shorinji Kempo se pratique principalement à mains nues, mais le travail du Shakujo (bâton) existe pour les hauts gradés.
40: 40. Peut-on devenir enseignant au club ? Oui, via le cursus de formation fédéral une fois le 1er ou 2ème Dan obtenu.
70: ✨ Questions diverses (Le "Hub Prédictif")
71: 41. Puis-je venir regarder un cours avant d'essayer ? Bien sûr, vous êtes les bienvenus sur le bord du tapis.
72: 42. Est-ce trop tard pour commencer à 50 ans ? Jamais. Le Shorinji Kempo s'adapte aux capacités physiques de chacun.
73: 43. Le club est-il ouvert pendant l'été ? Généralement fermé en août, stages possibles en juillet.
74: 44. Comment s'appelle le professeur ? Contactez-nous pour plus de détails sur l'équipe enseignante.
75: 45. Comment s'inscrire ? Directement au dojo après votre cours d'essai avec le dossier d'inscription.
76: 46. Peut-on faire du Shorinji Kempo pour perdre du poids ? Oui, c'est une activité physique complète qui brûle beaucoup de calories.
77: 47. Y a-t-il des stages pour les débutants ? Oui, nous organisons régulièrement des stages de découverte le week-end.
78: 48. Est-ce que vous apprenez à crier (Kiai) ? Oui, le Kiai aide à libérer l'énergie et à surprendre l'adversaire.
79: 49. Puis-je venir avec un ami ? C'est même recommandé, c'est plus sympa de débuter à deux !
80: 50. Que signifie "Shorinji Kempo" ? "La loi du poing de la forêt de la petite cloche" (référence au temple Shaolin).
`;

const DEFAULT_SYSTEM_INSTRUCTION = (kb: string) => `Tu es l'assistant du club Shorinji Kempo Marseille. Réponds aux questions des visiteurs en utilisant EXCLUSIVEMENT ce document :
${kb}

Si la réponse n'y est pas, demande-leur de nous appeler au [ 06 89 09 05 44]. Ne sors jamais de ce cadre documentaire. Sois poli, concis et encourageant.`;

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
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = useCallback(async () => {
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
          systemInstruction: DEFAULT_SYSTEM_INSTRUCTION(knowledgeBase || KNOWLEDGE_BASE),
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
  }, [inputValue, knowledgeBase]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("glass-card ki-aura-dark flex flex-col rounded-[2.5rem] overflow-hidden border-white/5 relative h-full", className)}
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
            <h3 className="text-text-primary text-lg">Engagement Hub 2026</h3>
            <p className="micro-copy text-primary-gold">IA Conversationnelle Multimodale</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {onClose && (
            <button 
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-primary-gold transition-colors rounded-full hover:bg-white/5"
            >
              <X size={20} />
            </button>
          )}
          {!onClose && (
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-white/10 flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/expert${i}/40/40`} alt={`Expert Shorinji Kempo ${i}`} referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-label text-text-secondary uppercase tracking-tighter">Experts Disponibles</span>
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
                {msg.type === 'user' ? <User size={14} className="text-text-primary" /> : <Sparkles size={14} className="text-primary-gold" />}
              </div>

              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                msg.type === 'user' ? "bg-primary-gold text-text-primary rounded-tr-none" : "bg-white/5 text-text-secondary border border-white/5 rounded-tl-none"
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
        <div className="flex items-center gap-4 bg-surface-secondary border border-white/10 rounded-2xl p-2 focus-within:border-primary-gold/50 transition-all">
          <div className="flex items-center gap-1 px-2">
            <button className="p-2 text-text-secondary hover:text-primary-gold transition-colors rounded-lg hover:bg-white/5">
              <Mic size={20} />
            </button>
            <button className="p-2 text-text-secondary hover:text-primary-gold transition-colors rounded-lg hover:bg-white/5">
              <ImageIcon size={20} />
            </button>
          </div>
          
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Posez votre question..."
            className="flex-1 bg-transparent border-none outline-none text-text-primary text-sm py-3"
          />

          <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="gold-gradient p-3 rounded-xl text-text-primary disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2 text-[9px] text-text-secondary uppercase tracking-widest">
            <CheckCircle2 size={12} className="text-green-500" /> Chiffrement Quantique
          </div>
          <div className="flex items-center gap-2 text-[9px] text-text-secondary uppercase tracking-widest">
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
            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-text-secondary hover:border-primary-gold/50 hover:text-primary-gold transition-all"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
