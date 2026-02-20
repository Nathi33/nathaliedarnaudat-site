import Link from 'next/link';

export const metadata = {
  title: 'Services de télésecrétariat médical et paramédical – Nathalie Darnaudat',
  description: 'Découvrez mes prestations de télésecrétariat pour médecins, infirmiers, kinés, ostéopathes et psychologues : gestion des appels patients, prise de messages, filtrage et organisation. Offrez-vous plus de sérénité au cabinet.',
  openGraph: {
    title: 'Services de télésecrétariat médical et paramédical – Nathalie Darnaudat',
    description: 'Découvrez mes prestations de télésecrétariat pour médecins, infirmiers, kinés, ostéopathes et psychologues : gestion des appels patients, prise de messages, filtrage et organisation. Offrez-vous plus de sérénité au cabinet.',
    url: 'https://www.nathaliedarnaudat.fr/services',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-services.webp', width: 1200, height: 630, alt: 'Services télésecrétariat Nathalie Darnaudat' },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Services() {
  return (
    <section className="section-mes-services bg-white position-relative">
      <div className="container">

        {/* Intro */}
        <div className="text-center mb-2" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-5">Mes services</h1>
          <p className="mb-1" data-aos-delay="100">
            J’accompagne les professionnels de santé (médecins, infirmiers, kinésithérapeutes, ostéopathes, psychologues) dans la gestion de 
            leurs appels patients, messages, rendez-vous et organisation administrative, pour leur permettre de se concentrer sur leurs patients.
          </p>
        </div>

        {/* Zone géographique */}
        <div className="bg-light p-4 rounded mb-4" data-aos="fade-up" data-aos-delay="200">
          <p className="mb-0">
            Basée à <strong>Saint-Christoly-de-Blaye, en Gironde (33)</strong>, j’interviens principalement à distance pour gérer vos appels et messages patients.
            Au besoin, je peux me déplacer temporairement pour vous rencontrer personnellement ou vous assister avec vos outils informatiques.
          </p>
        </div>

        {/* Navigation interne */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 navigation-interne" data-aos="fade-up" data-aos-delay="300">
          <a href="#accueil" className="btn btn-turquoise">Accueil téléphonique</a>
          <a href="#messages" className="btn btn-turquoise">Prise de messages</a>
          <a href="#filtrage" className="btn btn-turquoise">Filtrage urgences</a>
          <a href="#organisation" className="btn btn-turquoise">Organisation sur mesure</a>
          <a href="#plannings" className="btn btn-turquoise">Gestion des plannings</a>
        </div>

        {/* Service 1 */}
        <div id="accueil" className="mb-5" data-aos="fade-up" data-aos-delay="100">
          <h2>Accueil téléphonique patients</h2>
          <p>
            Réponse professionnelle et bienveillante à vos appels pour un accueil rassurant de vos patients.
          </p>
          <ul>
            <li>Gestion des appels entrants</li>
            <li>Accueil chaleureux et professionnel</li>
            <li>Transmission rapide des informations importantes</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div id="messages" className="mb-5" data-aos="fade-up" data-aos-delay="200">
          <h2>Prise de messages</h2>
          <p>
            Collecte d’informations précises et transmission claire selon vos consignes.
          </p>
          <ul>
            <li>Prise de messages détaillés</li>
            <li>Transmission rapide et sécurisée</li>
            <li>Respect du secret professionnel</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div id="filtrage" className="mb-5" data-aos="fade-up" data-aos-delay="300">
          <h2>Filtrage des urgences</h2>
          <p>
            Priorisation des appels selon l’urgence et vos instructions
          </p>
          <ul>
            <li>Détection et gestion des situations urgentes</li>
            <li>Réorientation si nécessaire</li>
            <li>Suivi personnalisé</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div id="organisation" className="mb-5" data-aos="fade-up" data-aos-delay="400">
          <h2>Organisation sur mesure</h2>
          <p>
            Adaptation complète à votre fonctionnement pour un cabinet efficace et serein.
          </p>
          <ul>
            <li>Structuration des processus internes selon vos besoins</li>
            <li>Gestion des appels entrants et messages selon vos consignes</li>
            <li>Interlocutrice unique dédiée</li>
            <li>Optimisation de l’accueil et du suivi patients</li>
          </ul>
        </div>

        {/* Service 5 */}
        <div id="plannings" className="mb-5" data-aos="fade-up" data-aos-delay="450">
          <h2>Gestion des plannings</h2>
          <p>
            Je m’occupe de l’organisation et du suivi précis de vos rendez-vous patients pour éviter les conflits et optimiser votre emploi du temps.
          </p>
          <ul>
            <li>Planification et suivi des rendez-vous</li>
            <li>Rappels aux patients si nécessaire</li>
            <li>Optimisation de l’agenda pour gagner du temps</li>
          </ul>
        </div>

      </div>

      {/* Vague sur toute la largeur */}
      <div className="wave-bottom mb-5">
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

      {/* CTA */}
      <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="500">
        <h3 className="mb-3">Et si vous gagniez du temps et de la sérénité au cabinet ?</h3>
        <p>Je m’occupe de vos appels et messages, vous vous concentrez sur vos patients.</p>
        <Link href="/contact" className="btn btn-turquoise btn-lg">
          Parlons de vos besoins
        </Link>
      </div>
    </section>
  );
}
