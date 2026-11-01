import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact – Télésecrétariat médical et paramédical – Nathalie Darnaudat',
  description:
    'Contactez Nathalie Darnaudat, télésecrétaire indépendante spécialisée dans le secteur médical et paramédical. Accueil téléphonique et gestion des agendas pour les professionnels et structures de santé.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/contact/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact – Télésecrétariat médical et paramédical – Nathalie Darnaudat',
    description:
      'Vous recherchez une solution de télésecrétariat médical et paramédical ? Contactez-moi pour échanger sur vos besoins en accueil téléphonique et gestion des agendas.',
    url: 'https://www.nathaliedarnaudat.fr/contact/',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-Contact.webp',
        width: 1200,
        height: 630,
        alt: 'Contact télésecrétariat médical et paramédical Nathalie Darnaudat',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Contact() {
  return (
    <>
      <section className="section-contact bg-white py-5 mt-5">
        <div className="container">

          {/* INTRODUCTION */}
          <div className="text-center mb-5" data-aos="fade-up">
            <h1 className="display-5 fw-bold mb-3">
              Contactez-moi
            </h1>

            <p className="lead mb-3">
              Vous êtes un professionnel du secteur médical ou paramédical
              et souhaitez déléguer votre <strong>accueil téléphonique </strong>
              ou la <strong>gestion de votre agenda</strong> ?
            </p>

            <p className="mb-0">
              Que vous exerciez individuellement ou au sein d’un cabinet
              regroupant plusieurs praticiens, je vous propose un accompagnement
              adapté à votre activité et à votre organisation.
              Parlons ensemble de vos besoins.
            </p>
          </div>

          <div className="row justify-content-center">

            {/* FORMULAIRE */}
            <div className="col-md-7" data-aos="fade-right">
              <div className="p-4 rounded shadow-sm">
                <h2 className="h4 mb-3">
                  Formulaire de contact
                </h2>

                <p className="text-muted mb-4">
                  Décrivez-moi votre activité, votre organisation et les
                  prestations recherchées. Je reviendrai vers vous pour
                  échanger sur votre projet.
                </p>

                <ContactForm />
              </div>
            </div>

            {/* COORDONNEES */}
            <div className="col-md-5 mb-4" data-aos="fade-left">
              <div className="p-4 bg-light rounded h-100">

                <h2 className="h4 mb-4">
                  Mes coordonnées
                </h2>

                <p className="mb-3">
                  <i
                    className="bi bi-telephone me-2 text-brand"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+33763499510"
                    className="contact-link"
                  >
                    07 63 49 95 10
                  </a>
                </p>

                <p className="mb-3">
                  <i
                    className="bi bi-envelope me-2 text-brand"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="mailto:contact@nathaliedarnaudat.fr"
                    className="contact-link"
                  >
                    contact@nathaliedarnaudat.fr
                  </a>
                </p>

                <p className="mb-3">
                  <i
                    className="bi bi-geo-alt me-2 text-brand"
                    aria-hidden="true"
                  ></i>
                  Basée à Saint-Christoly-de-Blaye (Gironde – 33)
                </p>

                <p className="mb-3">
                  <i
                    className="bi bi-laptop me-2 text-brand"
                    aria-hidden="true"
                  ></i>
                  Prestations à distance partout en France
                </p>

                <hr />

                <p className="text-muted mb-0">
                  Je vous réponds généralement sous 24 à 48 heures ouvrées.
                </p>

                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm mt-3">
                  <iframe
                    title="Carte de localisation Saint-Christoly-de-Blaye"
                    src="https://www.google.com/maps?q=Saint-Christoly-de-Blaye&output=embed"
                    loading="lazy"
                    aria-label="Carte de Saint-Christoly-de-Blaye"
                  ></iframe>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JSON-LD ORGANISATION POUR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Nathalie Darnaudat – Télésecrétariat médical et paramédical",
            "url": "https://www.nathaliedarnaudat.fr",
            "logo": "https://www.nathaliedarnaudat.fr/images/Logo.webp",
            "description":
              "Télésecrétariat indépendant spécialisé dans le secteur médical et paramédical : accueil téléphonique et gestion des agendas pour les professionnels et structures de santé.",
            "sameAs": [
              "https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative",
              "https://www.facebook.com/profile.php?id=61587288295204"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33 7 63 49 95 10",
              "email": "contact@nathaliedarnaudat.fr",
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": "fr"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saint-Christoly-de-Blaye",
              "addressRegion": "Gironde",
              "postalCode": "33920",
              "addressCountry": "FR"
            },
            "areaServed": {
              "@type": "Country",
              "name": "France"
            }
          }),
        }}
      />
    </>
  );
}