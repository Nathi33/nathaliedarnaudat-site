import Link from 'next/link';
import Script from 'next/script';

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#6A1857' }}>
      
      {/* JSON-LD pour SEO */}
      <Script
        id="ld-json-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Nathalie Darnaudat",
          "url": "https://www.nathaliedarnaudat.fr",
          "logo": "https://www.nathaliedarnaudat.fr/images/Logo.webp",
          "sameAs": [
            "https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative",
            "https://www.facebook.com/profile.php?id=61587288295204",
            "https://www.instagram.com/nathaliedarnaudat.assistante/"
          ],
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+33763499510",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": "fr"
          }]
        })}}
      />

      <div className="container">
        <div className="row text-start">

          {/* Colonne 1 – Identité */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Nathalie Darnaudat</h5>
            <p className="mb-3">Télésecrétaire et assistante administrative indépendante, spécialisée médico-social</p>
            <p className="small mb-0">
              Basée à <strong>Saint-Christoly-de-Blaye (33920)</strong><br />
              Interventions principalement à distance pour gérer vos appels et messages patients<br />
              Déplacements ponctuels possibles en Gironde et en Charente 
            </p>
          </div>

          {/* Colonne 2 – Navigation */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Plan du site</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white text-decoration-none" title="Accueil">Accueil</Link></li>
              <li><Link href="/services" className="text-white text-decoration-none" title="Services">Services</Link></li>
              <li><Link href="/about" className="text-white text-decoration-none" title="À propos">À propos</Link></li>
              <li><Link href="/tarifs" className="text-white text-decoration-none" title="Tarifs">Tarifs</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none" title="Contact">Contact</Link></li>
              <li className="mt-2">
                <Link href="/mentions-legales" className="text-white text-decoration-none" title="Mentions légales">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-white text-decoration-none" title="Politique de confidentialité">
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
                href="mailto:contact@nathaliedarnaudat.fr" 
                className="footer-link d-inline-flex align-items-center"
                title="Envoyer un email à Nathalie Darnaudat"
              >
                <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                contact@nathaliedarnaudat.fr
              </a>
            </p>
            <p className="mb-1">
              <a 
                href="tel:+33763499510" 
                className="footer-link d-inline-flex align-items-center"
                title="Appeler Nathalie Darnaudat"
              >
                <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                07 63 49 95 10
              </a>
            </p>
            <p className="mb-3">
              <Link
                href="/localisation"
                className="footer-link d-inline-flex align-items-center"
                target='_blank'
                rel="noopener noreferrer"
                title="Voir la localisation de Nathalie Darnaudat"
              >
                <i className="bi bi-geo-alt me-2" aria-hidden="true"></i>
                Saint-Christoly-de-Blaye (33920)
              </Link>
            </p>

            <div className="d-flex align-items-center gap-3">
              <a
                href="https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Nathalie Darnaudat"
              >
              <i className='bi bi-linkedin' aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587288295204"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Nathalie Darnaudat"
              >
                <i className='bi bi-facebook' aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/nathaliedarnaudat.assistante/"
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Nathalie Darnaudat"
              >
                <i className='bi bi-instagram' aria-hidden="true"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-light opacity-25" />

        <p className="text-center small mb-0">
          © 2026 Nathalie Darnaudat | Télésecrétaire – Assistante administrative indépendante
        </p>
      </div>
    </footer>
  );
}