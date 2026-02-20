import Link from 'next/link';

export const metadata = {
  title: "Tarifs télésecrétariat médical – Nathalie Darnaudat",
  description: "Découvrez les packs de télésecrétariat médical et paramédical, avec tarifs, services inclus et FAQ.",
  openGraph: {
    title: "Tarifs télésecrétariat médical – Nathalie Darnaudat",
    description: "Découvrez les packs de télésecrétariat médical et paramédical, avec tarifs, services inclus et FAQ.",
    url: 'https://www.nathaliedarnaudat.fr/tarifs',
    siteName: 'Nathalie Darnaudat',
    images: [{ url: '/images/og-Tarifs.webp', width: 1200, height: 630, alt: 'Tarifs télésecrétariat médical Nathalie Darnaudat' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Tarifs() {
  return (
    <section className="section-tarifs">
      <div className="container">
        <h1 className="display-5 fw-bold mb-7 text-center" data-aos="fade-up">Tarifs télésecrétariat médical</h1>

        {/* Packs */}
        <div className="row g-4 mb-6">
          {/* Pack Essentiel */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow-sm h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center mb-3">🌿 Pack Essentiel</h3>
                <p className="text-center text-muted">60 appels / mois</p>
                <ul className="list-unstyled mb-3 flex-grow-1">
                  <li>• Gestion des appels entrants : accueil, prise de messages, filtrage simple</li>
                  <li>• Transmission rapide des informations</li>
                  <li>• Gestion selon vos consignes</li>
                  <li>• Interlocutrice unique</li>
                  <li>• Gestion des plannings basique</li>
                </ul>
                <p className="fw-bold text-center mt-auto">💰 150 € / mois</p>
              </div>
            </div>
          </div>

          {/* Pack Confort */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow-sm h-100 d-flex flex-column border border-2 border-primary">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center mb-3">🌿 Pack Confort ⭐</h3>
                <p className="text-center text-muted">120 appels / mois</p>
                <ul className="list-unstyled mb-3 flex-grow-1">
                  <li>• Accueil téléphonique complet</li>
                  <li>• Prise de messages détaillés</li>
                  <li>• Filtrage des urgences</li>
                  <li>• Transmission prioritaire</li>
                  <li>• Organisation personnalisée des appels et plannings</li>
                  <li>• Interlocutrice unique dédiée</li>
                </ul>
                <p className="fw-bold text-center mt-auto">💰 220 € / mois</p>
              </div>
            </div>
          </div>

          {/* Pack Sérénité */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow-sm h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center mb-3">🌿 Pack Sérénité</h3>
                <p className="text-center text-muted">180 appels / mois</p>
                <ul className="list-unstyled mb-3 flex-grow-1">
                  <li>• Gestion complète des appels patients</li>
                  <li>• Filtrage et priorisation selon urgences</li>
                  <li>• Organisation et plannings sur mesure</li>
                  <li>• Suivi personnalisé</li>
                  <li>• Interlocutrice unique</li>
                </ul>
                <p className="fw-bold text-center mt-auto">💰 300 € / mois</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="display-6 fw-bold mb-4 mt-5 text-center" data-aos="fade-up" data-aos-delay="400">FAQ – Questions fréquentes</h2>
        <div className="accordion" id="faqAccordion" data-aos="fade-up" data-aos-delay="450">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                Comment se déroule la gestion des appels entrants ?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Je prends vos appels selon vos consignes, filtre les urgences et transmets rapidement toutes les informations nécessaires.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                Comment sont facturés les appels supplémentaires ?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Tous les appels au-delà du pack sont facturés : entrants à 1,10 € / sortants à 0,70 €.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                Faites-vous les appels sortants pour relances patients ? ?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Oui, les appels sortants sont possibles et sont facturés comme indiqué dans la question précédente.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                Puis-je modifier mon pack en cours de mois ?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Oui, il est possible de passer à un autre pack ou d’ajuster le nombre d’appels, les tarifs seront recalculés au prorata.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                Est-ce que la gestion des plannings est incluse ?
              </button>
            </h2>
            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Oui, selon le pack choisi, une gestion basique ou sur mesure des plannings est incluse.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                Intervenez-vous uniquement en Gironde ou Charente ? ?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                J’interviens à distance pour tous les professionnels et ponctuellement en cabinet dans ces départements.
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
          <Link href="/contact" className="btn btn-turquoise btn-lg">
            Me contacter pour un pack personnalisé
          </Link>
        </div>
      </div>
    </section>
  );
}