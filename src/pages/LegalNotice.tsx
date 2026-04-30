import { Helmet } from 'react-helmet-async';

export default function LegalNotice() {
  return (
    <div className="pt-32 pb-20 bg-bg-main min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://shorinji-kempo-marseille.vercel.app/mentions-legales" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="animate-fade-in-up"
          style={{ animationDuration: '0.8s' }}
        >
          <h1 className="text-surface text-4xl md:text-6xl font-black mb-12">Mentions Légales</h1>
          
          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">1. Éditeur du site</h2>
              <p>
                Le site internet <strong>https://shorinji-kempo-marseille.vercel.app/</strong> est édité par l'association Shorinji Kempo Marseille, association régie par la loi du 1er juillet 1901.<br />
                Siège social : 38 Rue Raphaël Ponson, 13008 Marseille.<br />
                Directeur de la publication : Le Président de l'association Shorinji Kempo Marseille.<br />
                Contact email : <strong>shorinjikempomarseille@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">2. Hébergement</h2>
              <p>
                Le site est hébergé par la société Vercel Inc.<br />
                Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA.<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:underline">https://vercel.com</a><br />
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
              <p className="mt-4">
                Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sur quelque support ou par tout procédé que ce soit est interdite sans autorisation expresse. Le non-respect de cette interdiction constitue une contrefaçon susceptible d'engager la responsabilité civile et pénale du contrefacteur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">5. Protection des données personnelles (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Collecte :</strong> Les données éventuellement collectées via les formulaires de contact sont destinées exclusivement à l'usage interne de l'association pour répondre à vos demandes.</li>
                <li><strong>Conservation :</strong> Vos données ne sont ni vendues, ni louées, ni transmises à des tiers.</li>
                <li><strong>Exercice des droits :</strong> Pour exercer vos droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à : <strong>shorinjikempomarseille@gmail.com</strong>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">6. Cookies et Mesure d'audience</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites (via Google Search Console).
              </p>
              <p className="mt-4">
                Un "cookie" est un fichier de petite taille déposé sur votre terminal. Vous pouvez vous opposer à l'enregistrement de cookies en configurant les paramètres de votre navigateur internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface mb-4">7. Droit applicable</h2>
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut d'accord amiable, le différend sera porté devant les tribunaux compétents de Marseille.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
