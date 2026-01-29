import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact – Nathalie Darnaudat',
  description: 'Contactez Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente.',
  openGraph: {
    title: 'Contact – Nathalie Darnaudat',
    description: 'Contactez Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente.',
    url: 'https://www.nathaliedarnaudat.fr/contact',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-Contact.webp', width: 1200, height: 630, alt: 'Contact Nathalie Darnaudat' },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Contact() {
  return (
    <section className="section-contact bg-white py-5 mt-5">
      <div className="container">
        {/* Intro */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">Contact</h1>
          <p className="lead mb-0">
            Une question, un besoin ponctuel ou un accompagnement sur le long terme ?  
            Parlons-en.
          </p>
        </div>

        <div className="row justify-content-center">
          {/* Formulaire */}
          <div className="col-md-7" data-aos="fade-right">
            <div className="p-4 rounded shadow-sm">
              <h2 className="h4 mb-4">Formulaire de contact</h2>
              <ContactForm />
            </div>
          </div>

          {/* Infos contact */}
          <div className="col-md-5 mb-4" data-aos="fade-left">
            <div className="p-4 bg-light rounded h-100">
              <h2 className="h4 mb-3">Coordonnées</h2>
              <p className="mb-2">
                <i className="bi bi-telephone me-2 text-info" aria-hidden="true"></i>
                <a href="tel:+33763499510" className='contact-link'>07 63 49 95 10</a>
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope me-2 text-info" aria-hidden="true"></i>
                <a href="mailto:nathalie.drnt@outlook.fr" className='contact-link'>
                  nathalie.drnt@outlook.fr
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt me-2 text-info" aria-hidden="true"></i>
                Saint-Christoly-de-Blaye (33)
              </p>
              <p className="mb-0">
                <i className="bi bi-laptop me-2 text-info" aria-hidden="true"></i>
                Intervention à distance ou en présentiel (Gironde & Charente)
              </p>

              <hr />

              <p className="text-muted mb-0">
                Je vous réponds généralement sous 24 à 48 heures ouvrées.
              </p>

              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm mt-3">
                <iframe
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
  );
}

