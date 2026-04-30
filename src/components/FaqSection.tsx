import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ScrollReveal from '@/src/components/ScrollReveal';

const faqItems = [
  { q: "À quel âge peut-on commencer le Shorinji Kempo ?", a: "Le Shorinji Kempo est accessible dès 9 ans. Nous proposons des cours adaptés pour les enfants, les adolescents et les adultes. Il n'y a pas d'âge maximum pour débuter. La sécurité et l'accueil des débutants sont nos priorités absolues." },
  { q: "Faut-il être déjà sportif pour commencer ?", a: "Absolument pas ! Le Shorinji Kempo s'adapte à tous les niveaux. La progression est graduelle et respectueuse de votre rythme. Nos débutants viennent souvent sans aucune expérience sportive préalable." },
  { q: "Est-ce dangereux ? Y a-t-il des risques de blessures ?", a: "La sécurité est notre priorité. Les techniques sont enseignées avec contrôle et bienveillance. Nous utilisons des protections et le taux de blessures est extrêmement faible. On apprend à se protéger, pas à se blesser." },
  { q: "Peut-on essayer gratuitement avant de s'inscrire ?", a: "Oui ! Nous offrons une séance d'essai gratuite pour découvrir le Shorinji Kempo en toute tranquillité. Aucune obligation d'inscription. Venez simplement avec une tenue de sport confortable." },
  { q: "Quel est le tarif des cours ?", a: "Nos tarifs sont transparents. Cotisations adultes : à partir de 195€ hors licences, enfants 150€ hors licences. Possibilité de payer au trimestre, se renseigner auprès du professeur." },
  { q: "Que faut-il apporter pour le premier cours ?", a: "Pour votre premier cours, un simple jogging et un t-shirt suffisent. Vous pratiquerez pieds nus sur des tatamis. Pensez simplement à apporter une bouteille d'eau et votre sourire !" }
];

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-48 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="micro-copy text-primary-gold mb-4 block uppercase tracking-widest font-bold">FAQ</span>
          <h2 className="text-surface text-4xl md:text-6xl font-medium mb-6">Questions Fréquentes</h2>
          <p className="text-slate-600 text-xl">Tout ce qu'il faut savoir avant de franchir les portes du dojo. La sécurité et l'accueil des débutants sont nos priorités.</p>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-bg-main border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <CheckCircle size={18} className="text-primary-gold" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Débutants bienvenus – sécurité assurée</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-bg-main border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <CheckCircle size={18} className="text-primary-gold" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">100% Bienveillance & Respect</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative group">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white ki-aura-light">
              <img 
                src="https://i.ibb.co/5X3v6dSz/olivierwebp.webp" 
                alt="Pratique du Shorinji Kempo - FAQ" 
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-primary-gold/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-gold/20 rounded-full blur-3xl -z-10"></div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="glass-card-light rounded-[32px] overflow-hidden border border-slate-200 shadow-sm ki-aura-light hover:border-primary-gold/30 transition-all duration-500">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 text-left text-surface hover:text-primary-gold transition-colors group"
                  aria-expanded={activeFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3 className="font-bold text-lg pr-8 group-hover:translate-x-2 transition-transform duration-300">{item.q}</h3>
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
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-700 leading-[1.6] text-lg border-t border-slate-100 mt-2">
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
  );
}
