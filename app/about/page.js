import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'À propos – Télésecrétariat pour médecins et infirmiers libéraux – Nathalie Darnaudat',
  description: 'Télésecrétaire indépendante spécialisée pour médecins et infirmiers libéraux : découvrez mon parcours, mes compétences et ma mission pour gérer vos appels et votre agenda à distance, et libérer votre temps et sérénité.',
  openGraph: {
    title: 'À propos – Télésecrétariat pour médecins et infirmiers libéraux – Nathalie Darnaudat',
    description: 'Télésecrétaire indépendante spécialisée pour médecins et infirmiers libéraux : découvrez mon parcours, mes compétences et ma mission pour gérer vos appels et votre agenda à distance, et libérer votre temps et sérénité.',
    url: 'https://www.nathaliedarnaudat.fr/about',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-About.webp', width: 1200, height: 630, alt: 'À propos de Nathalie Darnaudat' },
    ],
    locale: 'fr_FR',
    type: 'website',
    robots: 'index, follow',
    canonical: 'https://www.nathaliedarnaudat.fr/about'
  },
};

export default function About() {
  return (
    <>
      <section className="section-about bg-white position-relative mt-3">

        {/* Hero texte */}
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h1 className="display-5 fw-bold mb-3">Votre télésecrétariat médical simplifié</h1>
            <p className="lead mb-0">
              Je libère les <strong>médecins et infirmiers libéraux</strong>, ainsi que les autres professionnels paramédicaux, des interruptions téléphoniques et de la gestion administrative pour qu’ils puissent se concentrer sur leurs patients.
            </p>
          </div>
        </div>

        {/* Parcours / Histoire */}
        <div className="container">
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6" data-aos="fade-right">
              <Image
                src="/images/About.webp"
                alt="logo Nathalie Darnaudat avec des dossiers administratifs, un ordinateur portable et intitulé des services"
                width={500}
                height={500}
                className="img-fluid rounded shadow"
                unoptimized
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left">
              <h2 className="mb-3">Mon parcours</h2>
              <p>
                Forte de plus de 10 ans d’expérience dans le secteur médico-social, j’ai acquis une expertise solide en gestion des appels, prise de messages et organisation administrative spécifique aux professionnels de santé.
              </p>
              <p>
                Aujourd’hui, je propose un service de télésecrétariat personnalisé pour médecins et infirmiers libéraux, en tenant compte des <strong>tournées et messages urgents propres à leur activité</strong>, ainsi que pour d’autres professionnels pramédicaux selon leurs besoins.<br/> Mon objectif : alléger votre quotidien, sécuriser vos échanges avec vos patients et optimiser votre organisation.
              </p>
              <p>
                Ma méthodologie combine rigueur, réactivité et bienveillance, pour offrir un service fiable et adapté à chaque cabinet.
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

        {/* Compétences clés */}
        <div className="container">
          <div className="mb-5" data-aos="fade-up">
            <h2 className="text-center mb-4">Mes compétences professionnelles</h2>
            <div className="row text-center g-4">
              <div className="col-md-4">
                <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="50">
                  <i className="bi bi-person-lines-fill display-5 text-brand mb-3" aria-hidden="true"></i>
                  <h3>Gestion complète des appels</h3>
                  <p className="text-muted">
                    Organisation efficace des prises de contact, filtrage des urgences et suivi précis des messages pour chaque patient.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="100">
                  <i className="bi bi-file-earmark-text display-5 text-brand mb-3" aria-hidden="true"></i>
                  <h3>Suivi administratif personnalisé</h3>
                  <p className="text-muted">
                    Tenue et mise à jour des dossiers, gestion des rendez-vous et coordination avec vos outils internes.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bi bi-lightning-charge display-5 text-brand mb-3" aria-hidden="true"></i>
                  <h3>Réactivité et adaptabilité</h3>
                  <p className="text-muted">
                    Intervention rapide face aux imprévus, ajustement selon votre organisation et vos priorités du moment.
                  </p>
                </div>
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

        {/* Valeurs / approche */}
        <div className="container">
          <div className="bg-light p-4 rounded mb-5" data-aos="fade-up">
            <h2 className="text-center mb-5">Mes valeurs professionnelles</h2>
            <div className="row text-center g-4">
              <div className="col-md-4">
                <i className="bi bi-shield-lock display-5 text-brand mb-2" aria-hidden="true"></i>
                <h3>Confidentialité</h3>
                <p className="text-muted">
                  Respect total du secret médical et protection des données de vos patients.
                </p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-person-check display-5 text-brand mb-2" aria-hidden="true"></i>
                <h3>Fiabilité</h3>
                <p className="text-muted">
                  Un service constant, rigoureux et professionnel, sur lequel vous pouvez compter chaque jour.
                </p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-heart-pulse display-5 text-brand mb-2" aria-hidden="true"></i>
                <h3>Bienveillance</h3>
                <p className="text-muted">
                  Accueil humain et attentionné, pour que vos patients se sentent en confiance dès le premier appel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave après valeurs */}
        <div className="wave-bottom mb-5">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: '100%' }}>
            <path fill="url(#grad3)" fillOpacity="1" d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
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
              "postalCode": "33700",
              "addressCountry": "FR"
            }
          }),
        }}
      />
    </>
  );
}
