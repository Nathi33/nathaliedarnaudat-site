import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales – Nathalie Darnaudat',
  description: "Mentions légales du site de Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente.",
};

export default function MentionsLegales() {
  return (
    <section className="section-legal bg-white position-relative mt-5">
      <div className="container py-5">

        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">Mentions légales</h1>
          <p className="lead mb-0">
            Informations légales concernant le site de Nathalie Darnaudat, assistante administrative indépendante.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nom :</strong> Nathalie Darnaudat<br />
            <strong>Statut :</strong> Assistante administrative indépendante - Micro-entreprise<br />
            <strong>Siège Social :</strong> 33700 Mérignac, France<br />
            <strong>SIRET :</strong> 99334942200010<br />
            <strong>Téléphone :</strong> <Link href="tel:0763499510" className='legal-link'>07 63 49 95 10</Link><br />
            <strong>Email :</strong> <Link href="mailto:nathalie.drnt@outlook.fr" className='legal-link'>nathalie.drnt@outlook.fr</Link>
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Hébergement</h2>
          <p>
            <strong>Hébergeur :</strong> OVH<br />
            <strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France<br />
            <strong>Téléphone :</strong> 1007
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu du site (textes, images, logos, graphismes) est la propriété de Nathalie Darnaudat ou de ses partenaires. 
            Toute reproduction, distribution ou modification, totale ou partielle, est interdite sans autorisation écrite.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont fournies à titre indicatif. 
            Nathalie Darnaudat ne saurait être tenue responsable des erreurs, omissions ou dommages pouvant survenir de l’utilisation du site.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-3 text-center">
          <Link href="/" className="btn btn-turquoise btn-lg">Retour à l’accueil</Link>
        </div>

      </div>
    </section>
  );
}
