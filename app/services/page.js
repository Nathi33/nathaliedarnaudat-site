import Link from 'next/link';

export const metadata = {
  title: 'Services de télésecrétariat médical et paramédical – Nathalie Darnaudat',
  description: 'Découvrez mes services de télésecrétariat médical et paramédical : accueil téléphonique, gestion des appels patients et organisation des agendas des professionnels de santé.',
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/services/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Services de télésecrétariat médical et paramédical – Nathalie Darnaudat',
    description: 'Accueil téléphonique, gestion des appels et des agendas pour les professionnels du secteur médical et paramédical.',
    url: 'https://www.nathaliedarnaudat.fr/services/',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-services.webp',
        width: 1200,
        height: 630,
        alt: 'Services de télésecrétariat médical et paramédical – Nathalie Darnaudat',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Services() {
  return (
    <>
      <section className="section-mes-services bg-white position-relative mt-3">
        <div className="container">

          {/* Intro */}
          <div className="text-center mb-2" data-aos="fade-up">
            <h1 className="display-5 fw-bold mb-5">
              Accueil téléphonique et gestion des agendas pour les professionnels de santé
            </h1>

            <p className="mb-3" data-aos-delay="100">
              Je vous accompagne dans la gestion de vos appels téléphoniques
              et de votre agenda afin de vous permettre de vous consacrer
              pleinement à votre activité professionnelle.
            </p>

            <p className="mb-3" data-aos-delay="100">
              Chaque appel est traité selon vos consignes : identification
              de l’interlocuteur, prise de messages, transmission des
              informations importantes et gestion des rendez-vous.
            </p>

            <p className="mb-3" data-aos-delay="100">
              Mes prestations s’adressent aux professionnels du secteur
              <strong> médical et paramédical</strong> souhaitant bénéficier
              d’un accueil téléphonique professionnel et d’une gestion
              organisée de leur agenda.
            </p>
          </div>

          {/* Zone géographique */}
          <div className="bg-light p-4 rounded mb-4" data-aos="fade-up" data-aos-delay="200">
            <p className="mb-0">
              Basée à <strong>Saint-Christoly-de-Blaye, en Gironde (33)</strong>,
              j’interviens à distance pour assurer la gestion de vos appels
              et de votre agenda, où que vous soyez en France.
              Chaque collaboration est adaptée à votre activité et à votre
              organisation.
            </p>
          </div>

          {/* Navigation interne */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 navigation-interne" data-aos="fade-up" data-aos-delay="300">
            <a href="#accueil" className="btn btn-turquoise">Accueil téléphonique</a>
            <a href="#messages" className="btn btn-turquoise">Prise de messages</a>
            <a href="#urgences" className="btn btn-turquoise">Gestion des urgences</a>
            <a href="#agenda" className="btn btn-turquoise">Gestion de l’agenda</a>
            <a href="#appels" className="btn btn-turquoise">Appels sortants</a>
          </div>

          {/* Service 1 */}
          <div id="accueil" className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h2>Accueil téléphonique professionnel</h2>

            <p>
              Je prends en charge les appels de votre activité au nom de
              votre structure afin d’offrir à vos patients un accueil
              professionnel, chaleureux et rassurant.
            </p>

            <p>
              Que vous exerciez en cabinet, en structure ou en activité
              libérale, je m’adapte à votre fonctionnement et à vos
              consignes pour assurer un accueil téléphonique de qualité.
            </p>

            <ul>
              <li>Accueil téléphonique personnalisé au nom de votre structure</li>
              <li>Identification de l’interlocuteur</li>
              <li>Identification du motif de l’appel</li>
              <li>Communication des informations pratiques selon vos consignes</li>
              <li>Orientation des appels vers les bons interlocuteurs</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div id="messages" className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <h2>Prise et transmission des messages</h2>

            <p>
              Lorsqu’un appel nécessite votre intervention ou votre attention,
              je recueille les informations nécessaires et vous les transmets
              de manière claire et organisée.
            </p>

            <ul>
              <li>Prise de messages précis et détaillés</li>
              <li>Recueil des coordonnées et du motif de l’appel</li>
              <li>Transmission rapide via votre outil habituel ou SMS</li>
              <li>Signalement des demandes nécessitant votre attention</li>
              <li>Confidentialité des échanges et respect de vos consignes</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div id="urgences" className="mb-5" data-aos="fade-up" data-aos-delay="300">
            <h2>Identification et transmission des situations urgentes</h2>

            <p>
              Certaines demandes nécessitent une attention particulière.
              Selon les consignes et procédures que vous m’aurez définies,
              j’identifie les situations devant vous être transmises
              rapidement afin de faciliter leur prise en charge.
            </p>

            <ul>
              <li>Identification des appels nécessitant une transmission rapide</li>
              <li>Application de vos consignes et procédures</li>
              <li>Transmission immédiate des informations importantes</li>
              <li>Priorisation des demandes selon vos indications</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div id="agenda" className="mb-5" data-aos="fade-up" data-aos-delay="400">
            <h2>Gestion de votre agenda professionnel</h2>

            <p>
              Je vous accompagne dans l’organisation de votre agenda afin
              de faciliter la gestion de vos rendez-vous et de limiter
              les interruptions liées aux appels téléphoniques.
            </p>

            <ul>
              <li>Prise de rendez-vous</li>
              <li>Modification et annulation des rendez-vous</li>
              <li>Organisation des créneaux selon vos disponibilités</li>
              <li>Respect de vos consignes et de votre fonctionnement</li>
              <li>Suivi des demandes de rendez-vous</li>
            </ul>

            <p className="mt-3">
              <strong>Selon les outils utilisés par votre activité :</strong>
            </p>

            <ul className="list-unstyled">
              <li><i className="bi bi-check-lg text-brand me-2"></i>Doctolib</li>
              <li><i className="bi bi-check-lg text-brand me-2"></i>Maiia</li>
              <li><i className="bi bi-check-lg text-brand me-2"></i>Google Agenda</li>
              <li><i className="bi bi-check-lg text-brand me-2"></i>Agenda professionnel interne</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div id="appels" className="mb-5" data-aos="fade-up" data-aos-delay="450">
            <h2>Appels sortants et suivi des demandes</h2>

            <p>
              En complément de l’accueil téléphonique, je peux également
              effectuer certains appels sortants selon vos besoins et
              les modalités définies ensemble.
            </p>

            <ul>
              <li>Rappel de patients</li>
              <li>Confirmation de rendez-vous</li>
              <li>Transmission d’informations pratiques</li>
              <li>Suivi de certaines demandes</li>
            </ul>
          </div>
        </div>

        {/* Vague sur toute la largeur */}
        <div className="wave-bottom mb-5">
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

        {/* CTA */}
        <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="500">
          <h3 className="mb-3">
            Et si vous retrouviez du temps pour votre activité ?
          </h3>

          <p>
            Je prends en charge votre accueil téléphonique et la gestion
            de votre agenda pour vous permettre de vous consacrer pleinement
            à vos patients et à votre activité.
          </p>

          <Link href="/contact" className="btn btn-turquoise btn-lg">
            Parlons de vos besoins
          </Link>
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
