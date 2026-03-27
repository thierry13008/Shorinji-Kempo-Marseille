import React from 'react';
import { motion } from 'motion/react';

export default function LegalNotice() {
  return (
    <div className="pt-32 pb-20 bg-bg-main min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-surface text-4xl md:text-6xl font-black mb-12">Mentions Légales</h1>
          
          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">1. Éditeur du site</h2>
              <p>
                Le site internet <strong>shorinjikempo-marseille.fr</strong> est édité par l'association Shorinji Kempo Marseille.<br />
                Siège social : 38 Rue Raphaël Ponson, 13008 Marseille.<br />
                Directeur de la publication : Shorinji Kempo Marseille.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">2. Hébergement</h2>
              <p>
                Le site est hébergé par Google Cloud Platform.<br />
                Adresse : 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">3. Conception et Développement</h2>
              <p>
                Ce site a été développé avec passion par <span className="text-primary-gold font-bold">KAIRYOS Web Agency</span> pour les arts martiaux.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">5. Contact</h2>
              <p>
                Pour toute question, vous pouvez nous contacter par email à : <strong>thguey@gmail.com</strong>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
