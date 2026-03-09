import Link from 'next/link';

export const metadata = {
  title: 'Services de télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat',
  description: 'Télésecrétariat médical à distance : gestion des appels patients, agenda, urgences médicales et messages pour médecins et infirmiers libéraux.',
  openGraph: {
    title: 'Services de télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat',
    description: 'Télésecrétariat médical à distance : gestion des appels patients, agenda, urgences médicales et messages pour médecins et infirmiers libéraux.',
    url: 'https://www.nathaliedarnaudat.fr/services',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-services.webp', width: 1200, height: 630, alt: 'Services télésecrétariat Nathalie Darnaudat' },
    ],
    locale: 'fr_FR',
    type: 'website',
    robots: 'index, follow',
    canonical: 'https://www.nathaliedarnaudat.fr/services'
  },
};

export default function Services() {
  return (
    <>
      <section className="section-mes-services bg-white position-relative mt-3">
        <div className="container">

          {/* Intro */}
          <div className="text-center mb-2" data-aos="fade-up">
            <h1 className="display-5 fw-bold mb-5">Services de télésecrétariat médical pour médecins et infirmiers libéraux</h1>
            <p className="mb-3" data-aos-delay="100">
              Je propose un service de <strong>télésecrétariat médical à distance</strong> destiné principalement aux 
              <strong> médecins et infirmiers libéraux</strong>, adapté aux contraintes spécifiques de chacun.
            </p>
            <p className="mb-3" data-aos-delay="100">
              J’assure la gestion de vos appels patients, la prise de messages, la gestion de votre agenda 
              et l’identification des urgences selon vos consignes.
            </p>
            <p className="mb-3" data-aos-delay="100">
              J’accompagne également d’autres <strong>professionnels paramédicaux</strong> 
              (kinésithérapeutes, ostéopathes, psychologues) selon leurs besoins.
            </p>
          </div>

          {/* Zone géographique */}
          <div className="bg-light p-4 rounded mb-4" data-aos="fade-up" data-aos-delay="200">
            <p className="mb-0">
              Basée à <strong>Saint-Christoly-de-Blaye, en Gironde (33)</strong>, j’interviens principalement <strong>à distance</strong> pour gérer vos appels patients et votre agenda médical.
              Au besoin, je peux me déplacer temporairement pour vous rencontrer personnellement.
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
            <h2>Accueil téléphonique patients</h2>
            <p>
              Je réponds aux appels de votre cabinet au nom de votre structure afin d’offrir à vos patients un accueil professionnel et rassurant.
            </p>
            <p>
              Mes services s’adaptent également aux contraintes spécifiques des infirmiers libéraux, notamment pour la gestion des appels patients, l’organisation des tournées et la transmission des messages urgents.
            </p>
            <ul>
              <li>Accueil téléphonique personnalisé au nom du cabinet</li>
              <li>Identification du patient</li>
              <li>Qualification du motif d’appel</li>
              <li>Information pratique selon vos consignes (horaires, organisation du cabinet) </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div id="messages" className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <h2>Prise de messages patients</h2>
            <p>
              Chaque appel est traité avec rigueur afin de vous transmettre des informations claires et exploitables.
            </p>
            <ul>
              <li>Prise de messages détaillés</li>
              <li>Transmission rapide via votre outil ou SMS</li>
              <li>Priorisation des demandes importantes</li>
              <li>Respect strict du secret professionnel</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div id="urgences" className="mb-5" data-aos="fade-up" data-aos-delay="300">
            <h2>Identification et gestion des urgences médicales</h2>
            <p>
              Je détecte les situations urgentes et applique votre protocole afin de garantir une prise en charge rapide des patients concernés.       </p>
            <ul>
              <li>Identification des situations urgentes</li>
              <li>Application de vos consignes</li>
              <li>Transfert immédiat vers vous si nécessaire</li>
              <li>Priorisation des rappels urgents</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div id="agenda" className="mb-5" data-aos="fade-up" data-aos-delay="400">
            <h2>Gestion de votre agenda médical</h2>
            <p>
              Je prends en charge l’organisation de vos rendez-vous afin d’optimiser votre planning et limiter les interruptions pendant vos consultations.
            </p>
            <ul>
              <li>Prise de rendez-vous</li>
              <li>Modification ou annulation</li>
              <li>Optimisation des créneaux</li>
              <li>Respect de vos consignes médicales</li>
            </ul>
            <p className="mt-3"><strong>Compatible avec :</strong></p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-lg text-brand me-2"></i>Doctolib</li>
              <li><i className="bi bi-check-lg text-brand me-2"></i>Maiia</li>
              <li><i className="bi bi-check-lg text-brand me-2"></i>Google Agenda</li>
              <li><i className="bi bi-check-lg text-brand me-2"></i>Agenda professionnel interne</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div id="appels" className="mb-5" data-aos="fade-up" data-aos-delay="450">
            <h2>Appels sortants patients</h2>
            <p>
              Selon vos besoins, je peux également effectuer certains appels sortants afin de faciliter l’organisation du cabinet.
            </p>
            <ul>
              <li>Rappel de patients</li>
              <li>Confirmation de rendez-vous</li>
              <li>Transmission d’informations</li>
              <li>Coordination simple</li>
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
          <h3 className="mb-3">Et si vous déléguiez la gestion de vos appels patients ?</h3>
          <p>Je prends en charge votre accueil téléphonique et l’organisation de votre agenda pour vous permettre de vous concentrer pleinement sur vos patients.</p>
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
