import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'À propos – Télésecrétariat médical et paramédical – Nathalie Darnaudat',
  description: 'Découvrez Nathalie Darnaudat, télésecrétaire indépendante spécialisée dans le secteur médical et paramédical. Plus de 10 ans d’expérience et un accompagnement personnalisé pour la gestion de vos appels et agendas.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/about/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'À propos – Télésecrétariat médical et paramédical – Nathalie Darnaudat',
    description: 'Une télésecrétaire indépendante à vos côtés pour assurer votre accueil téléphonique et la gestion de vos agendas.',
    url: 'https://www.nathaliedarnaudat.fr/about/',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-About-paramed.webp',
        width: 1200,
        height: 630,
        alt: 'À propos de Nathalie Darnaudat, télésecrétaire indépendante',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function About() {
  return (
    <>
      <section className="section-about bg-white position-relative mt-3">

        {/* Hero texte */}
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h1 className="display-5 fw-bold mb-3">
              Une télésecrétaire indépendante à vos côtés
            </h1>

            <p className="lead mb-0">
              J’accompagne les <strong>professionnels du secteur médical
              et paramédical ainsi que les structures de santé </strong>
              dans la gestion de leurs appels téléphoniques et de leurs
              agendas, pour leur permettre de se consacrer pleinement
              à leur activité et à leurs patients.
            </p>
          </div>
        </div>

        {/* PARCOURS / HISTOIRE */}
        <div className="container">
          <div className="row mb-5 align-items-center" data-aos="fade-up">

            {/* IMAGE */}
            <div className="col-md-5 mb-4 mb-md-0 d-flex align-items-center" data-aos="fade-right">
              <div className="text-center">
                <Image
                  src="/images/About-paramed.webp"
                  alt="Nathalie Darnaudat, télésecrétaire indépendante"
                  width={500}
                  height={500}
                  className="img-fluid rounded shadow"
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                  unoptimized
                />
              </div>
            </div>

            {/* TEXTE */}
            <div className="col-md-7" data-aos="fade-left">
              <h2 className="mb-3">Mon parcours</h2>

              <p>
                Avec plus de <strong>10 ans d’expérience dans le secteur
                médico-social et administratif</strong>, j’ai développé
                une solide expertise dans la gestion des appels,
                l’accueil téléphonique et l’organisation des flux
                d’information.
              </p>

              <p>
                Mon expérience au contact des professionnels de santé
                et des usagers m’a permis de comprendre les enjeux
                quotidiens de leurs activités : disponibilité,
                interruptions téléphoniques, gestion des demandes
                et importance d’une communication de qualité.
              </p>

              <p>
                C’est naturellement que je me suis orientée vers
                le télésecrétariat médical et paramédical à distance,
                avec une approche fondée sur la fiabilité,
                la discrétion et la réactivité.
              </p>

              <p>
                Aujourd’hui, je mets cette expérience au service
                des professionnels de santé et des structures
                regroupant plusieurs praticiens. J’assure leur
                accueil téléphonique et la gestion de leurs agendas
                en m’adaptant à leur organisation et à leurs consignes.
              </p>
            </div>

          </div>
        </div>

        {/* Wave après parcours */}
        <div className="wave-bottom mb-5">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: '100%' }}>
            <path fill="url(#grad1)" fillOpacity="1" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15848F" />
                <stop offset="100%" stopColor="#8B2F78" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* APPROCHE */}
        <div className="container mb-5">
          <div className="text-center mb-4" data-aos="fade-up">
            <h2>Mon approche</h2>
            <p className="text-muted">
              Un accompagnement personnalisé, fiable et adapté
              aux besoins de chaque professionnel et de chaque structure.
            </p>
          </div>

          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in">
                <i className="bi bi-check2-circle display-5 text-brand mb-3"></i>
                <h3>Rigueur</h3>
                <p className="text-muted">
                  Chaque appel et chaque message sont traités avec
                  attention et précision pour garantir une transmission
                  fiable des informations.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="100">
                <i className="bi bi-lightning-charge display-5 text-brand mb-3"></i>
                <h3>Réactivité</h3>
                <p className="text-muted">
                  Les informations importantes sont transmises
                  rapidement, dans le respect de vos consignes
                  et de vos priorités.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="150">
                <i className="bi bi-heart display-5 text-brand mb-3"></i>
                <h3>Qualité de l’accueil</h3>
                <p className="text-muted">
                  Un accueil humain, professionnel et rassurant,
                  essentiel pour instaurer une relation de confiance
                  avec vos patients.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Wave après approche */}
        <div className="wave-top">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: '100%' }}>
            <path fill="url(#grad2)" fillOpacity="1" d="M0,20 C360,0 1080,40 1440,20 L1440,0 L0,0 Z" />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B2F78" />
                <stop offset="100%" stopColor="#15848F" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* VALEUR AJOUTÉE */}
        <div className="container">
          <div className="bg-light p-4 rounded mb-5" data-aos="fade-up">

            <div className="text-center mb-4">
              <h2>Ce que je vous apporte</h2>
              <p className="text-muted">
                Un télésecrétariat fiable et personnalisé pour
                faciliter votre quotidien et améliorer votre organisation.
              </p>
            </div>

            <div className="row text-center g-4">

              <div className="col-md-4">
                <i className="bi bi-shield-lock display-5 text-brand mb-2"></i>
                <h3>Confidentialité</h3>
                <p className="text-muted">
                  Une attention constante portée à la confidentialité
                  des échanges et à la protection des données de vos patients.
                </p>
              </div>

              <div className="col-md-4">
                <i className="bi bi-person-check display-5 text-brand mb-2"></i>
                <h3>Interlocutrice unique</h3>
                <p className="text-muted">
                  Un contact direct et privilégié, une relation de confiance
                  et un accompagnement personnalisé au quotidien.
                </p>
              </div>

              <div className="col-md-4">
                <i className="bi bi-graph-up-arrow display-5 text-brand mb-2"></i>
                <h3>Organisation adaptée</h3>
                <p className="text-muted">
                  Une gestion de vos appels et de vos agendas pensée
                  selon votre activité, vos besoins et votre fonctionnement.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Wave */}
        <div className="wave-bottom mb-5">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: '100%' }}>
            <path fill="url(#grad1)" fillOpacity="1" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15848F" />
                <stop offset="100%" stopColor="#8B2F78" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* CTA final */}
        <div className="container">
          <div className="text-center mb-3" data-aos="fade-up">
            <h3 className="mb-4">
              Et si vous me confiez la gestion de vos appels et de votre agenda ?
            </h3>

            <p className="mb-4">
              Que vous exerciez seul ou au sein d’une structure regroupant
              plusieurs praticiens, étudions ensemble vos besoins
              et votre organisation.
            </p>

            <Link href="/contact" className="btn btn-turquoise btn-lg">
              Échangeons sur votre projet
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
            "@type": "ProfessionalService",
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
