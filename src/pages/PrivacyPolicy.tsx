import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-bg-main min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-surface text-4xl md:text-6xl font-black mb-12">Politique de Confidentialité</h1>
          
          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">1. Collecte des données</h2>
              <p>
                Nous collectons des informations lorsque vous remplissez notre formulaire de contact ou de réservation de séance gratuite. Les informations collectées incluent votre nom, votre adresse e-mail et votre numéro de téléphone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">2. Utilisation des informations</h2>
              <p>
                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Vous contacter par e-mail ou par téléphone suite à votre demande.</li>
                <li>Améliorer le service client et vos besoins de prise en charge.</li>
                <li>Vous envoyer des informations relatives aux activités du dojo.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">3. Confidentialité</h2>
              <p>
                Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quel raison, sans votre consentement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">4. Protection des informations</h2>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">5. Consentement</h2>
              <p>
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">6. Développement</h2>
              <p>
                Cette politique a été mise en place dans le cadre du site développé par <span className="text-primary-gold font-bold">KAIRYOS Web Agency</span>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
