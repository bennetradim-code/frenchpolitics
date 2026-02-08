import { Link } from 'react-router-dom'

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 font-medium transition">
        &larr; Retour à l'accueil
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>

          {/* Nature du site */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Nature du site</h2>
            <p className="text-gray-700 leading-relaxed">
              French Politics Tracker est un projet à vocation informative et citoyenne,
              sans but lucratif. Il a pour objet de compiler et de présenter, de manière
              structurée, des informations publiquement disponibles relatives aux affaires
              judiciaires impliquant des personnalités politiques françaises.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Ce site est <strong>généré et maintenu de manière automatisée</strong> à
              l'aide d'outils d'intelligence artificielle qui compilent des données issues
              de sources publiques (articles de presse, décisions de justice publiées,
              sites institutionnels). Il ne constitue en aucun cas un organe de presse
              au sens de la loi du 29 juillet 1881.
            </p>
          </section>

          {/* Présomption d'innocence */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Présomption d'innocence</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-gray-800 leading-relaxed font-medium">
                Conformément à l'article 9-1 du Code civil et à l'article 6§2 de la
                Convention européenne des droits de l'homme, toute personne mentionnée
                sur ce site est <strong>présumée innocente</strong> tant qu'elle n'a pas
                été déclarée coupable par une décision de justice définitive.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                La mention d'une mise en examen, d'une enquête préliminaire, d'une garde
                à vue ou de toute autre procédure judiciaire en cours ne préjuge en rien
                de la culpabilité de la personne concernée. Ces mentions sont faites dans
                un but strictement informatif et s'appuient sur des sources publiques vérifiables.
              </p>
            </div>
          </section>

          {/* Sources des données */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Sources des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Les informations présentées sur ce site proviennent exclusivement de
              sources publiques et vérifiables :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
              <li>Articles de presse de médias nationaux reconnus (Le Monde, Mediapart, France Info, etc.)</li>
              <li>Publications officielles (Journal officiel, Assemblée nationale, Sénat)</li>
              <li>Décisions de justice rendues publiques</li>
              <li>Encyclopédies collaboratives (Wikipédia)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Chaque incident judiciaire répertorié est accompagné de ses sources, accessibles
              par des liens hypertextes vers les articles originaux. Seuls les incidents pour
              lesquels au moins une source vérifiable existe sont affichés.
            </p>
          </section>

          {/* Traitement automatisé */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Traitement automatisé des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données présentées sur ce site sont compilées à l'aide d'outils
              d'intelligence artificielle (modèles de langage). Malgré les vérifications
              effectuées, des <strong>erreurs, inexactitudes ou informations obsolètes</strong> peuvent
              subsister. L'éditeur du site ne saurait garantir l'exactitude,
              l'exhaustivité ni l'actualité de l'ensemble des informations publiées.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              En cas d'erreur constatée, nous nous engageons à procéder à la
              correction ou à la suppression des informations concernées dans les
              meilleurs délais (voir « Droit de rectification » ci-dessous).
            </p>
          </section>

          {/* Droit de rectification */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Droit de rectification et de suppression</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-gray-800 leading-relaxed">
                Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique,
                aux fichiers et aux libertés, ainsi qu'au Règlement général sur la protection
                des données (RGPD), toute personne mentionnée sur ce site dispose d'un
                <strong> droit d'accès, de rectification et de suppression</strong> des données la concernant.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Toute personne souhaitant exercer ce droit, signaler une erreur factuelle
                ou demander le retrait d'informations la concernant peut contacter l'éditeur
                du site à l'adresse suivante :
              </p>
              <p className="text-blue-700 font-semibold mt-2">
                contact-frenchpolitics [at] proton.me
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Toute demande légitime sera traitée dans un délai de 72 heures.
              </p>
            </div>
          </section>

          {/* Droit de réponse */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Droit de réponse</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément à l'article 6-IV de la loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l'économie numérique (LCEN), toute personne nommée
              ou désignée sur ce site dispose d'un <strong>droit de réponse</strong>.
              Les demandes d'exercice de ce droit peuvent être adressées à l'adresse
              de contact mentionnée ci-dessus.
            </p>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              L'éditeur du site ne pourra être tenu responsable des dommages directs
              ou indirects résultant de l'utilisation des informations contenues sur
              ce site. Les informations sont fournies « en l'état » et à titre
              purement indicatif.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Les liens hypertextes présents sur ce site renvoyant vers des sites
              tiers n'engagent pas la responsabilité de l'éditeur quant au contenu
              de ces sites externes.
            </p>
          </section>

          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Hébergement</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site est hébergé par <strong>Vercel Inc.</strong>, 440 N Bashaw St,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              Le code source de ce site est disponible publiquement. Les données
              factuelles relatives aux affaires judiciaires ne sont pas protégeables
              par le droit d'auteur. Les images utilisées sont des placeholders
              générés automatiquement (aucune photographie de tiers n'est utilisée).
            </p>
          </section>

          {/* Date de mise à jour */}
          <section className="text-sm text-gray-500 border-t pt-4">
            <p>Dernière mise à jour de cette page : {new Date().toLocaleDateString('fr-FR')}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
