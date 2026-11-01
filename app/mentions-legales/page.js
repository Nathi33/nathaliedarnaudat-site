import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales – Nathalie Darnaudat',
  description:
    'Mentions légales du site de Nathalie Darnaudat, télésecrétaire indépendante spécialisée dans le secteur médical et paramédical.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/mentions-legales/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Mentions légales – Nathalie Darnaudat',
    description:
      'Informations légales concernant le site de Nathalie Darnaudat, spécialisée dans le télésecrétariat médical et paramédical.',
    url: 'https://www.nathaliedarnaudat.fr/mentions-legales/',
    siteName: 'Nathalie Darnaudat',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-legal.webp',
        width: 1200,
        height: 630,
        alt: 'Mentions légales Nathalie Darnaudat',
      },
    ],
  },
};

export default function MentionsLegales() {
  return (
    <section className="section-legal bg-white position-relative">
      <div className="container py-5">

        {/* Titre */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">Mentions légales</h1>
          <p className="lead mb-0">
            Informations légales concernant le site de Nathalie Darnaudat,
            télésecrétaire indépendante spécialisée dans le secteur médical et paramédical.
          </p>
        </div>

        {/* Éditeur */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nom :</strong> Nathalie Darnaudat<br />
            <strong>Activité :</strong> Télésecrétariat médical et paramédical<br />
            <strong>Statut :</strong> Entreprise individuelle – Micro-entreprise<br />
            <strong>Adresse du siège social :</strong> 6 impasse de Moselle 33700 MERIGNAC<br />
            <strong>SIRET :</strong> 99334942200010<br />
            <strong>Téléphone :</strong>{' '}
            <Link
              href="tel:0763499510"
              className="legal-link"
              aria-label="Appeler Nathalie Darnaudat"
            >
              07 63 49 95 10
            </Link>
            <br />
            <strong>Email :</strong>{' '}
            <Link
              href="mailto:contact@nathaliedarnaudat.fr"
              className="legal-link"
              aria-label="Écrire à Nathalie Darnaudat"
            >
              contact@nathaliedarnaudat.fr
            </Link>
          </p>
        </div>

        {/* Directeur de publication */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Directeur de la publication</h2>
          <p>
            La directrice de la publication du site est Nathalie Darnaudat.
          </p>
        </div>

        {/* Hébergeur */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Hébergement</h2>
          <p>
            <strong>Hébergeur :</strong>{' '}
            <a
              href="https://www.ovhcloud.com/fr/"
              className="legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              OVHcloud
            </a>
            <br />
            <strong>Adresse :</strong> 2 rue Kellermann – 59100 Roubaix – France
            <br />
            <strong>Téléphone :</strong> 1007
          </p>
        </div>

        {/* Propriété intellectuelle */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site, notamment les textes,
            images, photographies, logos, graphismes et éléments visuels, est
            protégé par le droit de la propriété intellectuelle.
          </p>
          <p>
            Ces éléments sont la propriété de Nathalie Darnaudat ou de leurs
            titulaires respectifs. Toute reproduction, représentation,
            modification ou utilisation, totale ou partielle, sans autorisation
            préalable écrite est interdite, sauf disposition légale contraire.
          </p>
        </div>

        {/* Responsabilité */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Responsabilité</h2>
          <p>
            Les informations présentées sur ce site sont communiquées à titre
            informatif. Malgré le soin apporté à leur rédaction et à leur mise
            à jour, des erreurs ou omissions peuvent subsister.
          </p>
          <p>
            Nathalie Darnaudat ne saurait être tenue responsable des dommages
            directs ou indirects résultant de l’utilisation du site ou de
            l’impossibilité d’y accéder, dans les limites prévues par la
            réglementation applicable.
          </p>
        </div>

        {/* Données personnelles */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Données personnelles</h2>
          <p>
            Les informations transmises par l’intermédiaire du formulaire de
            contact sont utilisées uniquement pour répondre aux demandes
            reçues et reprendre contact avec les personnes concernées.
          </p>
          <p>
            Pour en savoir plus sur la collecte et le traitement des données
            personnelles, les durées de conservation et les droits des
            utilisateurs, veuillez consulter la{' '}
            <Link href="/politique-confidentialite/" className="legal-link">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>

        {/* SEO secondaire */}
        <div data-aos="fade-up" className="mb-5">
          <p className="text-muted">
            Nathalie Darnaudat propose des prestations de télésecrétariat
            médical et paramédical à distance, notamment l’accueil téléphonique
            et la gestion des agendas des professionnels de santé et des
            structures médicales et paramédicales.
          </p>
        </div>

        {/* Bouton retour */}
        <div data-aos="fade-up" className="mb-3 text-center">
          <Link href="/" className="btn btn-turquoise btn-lg">
            Retour à l’accueil
          </Link>
        </div>

        {/* JSON-LD pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Nathalie Darnaudat',
              description:
                'Télésecrétariat médical et paramédical : accueil téléphonique et gestion des agendas.',
              url: 'https://www.nathaliedarnaudat.fr',
              logo: 'https://www.nathaliedarnaudat.fr/images/logo.png',
              telephone: '+33763499510',
              email: 'contact@nathaliedarnaudat.fr',
              areaServed: {
                '@type': 'Country',
                name: 'France',
              },
              sameAs: [
                'https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative',
                'https://www.facebook.com/profile.php?id=61587288295204',
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
