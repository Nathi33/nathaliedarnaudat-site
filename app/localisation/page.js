export const metadata = {
  title: 'Localisation – Nathalie Darnaudat',
  description: 'Localisation de Nathalie Darnaudat, télésecrétaire et assistante administrative indépendante à Saint-Christoly-de-Blaye (33), interventions à distance et ponctuellement sur place.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/localisation',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Localisation – Nathalie Darnaudat',
    description: 'Localisation de Nathalie Darnaudat, télésecrétaire et assistante administrative indépendante à Saint-Christoly-de-Blaye (33).',
    url: 'https://www.nathaliedarnaudat.fr/localisation',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-localisation.webp', width: 1200, height: 630, alt: 'Localisation de Nathalie Darnaudat' },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

import Link from 'next/link';

export default function Localisation() {
  return (
    <section className="section-localisation bg-white py-5 mt-5">
      <div className="container">
        {/* Titre */}
        <h1 className="display-5 fw-bold mb-4 text-center" data-aos="fade-up">
          Où me trouver
        </h1>

        {/* Texte descriptif */}
        <p className="lead text-center mb-5" data-aos="fade-up" data-aos-delay="100">
          Basée à <strong>Saint-Christoly-de-Blaye (33920)</strong>, j’interviens principalement à distance pour gérer vos appels et messages patients.  
          Au besoin, je peux me déplacer ponctuellement pour vous rencontrer ou vous assister sur place.
        </p>

        {/* Carte Google */}
        <div className="ratio ratio-16x9 mb-4 rounded overflow-hidden shadow" data-aos="zoom-in" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps?q=Saint-Christoly-de-Blaye&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Saint-Christoly-de-Blaye"
            aria-label="Carte interactive de Saint-Christoly-de-Blaye"
          ></iframe>
        </div>

        {/* Prestations à distance */}
        <h2 className="h3 mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="300">
          Prestations à distance
        </h2>
        <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="350">
          Mes prestations à distance me permettent d’accompagner des clients partout en France, tout en garantissant une gestion efficace et sécurisée de vos appels et messages.
        </p>

        {/* CTA discret */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Link href="/contact" className="btn btn-turquoise btn-lg">
            Contactez-moi pour votre cabinet
          </Link>
        </div>
      </div>
    </section>
  );
}