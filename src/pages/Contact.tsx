import { 
  User, 
  ShieldCheck, 
  Clock, 
  Zap, 
  ArrowRight,
  Eye,
  Lock,
  Leaf
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import EngagementHub from '@/src/components/EngagementHub';
import ScrollReveal from '@/src/components/ScrollReveal';

export default function Contact() {
  const [intentScore] = useState(85);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- Left Column: Contextual Insights & Trust --- */}
        <div className="lg:col-span-4 space-y-8">
          <ScrollReveal 
            className="glass-card ki-aura-dark p-8 rounded-[24px] border-primary-gold/10"
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
          </ScrollReveal>

          {/* Privacy & Ethics */}
          <ScrollReveal 
            delay={0.2}
            className="glass-card ki-aura-dark p-8 rounded-[24px] border-white/5"
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
          </ScrollReveal>
        </div>

        {/* --- Right Column: Multimodal Interaction Hub --- */}
        <div className="lg:col-span-8 flex flex-col h-[700px]">
          <EngagementHub />
        </div>

      </div>

      {/* --- Strategic Note Section --- */}
      <div className="max-w-7xl mx-auto mt-32 border-t border-white/5 pt-20">
        <ScrollReveal className="glass-card ki-aura-dark p-12 rounded-[24px] border-white/5">
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
        </ScrollReveal>
      </div>
    </div>
  );
}
