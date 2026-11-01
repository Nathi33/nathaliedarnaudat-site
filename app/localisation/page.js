import Link from 'next/link';
import GoogleMap from '@/components/GoogleMap';

export const metadata = {
  title: 'Localisation – Nathalie Darnaudat',
  description:
    'Télésecrétaire indépendante spécialisée dans le secteur médical et paramédical, basée à Saint-Christoly-de-Blaye en Gironde. Prestations à distance partout en France.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/localisation/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Localisation – Nathalie Darnaudat',
    description:
      'Basée à Saint-Christoly-de-Blaye en Gironde, j’accompagne les professionnels et structures du secteur médical et paramédical à distance partout en France.',
    url: 'https://www.nathaliedarnaudat.fr/localisation/',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-localisation.webp',
        width: 1200,
        height: 630,
        alt: 'Localisation de Nathalie Darnaudat',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Localisation() {
  return (
    <section className="section-localisation bg-white py-5 mt-5">
      <div className="container">

        <h1
          className="display-5 fw-bold mb-4 text-center"
          data-aos="fade-up"
        >
          Où me trouver
        </h1>

        <p
          className="lead text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Basée à <strong>Saint-Christoly-de-Blaye (33920)</strong>,
          en Gironde, je propose mes prestations principalement
          à distance pour accompagner les professionnels et
          structures du secteur médical et paramédical.
        </p>

        <div data-aos="zoom-in" data-aos-delay="200">
          <GoogleMap />
        </div>

        <h2
          className="h3 mt-5 mb-3 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Des prestations à distance partout en France
        </h2>

        <p
          className="text-center text-muted mb-5"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Grâce aux outils de communication et aux logiciels
          professionnels, je peux assurer l’accueil téléphonique
          et la gestion des agendas de votre activité, où que
          vous soyez en France.
        </p>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="/contact" className="btn btn-turquoise btn-lg">
            Contactez-moi pour votre cabinet
          </Link>
        </div>

      </div>
    </section>
  );
}
