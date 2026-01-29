import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#6A1857' }}>
      <div className="container">
        <div className="row text-start">

          {/* Colonne 1 – Identité */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Nathalie Darnaudat</h5>
            <p className="mb-1">Assistante administrative indépendante</p>
            <p className="small mb-0">
              Basée à <strong>Saint-Christoly-de-Blaye (33)</strong><br />
              Interventions en <strong>Gironde</strong> et <strong>Charente Maritime</strong><br />
              Prestations possibles à distance dans le Sud-Ouest
            </p>
          </div>

          {/* Colonne 2 – Navigation */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Plan du site</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white text-decoration-none">Accueil</Link></li>
              <li><Link href="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link href="/about" className="text-white text-decoration-none">À propos</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li className="mt-2">
                <Link href="/mentions-legales" className="text-white text-decoration-none">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-white text-decoration-none">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 – Contact & réseaux */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-1">
              <a 
                href="mailto:nathalie.drnt@outlook.fr" 
                className="footer-link d-inline-flex align-items-center"
              >
                <i className="bi bi-envelope me-2"></i>
                nathalie.drnt@outlook.fr
              </a>
            </p>
            <p className="mb-1">
              <a 
                href="tel:+33763499510" 
                className="footer-link d-inline-flex align-items-center"
              >
                <i className="bi bi-telephone me-2"></i>
                07 63 49 95 10
              </a>
            </p>
            <p className="mb-3">
              <Link
                href="/localisation"
                className="footer-link d-inline-flex align-items-center"
                target='_blank'
                rel="noopener noreferrer"
              >
                <i className="bi bi-geo-alt me-2"></i>
                Saint-Christoly-de-Blaye (33920)
              </Link>
            </p>

            <div className="d-flex align-items-center gap-3">
              <a
                href="https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
              <i className='bi bi-linkedin'></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587288295204"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className='bi bi-facebook'></i>
              </a>
              <a
                href="https://www.instagram.com/nathaliedarnaudat"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className='bi bi-instagram'></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-light opacity-25" />

        <p className="text-center small mb-0">
          © 2026 Nathalie Darnaudat – Assistante administrative indépendante
        </p>
      </div>
    </footer>
  );
}
