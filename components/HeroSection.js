import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="text-center py-5" style={{backgroundColor: '#6A1857', color: 'white'}}>
      <div className="container">
        <Image src="/images/logo.png" alt="Logo Nathalie Darnaudat" width={120} height={120} className="mb-3" />
        <h1 className="display-5">Assistante Administrative Indépendante</h1>
        <p className="lead">Gagnez du temps et allégez votre charge administrative</p>
        <Link href="/contact" className="btn btn-info text-dark btn-lg mt-3">Contactez-moi</Link>
      </div>
    </div>
  );
}
