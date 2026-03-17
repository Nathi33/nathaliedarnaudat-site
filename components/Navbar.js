'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      const navbarCollapse = navbarCollapseRef.current;
      if (!navbarCollapse) return;

      const collapseInstance =
        bootstrap.Collapse.getInstance(navbarCollapse) ||
        new bootstrap.Collapse(navbarCollapse, { toggle: false });

      // Fermer le menu au scroll
      const handleScroll = () => collapseInstance.hide();
      window.addEventListener('scroll', handleScroll);

      // Fermer le menu au clic en dehors
      const handleClickOutside = (event) => {
        if (!navbarCollapse.contains(event.target)) collapseInstance.hide();
      };
      document.addEventListener('click', handleClickOutside);

      // Fermer le menu avec la touche Escape
      const handleEscape = (event) => {
        if (event.key === 'Escape') collapseInstance.hide();
      };
      document.addEventListener('keydown', handleEscape);

      // Nettoyage à la destruction du composant
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    });
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Mes services' },
    { href: '/about', label: 'À propos' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = async () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (!navbarCollapse) return;

    const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    const collapseInstance =
      bootstrap.Collapse.getInstance(navbarCollapse) ||
      new bootstrap.Collapse(navbarCollapse, { toggle: false });

    collapseInstance.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#6A1857' }}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            src="/images/Logo.webp"
            alt="Logo Nathalie Darnaudat"
            width={60}
            height={60}
            priority
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
          aria-label="Ouvrir ou fermer le menu de navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens */}
        <div className="collapse navbar-collapse" id="navbarContent" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/');

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
  );
}