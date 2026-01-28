import Link from 'next/link';

export const metadata = {
  title: 'Services – Nathalie Darnaudat',
  description: 'Services d’assistance administrative pour professionnels et particuliers en Gironde et Charente.',
};

export default function Services() {
  return (
    <section className="section-mes-services bg-white position-relative">
      <div className="container">

        {/* Intro */}
        <h1 className="text-center mb-4" data-aos="fade-up">Mes services</h1>
        <p className="text-center mb-1" data-aos="fade-up" data-aos-delay="100">
          J’accompagne les professionnels et les particuliers dans la gestion de leurs démarches
          administratives, avec des prestations adaptées à chaque situation.
        </p>

        {/* Zone géographique */}
        <div className="bg-light p-4 rounded mb-3" data-aos="fade-up" data-aos-delay="200">
          <p className="mb-0">
            Basée à <strong>Saint-Christoly-de-Blaye (33)</strong>, j’interviens en
            <strong> Gironde</strong> et en <strong>Charente Maritime</strong>, en présentiel ou à distance.
          </p>
        </div>

        {/* Navigation interne */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 navigation-interne" data-aos="fade-up" data-aos-delay="300">
          <a href="#gestion" className="btn btn-turquoise">Gestion administrative</a>
          <a href="#creation" className="btn btn-turquoise">Création d’entreprise</a>
          <a href="#particuliers" className="btn btn-turquoise">Particuliers</a>
          <a href="#communication" className="btn btn-turquoise">Communication</a>
        </div>

        {/* Service 1 */}
        <div id="gestion" className="mb-5" data-aos="fade-up" data-aos-delay="100">
          <h2>Gestion administrative</h2>
          <p>
            Je prends en charge tout ou partie de votre administratif afin de vous permettre
            de vous concentrer sur votre activité principale.
          </p>
          <ul>
            <li>Classement et organisation des documents</li>
            <li>Création et suivi des devis et factures</li>
            <li>Relances clients et suivi des impayés</li>
            <li>Rédaction de courriers professionnels</li>
            <li>Suivi administratif courant</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div id="creation" className="mb-5" data-aos="fade-up" data-aos-delay="200">
          <h2>Accompagnement à la création d’entreprise</h2>
          <p>
            Un accompagnement personnalisé pour vous aider à démarrer votre activité
            sereinement et en toute conformité.
          </p>
          <ul>
            <li>Aide aux formalités administratives</li>
            <li>URSSAF, INPI, organismes compétents</li>
            <li>Conseils organisationnels</li>
            <li>Suivi des premières démarches</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div id="particuliers" className="mb-5" data-aos="fade-up" data-aos-delay="300">
          <h2>Assistance administrative pour particuliers</h2>
          <p>
            Je vous accompagne dans vos démarches administratives souvent complexes ou chronophages,
            avec pédagogie et confidentialité.
          </p>
          <ul>
            <li>Dossiers CAF, retraite, sécurité sociale</li>
            <li>Aide aux démarches en ligne</li>
            <li>Classement et constitution de dossiers</li>
            <li>Accompagnement personnalisé</li>
            <li>Aide à la réalisation de CV</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div id="communication" className="mb-5" data-aos="fade-up" data-aos-delay="400">
          <h2>Communication digitale et visuelle</h2>
          <p>
            Des supports simples et efficaces pour améliorer votre visibilité
            sans complexité technique.
          </p>
          <ul>
            <li>Création de logos et visuels simples</li>
            <li>Création ou refonte de sites vitrines simples</li>
            <li>Mise à jour de contenus sur site existant</li>
            <li>Conseils en présentation visuelle et identité graphique</li>
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
        <h3 className="mb-3">Besoin d’un accompagnement administratif ?</h3>
        <Link href="/contact" className="btn btn-turquoise btn-lg">
          Contactez-moi
        </Link>
      </div>
    </section>
  );
}
