import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat',
  description: 'Télésecrétaire indépendante spécialisée dans la gestion des appels et des agendas pour médecins et infirmiers libéraux. Accueil patient professionnel, gestion des urgences et prise de rendez-vous.',
  metadataBase: new URL("https://www.nathaliedarnaudat.fr"),
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat',
    description: 'Service de télésecrétariat médical à distance : gestion des appels patients, prise de rendez-vous et organisation du cabinet.',
    url: 'https://www.nathaliedarnaudat.fr',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Télésecrétariat paramédical – Nathalie Darnaudat',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Home() {
  const services = [
    { title: 'Accueil téléphonique médical', description: 'Réponse professionnelle et bienveillante à vos appels patients.', icon: 'bi-telephone' },
    { title: 'Prise de messages patients', description: 'Collecte d’informations claires et transmission rapide.', icon: 'bi-chat-left-text' },
    { title: 'Gestion des urgences', description: 'Identification et priorisation des situations urgentes selon vos consignes.', icon: 'bi-exclamation-circle' },
    { title: 'Organisation du cabinet', description: 'Adaptation complète à votre fonctionnement et à vos consignes.', icon: 'bi-gear' },
    { title: 'Gestion des rendez-vous', description: 'Planification et suivi des rendez-vous pour optimiser votre agenda.', icon: 'bi-calendar-check' },
  ];

  const atouts = [
    { icon: 'bi-shield-check', title: 'Confidentialité', text: 'Respect strict du secret professionnel.' },
    { icon: 'bi-person-check', title: 'Interlocutrice unique', text: 'Une relation directe, humaine et personnalisée.' },
    { icon: 'bi-lightning-charge', title: 'Réactivité', text: 'Transmission rapide des informations importantes.' },
    { icon: 'bi-heart', title: 'Bienveillance', text: 'Un accueil rassurant pour vos patients.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section section-with-wave-bottom bg-white position-relative mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center mb-4 mb-md-0" data-aos="fade-right">
              <Image
                src="/images/Logo.webp"
                alt="Logo Nathalie Darnaudat"
                width={450}
                height={450}
                style={{ width: 'auto', height: 'auto' }}
                loading="eager"
                className="img-fluid"
                unoptimized
                priority
              />
            </div>

            <div className="col-md-7" data-aos="fade-left" data-aos-delay="100">
              <h1 className="display-5 mb-5">Télésecrétariat médical pour médecins et infirmiers libéraux</h1>
              <h2 className="signature mb-4">Nathalie Darnaudat</h2>
              <p className="lead mb-4">
                Télésecrétaire indépendante spécialisée dans l’accompagnement des <strong>médecins et infirmiers libéraux</strong>, j’assure la gestion de vos appels patients et de votre agenda à distance.
              </p>
              <p className="text-muted mb-4">
                J’accompagne également d’autres <strong>professionnels paramédicaux</strong> (kinésithérapeutes, ostéopathes, psychologues, ...) selon leurs besoins.
              </p>
              <p className="text-muted mb-5">
                Vous restez pleinement concentré sur vos patients, je m’occupe de vos appels avec professionnalisme, confidentialité et bienveillance.
              </p>
              <a href="/contact" className="btn btn-turquoise btn-lg px-4" data-aos="zoom-in" data-aos-delay="200">Discutons de votre organisation</a>
            </div>
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path fill="url(#grad)" fillOpacity="1" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15848F" />
                <stop offset="100%" stopColor="#8B2F78" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Présentation rapide */}
      <section className="section section-after-wave section-with-wave-bottom bg-white position-relative" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5">Une télésecrétaire dédiée à la sérénité de votre cabinet</h2>
          <div className="row align-items-top">
            <div className="col-md-6 mb-4 mb-md-0">
              <p>
                Forte de plus de <strong>10 ans d’expérience dans le secteur médico-administratif</strong>, j’accompagne aujourd’hui principalement les <strong>médecins et infirmiers libéraux</strong> dans la gestion de leurs appels patients et de leur agenda, afin de leur permettre de se concentrer pleinement sur leurs soins.
              </p>
              <p>
                J’interviens également auprès d’autres professionnels paramédicaux selon leurs besoins.
              </p>
              <p>
                Mon rôle est simple : <strong>vous libérer des interruptions téléphoniques</strong>, tout en garantissant à vos patients un accueil professionnel et rassurant.
              </p>
              <p>
                Chaque appel est traité selon vos consignes : prise de message, filtrage des urgences et transmission rapide des informations importantes.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
              <div className="p-4 rounded shadow-sm bg-light">
                <ul className="list-unstyled mb-0">
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion des appels entrants patients</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Identification et filtrage des urgences médicales</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Prise de messages clairs et précis</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion et organisation de votre agenda</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Prise, modification et annulation de rendez-vous</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Transmission rapide et confidentielle des informations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-top wave-inverse">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path fill="url(#grad)" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="section section-after-wave section-with-wave-bottom bg-white position-relative">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Mes prestations de télésecrétariat</h2>
          <div className="row">
            {services.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center atout-card border-0 shadow-sm">
                    <div className="card-body">
                      <i className={`bi ${service.icon} display-5 text-brand mb-3`} aria-hidden="true"></i>
                      <h3>{service.title}</h3>
                      <p className="text-muted">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="500">
            <Link href="/tarifs" className="btn btn-turquoise btn-lg px-4">
              Voir tous mes tarifs
            </Link>
          </div>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path fill="url(#grad)" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Valeurs / Atouts */}
      <section className="section section-after-wave section-with-wave-bottom bg-white position-relative">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Mes engagements pour votre cabinet médical</h2>
          <div className="row">
            {atouts.map((atout, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link href="/about" className="text-decoration-none">
                  <div className="card h-100 text-center atout-card border-0 shadow-sm">
                    <div className="card-body">
                      <i className={`bi ${atout.icon} display-5 text-brand mb-3`} aria-hidden="true"></i>
                      <h3>{atout.title}</h3>
                      <p className="text-muted">{atout.text}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="wave-top wave-inverse">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path fill="url(#grad)" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* CTA final */}
      <section className="section section-after-wave bg-white position-relative text-center mb-5" data-aos="fade-up">
        <div className="container">
          <h3>Et si vous retrouviez de la sérénité dans la gestion de vos appels patients ?</h3>
          <p className='mb-4'>Je m’occupe de vos appels et de votre agenda, vous restez pleinement concentré sur vos patients.</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3" data-aos="fade-up" data-aos-delay="150">
            <Link href="/contact" className="btn btn-turquoise btn-lg w-md-auto">
              Parlons de vos besoins      
            </Link>
            <Link href="/tarifs" className="btn btn-turquoise btn-lg w-md-auto">
              Voir mes packs et tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Organisation pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nathalie Darnaudat",
            "url": "https://www.nathaliedarnaudat.fr",
            "logo": "https://www.nathaliedarnaudat.fr/images/Logo.webp",
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
              "postalCode": "33920",
              "addressCountry": "FR"
            }
          }),
        }}
      />
    </>
  );
}