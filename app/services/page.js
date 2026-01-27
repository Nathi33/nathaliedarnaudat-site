import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  const services = [
    { title: 'Gestion administrative', description: 'Classement, suivi des dossiers, devis, factures et relances.' },
    { title: 'Accompagnement création d’entreprise', description: 'Formalités, URSSAF, INPI et conseils personnalisés.' },
    { title: 'Communication digitale et visuelle', description: 'Flyers, logos, mises à jour de sites vitrines simples.' },
    { title: 'Assistance pour particuliers', description: 'Démarches CAF, retraite, impôts et constitution de dossiers.' },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Services</h1>
      <div className="row">
        {services.map((service, idx) => (
          <ServiceCard key={idx} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}
