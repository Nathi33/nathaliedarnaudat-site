import Link from 'next/link';

export const metadata = {
  title: "Tarifs télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat",
  description: "Découvrez les packs de télésecrétariat médical pour médecins et infirmiers libéraux avec tarifs clairs, services inclus, options et possibilité de pack sur mesure ou système hybride.",
  openGraph: {
    title: "Tarifs télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat",
    description: "Découvrez les packs de télésecrétariat médical pour médecins et infirmiers libéraux avec tarifs clairs, services inclus, options et possibilité de pack sur mesure ou système hybride.",
    url: 'https://www.nathaliedarnaudat.fr/tarifs',
    siteName: 'Nathalie Darnaudat',
    images: [{ url: '/images/og-Tarifs.webp', width: 1200, height: 630, alt: 'Tarifs télésecrétariat médical Nathalie Darnaudat' }],
    locale: 'fr_FR',
    type: 'website',
    robots: 'index, follow',
    canonical: 'https://www.nathaliedarnaudat.fr/tarifs'
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
            Chaque pack inclut les mêmes services essentiels, avec des quotas d’appels adaptés à vos besoins.
          </p>
          <p>
            Pour des volumes supérieurs à 220 appels entrants, ou pour des besoins spécifiques, je propose un <strong>pack sur mesure</strong> ou un <strong>système hybride</strong> adapté.
          </p>
        </div>

        {/* Services inclus dans tous les packs */}
        <div className="mb-5 mt-5" data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-center">Services inclus dans tous les packs</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion des appels entrants avec filtrage des urgences</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Prise de messages détaillés et transmission rapide</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Interlocutrice unique pour votre cabinet</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion de vos plannings et optimisation de votre agenda</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Respect strict du secret professionnel</li>
          </ul>
        </div>

        {/* Options complémentaires */}
        <div className="mb-5 mt-3" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center">Options complémentaires et système hybride</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>SMS d’alerte ou rappel : 0,20 €/SMS</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Reporting mensuel : 15 €/mois</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion multi-sites : 20 €/site supplémentaire</li>
            <li className="mb-2"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion administrative simple : 20 €/mois</li>
          </ul>
          <p className="mt-4 text-muted">
            <strong>Système hybride :</strong> il s’agit d’un mélange entre votre gestion interne et notre prise en charge à distance. Par exemple, nous pouvons traiter la majorité des appels et messages à distance tout en laissant certaines tâches critiques à votre équipe. Cela vous offre flexibilité, contrôle et optimisation maximale du temps.
          </p>
        </div>

        {/* Grille des packs */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-center">Nos packs et tarifs</h2>
          <div className="row g-4 justify-content-center mt-5">
            {[
              { name: 'Essentiel', entrants: 120, sortants: 10, price: 170, highlight: false },
              { name: 'Confort ⭐', entrants: 160, sortants: 20, price: 240, highlight: true },
              { name: 'Sérénité', entrants: 220, sortants: 40, price: 330, highlight: false }
            ].map((pack, i) => (
              <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={300 + i*50}>
                <div className={`card h-100 d-flex flex-column shadow-sm ${pack.highlight ? 'border border-2 border-primary' : ''}`}>
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-center mb-3">🌿 Pack {pack.name}</h3>
                    <p className="text-center text-muted mb-3">
                      {pack.entrants} appels entrants / mois<br/>
                      + {pack.sortants} appels sortants
                    </p>
                    <p className="fw-bold text-center mt-auto">💰 {pack.price} € / mois</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-3">
            Pour des volumes supérieurs ou un pack sur mesure / système hybride, <Link href="/contact" className="tarifs-link">contactez-moi</Link>.
          </p>
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
                  Les appels entrants au-delà du pack sont facturés 1,70 € / appel et les appels sortants supplémentaires 1,20 € / appel.
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

        {/* JSON-LD pour les prix */}
        <script
          type="application/ld+json"
          id="tarifs-jsonld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Télésecrétariat médical et paramédical",
              "provider": {
                "@type": "Person",
                "name": "Nathalie Darnaudat"
              },
              "serviceType": "Télésecrétariat à distance",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Packs télésecrétariat",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Pack Essentiel",
                    "price": "170",
                    "priceCurrency": "EUR",
                    "eligibleQuantity": {
                      "@type": "QuantitativeValue",
                      "value": 120,
                      "unitCode": "C62"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "Pack Confort",
                    "price": "240",
                    "priceCurrency": "EUR",
                    "eligibleQuantity": {
                      "@type": "QuantitativeValue",
                      "value": 160,
                      "unitCode": "C62"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "Pack Sérénité",
                    "price": "330",
                    "priceCurrency": "EUR",
                    "eligibleQuantity": {
                      "@type": "QuantitativeValue",
                      "value": 220,
                      "unitCode": "C62"
                    }
                  }
                ]
              }
            })
          }}
        />
      </div>
    </section>
  );
}