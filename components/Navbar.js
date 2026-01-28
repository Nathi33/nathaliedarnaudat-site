'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); 

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#6A1857' }}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/images/logo1.png" alt="Logo Nathalie Darnaudat" width={60} height={60} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active fw-bold' : ''}`}
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
