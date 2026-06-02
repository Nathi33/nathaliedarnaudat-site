import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'À propos – Télésecrétariat pour médecins et infirmiers libéraux – Nathalie Darnaudat',
  description: 'Télésecrétaire indépendante spécialisée pour médecins et infirmiers libéraux : découvrez mon parcours, mes compétences et ma mission pour gérer vos appels et votre agenda à distance, et libérer votre temps et sérénité.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/about/', 
  },
  openGraph: {
    title: 'À propos – Télésecrétariat pour médecins et infirmiers libéraux – Nathalie Darnaudat',
    description: 'Télésecrétaire indépendante spécialisée pour médecins et infirmiers libéraux : découvrez mon parcours, mes compétences et ma mission pour gérer vos appels et votre agenda à distance, et libérer votre temps et sérénité.',
    url: 'https://www.nathaliedarnaudat.fr/about/',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-About.webp', width: 1200, height: 630, alt: 'À propos de Nathalie Darnaudat' },
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
            <h1 className="display-5 fw-bold mb-3">Une télésecrétaire médicale indépendante à vos côtés</h1>
            <p className="lead mb-0">
              Je libère les <strong>médecins et infirmiers libéraux</strong>, ainsi que les autres professionnels paramédicaux, des interruptions téléphoniques et de la gestion administrative pour qu’ils puissent se concentrer sur leurs patients.
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
                  src="/images/About.webp"
                  alt="Télésecrétariat médical Nathalie Darnaudat"
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
                Avec plus de 10 ans d’expérience dans le secteur médico-social et administratif, j’ai développé une solide expertise dans la gestion des appels, l’accueil téléphonique et l’organisation des flux d’information.
              </p>

              <p>
                J’ai travaillé au contact de professionnels de santé et d’usagers, ce qui m’a permis de comprendre les enjeux concrets d’un cabinet médical : urgence, charge mentale, interruptions constantes et importance de la qualité de communication.
              </p>

              <p>
                Cette expérience m’a naturellement orientée vers le télésecrétariat médical à distance, avec une approche centrée sur la fiabilité, la discrétion et la réactivité.
              </p>

              <p>
                Aujourd’hui, j’accompagne les médecins, infirmiers libéraux et professionnels paramédicaux en assurant la continuité téléphonique et la gestion administrative de leur activité, selon leurs consignes et leur organisation.
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
              Un service structuré, fiable et adapté aux exigences des professionnels de santé.
            </p>
          </div>

          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in">
                <i className="bi bi-check2-circle display-5 text-brand mb-3"></i>
                <h3>Rigueur</h3>
                <p className="text-muted">
                  Chaque appel et chaque message sont traités avec précision pour garantir une transmission fiable des informations.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="100">
                <i className="bi bi-lightning-charge display-5 text-brand mb-3"></i>
                <h3>Réactivité</h3>
                <p className="text-muted">
                  Les informations importantes sont transmises rapidement selon vos consignes et priorités médicales.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="150">
                <i className="bi bi-heart display-5 text-brand mb-3"></i>
                <h3>Relation patient</h3>
                <p className="text-muted">
                  Un accueil humain et rassurant, essentiel pour la qualité de la relation entre le cabinet et ses patients.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Wave après compétences (inversée) */}
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
                Un télésecrétariat médical fiable, pensé pour alléger votre quotidien et sécuriser votre organisation.
              </p>
            </div>

            <div className="row text-center g-4">

              <div className="col-md-4">
                <i className="bi bi-shield-lock display-5 text-brand mb-2"></i>
                <h3>Confidentialité</h3>
                <p className="text-muted">
                  Respect strict du secret médical et protection des données de vos patients.
                </p>
              </div>

              <div className="col-md-4">
                <i className="bi bi-person-check display-5 text-brand mb-2"></i>
                <h3>Fiabilité</h3>
                <p className="text-muted">
                  Un service constant et structuré sur lequel vous pouvez compter chaque jour.
                </p>
              </div>

              <div className="col-md-4">
                <i className="bi bi-graph-up-arrow display-5 text-brand mb-2"></i>
                <h3>Optimisation</h3>
                <p className="text-muted">
                  Moins d’interruptions, une meilleure organisation et un meilleur confort de travail.
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
            <h3 className="mb-5">Prêt à déléguer votre administratif ?</h3>
            <Link href="/contact" className="btn btn-turquoise btn-lg">
              Contactez-moi
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
