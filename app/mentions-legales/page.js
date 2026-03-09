import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales – Nathalie Darnaudat',
  description: "Mentions légales du site de Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente. Télésecrétariat médical et paramédical, gestion d'appels et dossiers patients.",
  openGraph: {
    title: 'Mentions légales – Nathalie Darnaudat',
    description: 'Mentions légales du site de Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente.',
    url: 'https://www.nathaliedarnaudat.fr/mentions-legales',
    siteName: 'Nathalie Darnaudat',
    locale: 'fr_FR',
    type: 'website',
    images: [
      { url: '/images/og-legal.webp', width: 1200, height: 630, alt: 'Mentions légales Nathalie Darnaudat' },
    ],
    robots: 'index, follow',
    canonical: 'https://www.nathaliedarnaudat.fr/mentions-legales'
  }
};

export default function MentionsLegales() {
  return (
    <section className="section-legal bg-white position-relative mt-5">
      <div className="container py-5">

        {/* Titre */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">Mentions légales</h1>
          <p className="lead mb-0">
            Informations légales concernant le site de Nathalie Darnaudat, assistante administrative indépendante.
          </p>
        </div>

        {/* Éditeur */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nom :</strong> Nathalie Darnaudat<br />
            <strong>Statut :</strong> Assistante administrative indépendante - Micro-entreprise<br />
            <strong>Siège Social :</strong> 33700 Mérignac, France<br />
            <strong>SIRET :</strong> 99334942200010<br />
            <strong>Téléphone :</strong> <Link href="tel:0763499510" className='legal-link' aria-label="Appeler Nathalie Darnaudat" rel="noopener noreferrer">07 63 49 95 10</Link><br />
            <strong>Email :</strong> <Link href="mailto:nathalie.drnt@outlook.fr" className='legal-link' aria-label="Écrire à Nathalie Darnaudat" rel="noopener noreferrer">nathalie.drnt@outlook.fr</Link>
          </p>
        </div>

        {/* Hébergeur */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Hébergement</h2>
          <p>
            <strong>Hébergeur :</strong> <a href="https://www.ovh.com" className='legal-link' target="_blank" rel="noopener noreferrer">OVH</a><br />
            <strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France<br />
            <strong>Téléphone :</strong> 1007
          </p>
        </div>

        {/* Propriété intellectuelle */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu du site (textes, images, logos, graphismes) est la propriété de Nathalie Darnaudat ou de ses partenaires. 
            Toute reproduction, distribution ou modification, totale ou partielle, est interdite sans autorisation écrite.
          </p>
        </div>

        {/* Responsabilité */}
        <div data-aos="fade-up" className="mb-5">
          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont fournies à titre indicatif. 
            Nathalie Darnaudat ne saurait être tenue responsable des erreurs, omissions ou dommages pouvant survenir de l’utilisation du site.
          </p>
        </div>

        {/* SEO secondaire */}
        <div data-aos="fade-up" className="mb-5">
          <p className="text-muted">
            Ce site web présente les services de Nathalie Darnaudat, assistante administrative indépendante spécialisée dans le télésecrétariat médical et paramédical, la gestion des appels et des dossiers patients en Gironde et Charente.
          </p>
        </div>

        {/* Bouton retour */}
        <div data-aos="fade-up" className="mb-3 text-center">
          <Link href="/" className="btn btn-turquoise btn-lg">Retour à l’accueil</Link>
        </div>

        {/* JSON-LD pour SEO */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nathalie Darnaudat",
            "url": "https://www.nathaliedarnaudat.fr",
            "logo": "https://www.nathaliedarnaudat.fr/images/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative",
              "https://www.facebook.com/profile.php?id=61587288295204"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33 7 63 49 95 10",
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": "fr"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Saint-Christoly-de-Blaye",
              "addressLocality": "Saint-Christoly-de-Blaye",
              "addressRegion": "Gironde",
              "postalCode": "33700",
              "addressCountry": "FR"
            }
          })
        }} />
      </div>
    </section>
  );
}