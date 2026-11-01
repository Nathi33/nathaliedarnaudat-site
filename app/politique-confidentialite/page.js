import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité – Nathalie Darnaudat',
  description:
    'Découvrez comment Nathalie Darnaudat collecte, utilise et protège vos données personnelles dans le cadre de son activité de télésecrétariat médical et paramédical.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/politique-confidentialite/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Politique de confidentialité – Nathalie Darnaudat',
    description:
      'Informations sur la collecte, l’utilisation et la protection de vos données personnelles.',
    url: 'https://www.nathaliedarnaudat.fr/politique-confidentialite/',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-legal.webp',
        width: 1200,
        height: 630,
        alt: 'Politique de confidentialité Nathalie Darnaudat',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="section-privacy bg-white position-relative">
      <div className="container py-5">

        {/* Titre */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">
            Politique de confidentialité
          </h1>
          <p className="lead mb-0">
            Cette page présente les modalités de collecte, d’utilisation
            et de protection de vos données personnelles lorsque vous
            consultez ce site ou utilisez son formulaire de contact.
          </p>
        </div>

        {/* Responsable du traitement */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles
            collectées sur ce site est :
          </p>
          <p>
            <strong>Nathalie Darnaudat</strong>
            <br />
            Activité : Télésecrétariat médical et paramédical
            <br />
            Email :{' '}
            <Link
              href="mailto:contact@nathaliedarnaudat.fr"
              className="legal-link"
            >
              contact@nathaliedarnaudat.fr
            </Link>
          </p>
        </div>

        {/* Données collectées */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Données personnelles collectées</h2>
          <p>
            Lorsque vous utilisez le formulaire de contact, les
            informations suivantes peuvent être collectées :
          </p>
          <ul>
            <li>Nom et prénom ;</li>
            <li>Nom du cabinet ou de la structure, le cas échéant ;</li>
            <li>Numéro de téléphone et adresse e-mail ;</li>
            <li>Profession ou spécialité exercée ;</li>
            <li>Type de structure professionnelle ;</li>
            <li>Prestation souhaitée ;</li>
            <li>Estimation du volume d’appels ;</li>
            <li>Contenu du message transmis.</li>
          </ul>
          <p>
            Ces informations sont communiquées directement par la
            personne qui remplit le formulaire. Les champs facultatifs
            ne sont collectés que lorsqu’ils sont renseignés.
          </p>
          <p>
            Il est demandé de ne transmettre aucune donnée personnelle
            ou information médicale concernant des patients dans le
            formulaire de contact.
          </p>
        </div>

        {/* Finalités */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées uniquement pour les
            finalités suivantes :
          </p>
          <ul>
            <li>Répondre aux demandes envoyées depuis le formulaire de contact ;</li>
            <li>Recontacter les personnes ayant sollicité des informations ;</li>
            <li>Comprendre les besoins et la nature de l’activité professionnelle ;</li>
            <li>Préparer, le cas échéant, une proposition de collaboration adaptée ;</li>
            <li>Assurer le suivi des échanges liés à la demande.</li>
          </ul>
          <p>
            Les données ne sont pas utilisées pour envoyer des
            communications commerciales sans rapport avec la demande
            initiale.
          </p>
        </div>

        {/* Base légale */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Base légale du traitement</h2>
          <p>
            Le traitement des données transmises par le formulaire
            repose principalement sur les démarches précontractuelles
            effectuées à la demande de la personne qui souhaite obtenir
            des renseignements ou une proposition de prestation.
          </p>
          <p>
            Certains traitements techniques nécessaires à la sécurité
            et au bon fonctionnement du site peuvent également reposer
            sur l’intérêt légitime du responsable du traitement.
          </p>
        </div>

        {/* Destinataires */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Destinataires des données</h2>
          <p>
            Les données sont destinées à Nathalie Darnaudat. Elles
            peuvent également être traitées par les prestataires
            techniques intervenant dans le fonctionnement du site
            et la transmission des demandes.
          </p>

          <p>
            Le formulaire de contact utilise le service <strong>EmailJS </strong>
            afin de transmettre les informations communiquées par
            e-mail à l’adresse professionnelle de Nathalie Darnaudat.
            Une réponse automatique peut également être envoyée à
            l’adresse e-mail indiquée par la personne ayant rempli
            le formulaire.
          </p>

          <p>
            EmailJS indique que ses infrastructures de traitement
            et de stockage sont situées aux États-Unis. Des données
            transmises par le formulaire peuvent donc faire l’objet
            d’un transfert hors de l’Union européenne. EmailJS
            indique s’appuyer sur des clauses contractuelles types
            pour encadrer ces transferts.
          </p>

          <p>
            Pour en savoir plus sur le traitement des données par
            ce prestataire, vous pouvez consulter sa{' '}
            <a
              href="https://www.emailjs.com/legal/privacy-policy/"
              className="legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité
            </a>.
          </p>

          <p>
            Le site est hébergé par le prestataire indiqué dans les
            mentions légales. Les données peuvent également transiter
            par le service de messagerie professionnelle utilisé
            pour recevoir les demandes.
          </p>

          <p>
            Les données ne sont ni vendues ni louées à des tiers.
            Elles ne sont communiquées qu’aux prestataires intervenant
            dans le cadre des finalités décrites ci-dessus.
          </p>
        </div>

        {/* Conservation */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Durée de conservation</h2>
          <p>
            Les demandes reçues sont conservées pendant le temps
            nécessaire à leur traitement et au suivi des échanges.
          </p>
          <p>
            Lorsqu’une demande n’aboutit pas à une collaboration,
            les données sont conservées pendant une durée maximale
            de trois ans à compter du dernier contact émanant de
            la personne concernée, sous réserve des obligations
            légales applicables.
          </p>
          <p>
            En cas de collaboration, les données nécessaires à la
            gestion de la relation professionnelle sont conservées
            pendant les durées prévues par les obligations légales
            et comptables.
          </p>
          <p>
            Les données présentes dans les e-mails reçus et les
            éventuelles données techniques conservées par les
            prestataires sont soumises aux modalités de conservation
            propres aux services concernés.
          </p>
        </div>

        {/* Cookies et traceurs */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Cookies et traceurs</h2>
          <p>
            Le site n’utilise pas, à notre connaissance, d’outil
            de mesure d’audience ou de publicité tel que Google
            Analytics ou un pixel publicitaire.
          </p>
          <p>
            Les composants techniques utilisés pour l’affichage
            du site, ses animations et sa navigation ne sont pas
            destinés à suivre le comportement des visiteurs à des
            fins publicitaires.
          </p>
          <p>
            Une carte Google Maps est proposée sur la page
            Localisation. Elle n’est pas chargée automatiquement :
            elle s’affiche uniquement à la demande du visiteur.
            Son activation entraîne le chargement d’un service
            externe de Google, susceptible de traiter certaines
            données techniques et d’utiliser des traceurs selon
            les modalités définies par Google.
          </p>
          <p>
            Pour en savoir plus sur les pratiques de Google,
            vous pouvez consulter sa{' '}
            <a
              href="https://policies.google.com/privacy?hl=fr"
              className="legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité
            </a>.
          </p>
          <p>
            En dehors de ce service externe, aucun outil publicitaire
            ou de suivi statistique n’a été identifié dans les
            composants du site examinés à ce jour. Cette information
            pourra être actualisée en cas d’ajout de nouveaux services
            ou outils.
          </p>
        </div>

        {/* Droits */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Vos droits</h2>
          <p>
            Conformément à la réglementation applicable en matière
            de protection des données personnelles, notamment le
            RGPD, vous disposez, selon les conditions prévues par
            la réglementation, des droits suivants :
          </p>
          <ul>
            <li>Droit d’accès à vos données personnelles ;</li>
            <li>Droit de rectification des données inexactes ;</li>
            <li>Droit à l’effacement de vos données ;</li>
            <li>Droit à la limitation du traitement ;</li>
            <li>Droit d’opposition au traitement dans les conditions applicables ;</li>
            <li>Droit à la portabilité lorsque celui-ci est applicable.</li>
          </ul>
          <p>
            Pour exercer vos droits ou poser une question concernant
            vos données personnelles, vous pouvez contacter :
          </p>
          <p>
            <Link
              href="mailto:contact@nathaliedarnaudat.fr"
              className="legal-link"
            >
              contact@nathaliedarnaudat.fr
            </Link>
          </p>
          <p>
            Vous disposez également du droit d’introduire une
            réclamation auprès de la Commission nationale de
            l’informatique et des libertés (CNIL) :
            {' '}
            <a
              href="https://www.cnil.fr/"
              className="legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>.
          </p>
        </div>

        {/* Sécurité */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Sécurité des données</h2>
          <p>
            Nathalie Darnaudat met en œuvre des mesures adaptées
            afin de préserver la confidentialité et la sécurité
            des informations transmises, et d’éviter leur accès,
            leur utilisation ou leur divulgation non autorisés.
          </p>
        </div>

        {/* Mise à jour */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Modification de la politique de confidentialité</h2>
          <p>
            La présente politique de confidentialité peut être
            modifiée afin de tenir compte des évolutions réglementaires,
            techniques ou des modalités de fonctionnement du site.
          </p>
          <p>
            La version publiée sur cette page est celle applicable
            au moment de la consultation.
          </p>
        </div>

        {/* Retour */}
        <div data-aos="fade-up" className="mb-3 text-center">
          <Link href="/" className="btn btn-turquoise btn-lg">
            Retour à l’accueil
          </Link>
        </div>

      </div>
    </section>
  );
}
