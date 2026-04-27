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
                Le site internet <strong>https://shorinji-kempo-marseille.vercel.app/</strong> est édité par l'association Shorinji Kempo Marseille, association régie par la loi du 1er juillet 1901.
              </p>
              <p className="mt-2">
                Siège social : 38 Rue Raphaël Ponson, 13008 Marseille.
              </p>
              <p className="mt-2">
                Directeur de la publication : Le Président de l'association Shorinji Kempo Marseille.
              </p>
              <p className="mt-2">
                Contact email : <strong>shorinjikempomarseille@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">2. Hébergement</h2>
              <p>
                Le site est hébergé par la société <strong>Vercel Inc.</strong>
              </p>
              <p className="mt-2">
                Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA.
              </p>
              <p className="mt-2 text-sm italic">
                Note : L'infrastructure technique de l'hébergeur est sécurisée et répond aux normes de protection des données en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">3. Conception et Développement</h2>
              <p>
                Ce site a été conçu et développé avec expertise par <span className="text-primary-gold font-bold">KAIRYOS Web Agency</span>, agence spécialisée dans l'accompagnement numérique des structures d'arts martiaux.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, logos, etc.) est la propriété exclusive de l'association Shorinji Kempo Marseille ou de ses partenaires, au titre de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sur quelque support ou par tout procédé que ce soit est interdite sans autorisation expresse. Le non-respect de cette interdiction constitue une contrefaçon susceptible d'engager la responsabilité civile et pénale du contrefacteur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">5. Protection des données personnelles (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles.
              </p>
              <p className="mt-4">
                <strong>Collecte :</strong> Les données éventuellement collectées via les formulaires de contact sont destinées exclusivement à l'usage interne de l'association pour répondre à vos demandes.
              </p>
              <p className="mt-2">
                <strong>Conservation :</strong> Vos données ne sont ni vendues, ni louées, ni transmises à des tiers.
              </p>
              <p className="mt-2">
                <strong>Exercice des droits :</strong> Pour exercer vos droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à : <strong>shorinjikempomarseille@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">6. Cookies et Mesure d'audience</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites (via Google Search Console).
              </p>
              <p className="mt-2">
                Un "cookie" est un fichier de petite taille déposé sur votre terminal.
              </p>
              <p className="mt-2">
                Vous pouvez vous opposer à l'enregistrement de cookies en configurant les paramètres de votre navigateur internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">7. Droit applicable</h2>
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut d'accord amiable, le différend sera porté devant les tribunaux compétents de Marseille.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
