'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Mes services' },
    { href: '/about', label: 'À propos' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarContent');
    if (!navbarCollapse) return;
    const collapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);
    if (collapse) collapse.hide();
  };

  return (
    <>
      {/* Bootstrap JS nécessaire pour le collapse */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#6A1857' }}>
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/Logo.webp"
              alt="Logo Nathalie Darnaudat"
              width={60}
              height={60}
              loading="eager"
              unoptimized
            />
          </Link>

          {/* Bouton mobile */}
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

          {/* Liens */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <li key={link.href} className="nav-item">
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive ? 'active fw-bold' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}