import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Télésecrétariat médical et paramédical – Nathalie Darnaudat',
  description: 'Télésecrétaire indépendante spécialisée médical et paramédical : gestion des appels patients, filtrage, messages et organisation. Offrez-vous plus de sérénité au cabinet.',
  openGraph: {
    title: 'Télésecrétariat médical et paramédical – Nathalie Darnaudat',
    description: 'Télésecrétaire indépendante spécialisée médical et paramédical : gestion des appels patients, filtrage, messages et organisation.',
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
  robots: 'index, follow',
};

export default function Home() {
  const services = [
    { title: 'Accueil téléphonique', description: 'Réponse professionnelle et bienveillante à vos appels.', icon: 'bi-telephone' },
    { title: 'Prise de messages', description: 'Collecte d’informations claires et transmission rapide.', icon: 'bi-chat-left-text' },
    { title: 'Filtrage des urgences', description: 'Priorisation et gestion des appels selon vos consignes.', icon: 'bi-exclamation-circle' },
    { title: 'Organisation sur mesure', description: 'Adaptation complète à votre fonctionnement.', icon: 'bi-gear' },
    { title: 'Gestion des plannings', description: 'Planification et suivi des rendez-vous pour optimiser votre agenda.', icon: 'bi-calendar-check' },
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
      <section className="hero-section section-with-wave-bottom bg-white position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo qui arrive de la gauche */}
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

            {/* Texte qui arrive de la droite */}
            <div className="col-md-7" data-aos="fade-left" data-aos-delay="100">
              <h1 className="display-5 fw-bold mb-3">Télésecrétaire indépendante pour professionnels de santé</h1>
              <h2 className="h4 mb-3 text-muted">Nathalie Darnaudat</h2>
              <p className="lead mb-2">
                Télésecrétaire indépendante et assistante administrative expérimentée, j’accompagne les <strong>infirmiers, kinésithérapeutes, ostéopathes, psychologues et médecins</strong> dans la gestion de leurs appels patients.
              </p>
              <p className="text-muted mb-4">
                Vous restez pleinement concentré sur vos patients, je m’occupe de vos appels avec professionnalisme, confidentialité et bienveillance.
              </p>
              <p className="text-muted mb-4">
                Service flexible, sans engagement, adapté aux contraintes de votre activité médicale.
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
                <stop offset="0%" stopColor="#00CED1" />
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
                Forte de plus de <strong>10 ans d’expérience dans le secteur médico-administratif</strong>, j’accompagne aujourd’hui les infirmiers libéraux, kinésithérapeutes, ostéopathes, psychologues et médecins dans la gestion de leurs appels patients.
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
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2" aria-hidden="true"></i>Gestion des appels entrants patients</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2" aria-hidden="true"></i>Prise de messages clairs et précis</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2" aria-hidden="true"></i>Gestion et suivi des rendez-vous patients</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2" aria-hidden="true"></i>Filtrage des urgences et réorientation selon vos consignes</li>
                  <li><i className="bi bi-check-lg text-info me-2" aria-hidden="true"></i>Transmission rapide et confidentielle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-top wave-inverse">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path
              fill="url(#grad)"
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            />
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
                      <i className={`bi ${service.icon} display-5 text-info mb-3`} aria-hidden="true"></i>
                      <h5>{service.title}</h5>
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
            <path
              fill="url(#grad)"
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            />
          </svg>
        </div>
      </section>

      {/* Valeurs / Atouts */}
      <section className="section section-after-wave section-with-wave-bottom bg-white position-relative">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Mes engagements pour votre cabinet</h2>
          <div className="row">
            {atouts.map((atout, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link href="/about" className="text-decoration-none">
                  <div className="card h-100 text-center atout-card border-0 shadow-sm">
                    <div className="card-body">
                      <i className={`bi ${atout.icon} display-5 text-info mb-3`} aria-hidden="true"></i>
                      <h5>{atout.title}</h5>
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
            <path
              fill="url(#grad)"
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            />
          </svg>
        </div>
      </section>

      {/* CTA final */}
      <section className="section section-after-wave bg-white position-relative text-center" data-aos="fade-up">
        <div className="container">
          <h3>Et si vous retrouviez la tranquillité au cabinet ?</h3>
          <p>Je m’occupe de vos appels, vous vous concentrez sur vos patients.</p>
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
    </>
  );
}
