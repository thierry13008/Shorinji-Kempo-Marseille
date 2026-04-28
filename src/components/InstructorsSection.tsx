import { motion } from 'motion/react';
import ScrollReveal from '@/src/components/ScrollReveal';
import { cn } from '@/src/lib/utils';
import { Download } from 'lucide-react';

const instructors = [
  {
    name: "Sensei Olivier Beyer",
    role: "5ème Dan",
    image: "https://i.ibb.co/6pjTwv8/instructeur-1-BIS.png",
  },
  {
    name: "Assistante Yuko Irie Beyer",
    role: "3ème DAN",
    image: "https://i.ibb.co/N6C1DzjM/Yuko-IRIE-BEYER-webp.webp",
  },
  {
    name: "Assistante Marie Valentin",
    role: "3ème DAN",
    image: "https://i.ibb.co/cSs5RBFG/instructeur-4-BIS.png",
  },
  {
    name: "Assistant\nBenoit\nAllix",
    role: "1ERE DAN",
    image: "https://i.ibb.co/4RfgQzXV/instructeur-3-BIS.png",
    position: "center 20%"
  }
];

export default function InstructorsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-surface">
      {/* Background with parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://i.ibb.co/hxxzMwG9/fond-header-webp.webp" 
          alt="Fond décoratif Shorinji Kempo"
          referrerPolicy="no-referrer"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-primary mb-4"
          >
            Nos Instructeurs de Shorinji Kempo
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: "center", willChange: "transform, opacity" }}
            className="h-1 w-24 bg-primary-gold mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => {
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.2}
                className="relative group"
              >
                {/* Glassmorphism Card with Ki Aura */}
                <div 
                  className="bg-[#1A243A]/10 backdrop-blur-[16px] ki-aura-dark p-8 h-full flex flex-col rounded-[40px] border border-white/5"
                >
                  {/* Image with Parallax Revelation (emerging from shadow) */}
                  <div className="relative aspect-[4/5] w-4/5 mx-auto rounded-2xl overflow-hidden mb-8 bg-black/40">
                    <img 
                      src={instructor.image} 
                      alt={`Portrait de ${instructor.name} - Instructeur Shorinji Kempo`}
                      className="w-full h-full object-cover transition-all duration-700 parallax-reveal"
                      style={{ objectPosition: (instructor as any).position || 'center' }}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width={400}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Kinetic Typography */}
                  <div className="space-y-3 mt-auto text-center flex flex-col items-center">
                    <h3 className="text-white">
                      <span className="whitespace-pre-line text-balance">{instructor.name}</span>
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + (index * 0.2), duration: 0.8 }}
                      style={{ transformOrigin: "center", willChange: "transform, opacity" }}
                      className="h-[1px] w-[40px] bg-primary-gold/50 mx-auto"
                    />
                    <p className="micro-copy">
                      {instructor.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-24 flex justify-center">
          <a 
            href="https://drive.google.com/file/d/1vnFGVh97khWmP9wlkZFw5kCni7uZTwxB/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white hover:text-primary-gold transition-colors group"
          >
            <span className="h-[1px] w-12 bg-primary-gold/30 group-hover:w-20 transition-all"></span>
            <span className="text-xs font-bold uppercase tracking-widest">CALENDRIER DES EVENEMENTS</span>
            <Download size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
