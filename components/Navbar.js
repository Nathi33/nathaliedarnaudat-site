import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#6A1857'}}>
      <div className="container">
        <Link href="/" className="navbar-brand">Nathalie Darnaudat</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link href="/" className="nav-link">Accueil</Link></li>
            <li className="nav-item"><Link href="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">À propos</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link btn btn-info text-dark ms-2">Contactez-moi</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
