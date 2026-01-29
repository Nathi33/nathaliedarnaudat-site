import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Accueil – Nathalie Darnaudat',
  description: "Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente. Simplifiez, organisez et déléguez votre administratif.",
};

export default function Home() {
  const services = [
    { title: 'Gestion administrative', description: 'Classement, suivi des dossiers, devis, factures et relances.', icon: 'bi-folder' },
    { title: 'Accompagnement création d’entreprise', description: 'Formalités, URSSAF, INPI et conseils personnalisés.', icon: 'bi-briefcase' },
    { title: 'Communication digitale et visuelle', description: 'Flyers, logos, mises à jour de sites vitrines simples.', icon: 'bi-palette' },
    { title: 'Assistance pour particuliers', description: 'Démarches CAF, retraite, impôts et constitution de dossiers.', icon: 'bi-house' },
  ];

  const atouts = [
    { icon: 'bi-check-circle', title: 'Rigueur', text: 'Chaque tâche est réalisée avec précision et méthode.' },
    { icon: 'bi-clock', title: 'Organisation', text: 'Optimisation de votre temps et de vos processus.' },
    { icon: 'bi-lightning-charge', title: 'Réactivité', text: 'Réponse rapide à vos besoins.' },
    { icon: 'bi-shield-check', title: 'Confidentialité', text: 'Vos données sont traitées en toute sécurité.' },
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
                src="/images/logo1.png"
                alt="Logo Nathalie Darnaudat"
                width={450}
                height={450}
                className="img-fluid"
                priority
              />
            </div>

            {/* Texte qui arrive de la droite */}
            <div className="col-md-7" data-aos="fade-left" data-aos-delay="100">
              <h1 className="display-5 fw-bold mb-3">Nathalie Darnaudat</h1>
              <h2 className="h4 mb-3 text-muted">Assistante administrative indépendante</h2>
              <p className="lead mb-2">
                J’aide les indépendants, TPE et particuliers à <strong>simplifier, organiser et déléguer</strong> leur administratif.
              </p>
              <p className="text-muted mb-4">
                Plus de 10 ans d’expérience en gestion administrative – accompagnement personnalisé, ponctuel ou régulier.
              </p>
              <a href="/contact" className="btn btn-turquoise btn-lg px-4" data-aos="zoom-in" data-aos-delay="200">Discutons de vos besoins</a>
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
          <h2 className="text-center mb-5">Une assistante administrative sur qui vous pouvez compter</h2>
          <div className="row align-items-top">
            <div className="col-md-6 mb-4 mb-md-0">
              <p>
                Forte de plus de <strong>10 ans d’expérience dans le secteur médico-administratif</strong>, j’accompagne aujourd’hui les professionnels et particuliers dans la gestion de leurs démarches administratives.
              </p>
              <p>
                Mon objectif est simple : <strong>vous faire gagner du temps</strong>, alléger votre charge mentale et vous permettre de vous concentrer sur l’essentiel.
              </p>
              <p>
                J’interviens de manière <strong>flexible</strong>, selon vos besoins : mission ponctuelle, accompagnement régulier ou aide spécifique.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
              <div className="p-4 rounded shadow-sm bg-light">
                <ul className="list-unstyled mb-0">
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2"></i>Gestion administrative complète ou partielle</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2"></i>Accompagnement à la création d’entreprise</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-info me-2"></i>Soutien administratif pour particuliers</li>
                  <li><i className="bi bi-check-lg text-info me-2"></i>Communication digitale simple et efficace</li>
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
          <h2 className="text-center mb-5" data-aos="fade-up">Mes Services</h2>
          <div className="row">
            {services.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center atout-card border-0 shadow-sm">
                    <div className="card-body">
                      <i className={`bi ${service.icon} display-5 text-info mb-3`}></i>
                      <h5>{service.title}</h5>
                      <p className="text-muted">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
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
          <h2 className="text-center mb-5" data-aos="fade-up">Mes atouts</h2>
          <div className="row">
            {atouts.map((atout, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link href="/about" className="text-decoration-none">
                  <div className="card h-100 text-center atout-card border-0 shadow-sm">
                    <div className="card-body">
                      <i className={`bi ${atout.icon} display-5 text-info mb-3`}></i>
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
          <h3>Besoin d’un coup de main pour votre administratif ?</h3>
          <p>Contactez-moi dès maintenant pour en discuter !</p>
          <a href="/contact" className="btn btn-turquoise btn-lg" data-aos="zoom-in" data-aos-delay="100">Contactez-moi</a>
        </div>
      </section>
    </>
  );
}
