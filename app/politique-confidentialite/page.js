import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité – Nathalie Darnaudat',
  description: "Politique de confidentialité du site de Nathalie Darnaudat, assistante administrative indépendante en Gironde et Charente.",
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="section-privacy bg-white position-relative mt-5">
      <div className="container py-5">

        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">Politique de confidentialité</h1>
          <p className="lead mb-0">
            Protection de vos données personnelles et informations sur l’utilisation du site.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Données collectées</h2>
          <p>
            Nous collectons uniquement les données nécessaires pour répondre à vos demandes via le formulaire de contact 
            (nom, prénom, email, téléphone, message). Ces informations ne sont jamais partagées avec des tiers.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Utilisation des données</h2>
          <p>
            Les informations fournies sont utilisées exclusivement pour répondre à vos demandes, vous contacter et améliorer le site. 
            Elles ne servent pas à des fins commerciales autres que votre demande initiale.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies techniques nécessaires au fonctionnement. 
            Aucun cookie publicitaire ou de suivi tiers n’est utilisé.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-5">
          <h2>Droits des utilisateurs</h2>
          <p>
            Conformément à la réglementation RGPD, vous disposez d’un droit d’accès, de modification et de suppression de vos données. 
            Pour exercer ces droits, contactez <Link href="mailto:nathalie.drnt@outlook.fr" className='legal-link'>nathalie.drnt@outlook.fr</Link>.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-3 text-center">
          <Link href="/" className="btn btn-turquoise btn-lg">Retour à l’accueil</Link>
        </div>

      </div>
    </section>
  );
}
