import Link from 'next/link';

export const metadata = {
  title: "Tarifs télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat",
  description: "Découvrez les packs de télésecrétariat médical pour médecins et infirmiers libéraux avec tarifs clairs, services inclus, options et possibilité de pack sur mesure.",
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/tarifs',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tarifs télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat",
    description: "Découvrez les packs de télésecrétariat médical pour médecins et infirmiers libéraux avec tarifs clairs, services inclus, options et possibilité de pack sur mesure.",
    url: 'https://www.nathaliedarnaudat.fr/tarifs',
    siteName: 'Nathalie Darnaudat',
    images: [
      { url: '/images/og-Tarifs.webp', width: 1200, height: 630, alt: 'Tarifs télésecrétariat médical Nathalie Darnaudat' },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Tarifs() {
  return (
    <section className="section-tarifs mt-5">
      <div className="container">
        <h1 className="display-5 fw-bold mb-5 text-center" data-aos="fade-up">
          Tarifs de votre télésecrétariat médical spécialisé pour médecins et infirmiers libéraux
        </h1>

        {/* Introduction */}
        <div className="mb-5 text-center" data-aos="fade-up" data-aos-delay="100">
          <p>
            Je propose un service complet de <strong>télésecrétariat à distance</strong> pour médecins, infirmiers libéraux et autres professionnels paramédicaux. 
            Chaque pack inclut les mêmes services essentiels, avec un <strong>socle inclus</strong> pour l’organisation, la personnalisation et la continuité du service.
          </p>
          <p>
            Pour des volumes supérieurs à 400 appels / mois ou des besoins spécifiques, je propose un <strong>pack sur mesure</strong>.
          </p>
        </div>

        {/* Services inclus dans tous les packs */}
        <div className="mb-5 mt-5" data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-center">Services inclus dans tous les packs</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Accueil téléphonique professionnel et personnalisé</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion des appels entrants et sortants liés à la gestion courante</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Prise et transmission des messages selon vos consignes</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Prise, modification et annulation de rendez-vous, gestion de l’agenda</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Suivi du dossier client et adaptation à vos habitudes</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Respect strict du secret professionnel</li>
          </ul>
        </div>

        {/* Grille des packs */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-center">Nos packs et tarifs</h2>
          <div className="row g-4 justify-content-center mt-5">
            {[
              { name: 'Essentiel', calls: 'jusqu’à 80 appels / mois', price: 149, highlight: false, overCall: '1,40 €/appel supplémentaire' },
              { name: 'Confort ⭐', calls: 'jusqu’à 170 appels / mois', price: 249, highlight: true, overCall: '1,35 €/appel supplémentaire' },
              { name: 'Sérénité', calls: 'jusqu’à 300 appels / mois', price: 389, highlight: false, overCall: '1,30 €/appel supplémentaire' },
              { name: 'Gros Volume / Personnalisé', calls: 'à partir de 400 appels / mois', price: 'sur devis', highlight: false, overCall: '1,20 €/appel supplémentaire' }
            ].map((pack, i) => (
              <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={300 + i*50}>
                <div className={`card h-100 d-flex flex-column shadow-sm ${pack.highlight ? 'border border-2 border-primary' : ''}`}>
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-center mb-3">🌿 Pack {pack.name}</h3>
                    <p className="text-center text-muted mb-3">{pack.calls}</p>
                    {pack.price !== 'sur devis' ? (
                      <p className="fw-bold text-center mt-auto">💰 {pack.price} € / mois<br/><small className="text-muted">{pack.overCall}</small></p>
                    ) : (
                      <p className="fw-bold text-center mt-auto">💰 {pack.price}<br/><small className="text-muted">{pack.overCall}</small></p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Options complémentaires */}
        <div className="mb-5 mt-3" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center">Options complémentaires</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>SMS patients / rappels : 0,15 €/SMS</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Reporting mensuel détaillé : 15 €/mois</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion multi-sites : 20 €/site supplémentaire</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Agenda professionnel dédié : 12 €/mois</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Synchronisation Google/Outlook/CalDav : 3,99 €/mois</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Application mobile : 2,50 €/mois</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Serveur Vocal Interactif (SVI) : 5,50 €/mois</li>
          </ul>
        </div>

        {/* FAQ courte */}
        <div data-aos="fade-up" data-aos-delay="350">
          <h2 className="display-6 fw-bold mb-4 text-center">FAQ – Questions fréquentes</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  Comment se déroule la gestion des appels entrants ?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Tous vos appels sont pris selon vos consignes, avec gestion des urgences et transmission rapide des informations nécessaires.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  Puis-je modifier mon pack en cours de mois ?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Oui, vous pouvez ajuster votre pack, le nombre d’appels ou passer à un pack supérieur ; les tarifs seront recalculés au prorata.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Comment sont facturés les appels supplémentaires ?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Chaque appel supplémentaire est facturé selon le tarif indiqué dans le pack choisi : 1,40 € (Essentiel), 1,35 € (Confort), 1,30 € (Sérénité), 1,20 € (Gros Volume / Personnalisé).
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  Les options sont-elles incluses dans les packs ?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Non, les options complémentaires sont disponibles en supplément selon vos besoins.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <Link href="/contact" className="btn btn-turquoise btn-lg">
            Discutons ensemble de vos besoins
          </Link>
        </div>
      </div>
    </section>
  );
}