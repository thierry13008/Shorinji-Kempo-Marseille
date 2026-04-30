import { CheckCircle, Phone } from 'lucide-react';
import ScrollReveal from '@/src/components/ScrollReveal';

const CONTACT_INFO = {
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
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-48 bg-transparent overflow-hidden">
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
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-ivory-silk/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 p-8 bg-primary-gold/5 border border-primary-gold/20 rounded-[32px]">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-gold bg-surface-high p-2">
                <img 
                  src="https://i.ibb.co/PGfXsmRk/logo-shorinji-kempo-bg.png" 
                  alt="Marseille Shorinji Kempo" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                  width={64}
                  height={64}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-white font-bold">Une question ?</p>
                <p className="text-ivory-silk/60">Contactez-nous ci-dessous</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <ScrollReveal className="glass-card ki-aura-dark p-10 md:p-12 rounded-[48px] border border-primary-gold/20">
              <h3 className="text-white text-2xl font-bold mb-2">Envoyez-nous un message</h3>
              <p className="text-ivory-silk/60 mb-8 font-bold uppercase tracking-widest text-xs">Remplissez le formulaire ci dessous</p>
              
              <div className="w-full overflow-hidden rounded-xl">
                <iframe 
                  data-tally-src="https://tally.so/embed/vG0JyA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="423" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Nous contacter directement"
                ></iframe>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="glass-card ki-aura-dark p-10 rounded-[24px] border border-primary-gold/20 text-center">
              <p className="text-on-surface-variant flex items-center justify-center gap-4 mb-6">
                <span className="h-px bg-white/10 flex-1"></span>
                <span className="micro-copy uppercase tracking-widest text-white">ou contactez nous Directement</span>
                <span className="h-px bg-white/10 flex-1"></span>
              </p>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                className="w-full bg-white text-surface font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all text-[16px] uppercase tracking-widest shadow-xl group"
              >
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-black" size={20} />
                </div>
                {CONTACT_INFO.phone}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
