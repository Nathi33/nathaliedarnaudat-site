'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';  

export default function Navbar() {
  const pathname = usePathname(); 

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Mes services' },
    { href: '/about', label: 'À propos' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Rien à faire ici, Bootstrap JS est chargé pour le collapse
  }, []);

  // Fonction pour fermer le menu quand on clique sur un lien
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse.classList.contains('show')) {
      // On utilise l’API Collapse de Bootstrap
      const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
      collapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#6A1857' }}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/images/Logo.webp" alt="Logo Nathalie Darnaudat" width={60} height={60} loading="eager" unoptimized />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href || pathname.startsWith(link.href + '/') ? 'active fw-bold' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
