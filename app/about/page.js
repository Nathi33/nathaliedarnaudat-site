import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'À propos – Nathalie Darnaudat',
  description: "Découvrez le parcours, les compétences et les valeurs de Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente.",
};

export default function About() {
  return (
    <section className="section-about bg-white position-relative">

      {/* Hero texte */}
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">Votre administratif simplifié, votre temps préservé</h1>
          <p className="lead mb-0">
            J’accompagne professionnels et particuliers pour optimiser, organiser et déléguer leurs tâches administratives.
          </p>
        </div>
      </div>

      {/* Parcours / Histoire */}
      <div className="container">
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-md-6" data-aos="fade-right">
            <Image
              src="/images/about.png"
              alt="Nathalie Darnaudat"
              width={500}
              height={500}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="mb-3">Mon parcours</h2>
            <p>
              Après plus de 10 ans dans le secteur médico-social, j’ai développé une solide expérience en gestion administrative, organisation et suivi de dossiers. 
            </p>
            <p>
              Animée par l’envie d’apporter plus de flexibilité et d’efficacité à mes clients, j’ai choisi de me consacrer pleinement à l’assistanat administratif indépendant. 
              Aujourd’hui, je propose un accompagnement sur mesure aux indépendants, TPE et particuliers, pour alléger leur charge administrative tout en sécurisant leurs démarches.
            </p>
            <p>
              Cette expérience me permet de combiner méthode, sens pratique et écoute pour fournir des solutions claires, fiables et adaptées à chaque situation.
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
              <stop offset="0%" stopColor="#00CED1" />
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
            <div className="col-md-3">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="50">
                <i className="bi bi-list-task display-5 text-info mb-3"></i>
                <h5>Planification</h5>
                <p className="text-muted">Structurer et planifier les tâches pour assurer un suivi fluide et efficace.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="100">
                <i className="bi bi-clock-history display-5 text-info mb-3"></i>
                <h5>Priorisation</h5>
                <p className="text-muted">Identifier les actions les plus importantes pour gagner du temps et éviter le stress.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="150">
                <i className="bi bi-graph-up display-5 text-info mb-3"></i>
                <h5>Suivi et reporting</h5>
                <p className="text-muted">Analyser l’avancement des dossiers et fournir des comptes rendus précis et clairs.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 rounded shadow-sm h-100" data-aos="zoom-in" data-aos-delay="200">
                <i className="bi bi-people display-5 text-info mb-3"></i>
                <h5>Communication</h5>
                <p className="text-muted">Assurer un échange fluide et efficace avec clients, partenaires et collaborateurs.</p>
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
              <stop offset="100%" stopColor="#00CED1" />
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
              <i className="bi bi-people display-5 text-info mb-2"></i>
              <h5>Écoute</h5>
              <p className="text-muted">Comprendre vos besoins et adapter mon accompagnement à votre situation.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightbulb display-5 text-info mb-2"></i>
              <h5>Simplicité</h5>
              <p className="text-muted">Proposer des solutions claires et efficaces, sans complexité inutile.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-hand-thumbs-up display-5 text-info mb-2"></i>
              <h5>Fiabilité</h5>
              <p className="text-muted">Garantir un accompagnement sérieux et constant, sur lequel vous pouvez compter.</p>
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
              <stop offset="0%" stopColor="#00CED1" />
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
  );
}
