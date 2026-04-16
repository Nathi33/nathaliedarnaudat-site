import Link from 'next/link';

export const metadata = {
  title: "Tarifs télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat",
  description:
    "Découvrez mes formules de télésecrétariat médical à distance pour médecins, infirmiers libéraux et professionnels de santé : packs mensuels, options et offre sur mesure.",
  alternates: {
    canonical: 'https://www.nathaliedarnaudat.fr/tarifs',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tarifs télésecrétariat médical pour médecins et infirmiers libéraux – Nathalie Darnaudat",
    description:
      "Découvrez mes formules de télésecrétariat médical à distance pour médecins, infirmiers libéraux et professionnels de santé : packs mensuels, options et offre sur mesure.",
    url: 'https://www.nathaliedarnaudat.fr/tarifs',
    siteName: 'Nathalie Darnaudat',
    images: [
      {
        url: '/images/og-Tarifs.webp',
        width: 1200,
        height: 630,
        alt: 'Tarifs télésecrétariat médical Nathalie Darnaudat',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Tarifs() {
  const packs = [
    {
      name: 'Essentiel',
      calls: 'Jusqu’à 80 appels traités / mois',
      price: '159 € / mois',
      overCall: '1,90 € / appel supplémentaire',
      note: 'Idéal pour une activité avec volume modéré',
      highlight: false,
    },
    {
      name: 'Confort',
      calls: 'Jusqu’à 130 appels traités / mois',
      price: '219 € / mois',
      overCall: '1,80 € / appel supplémentaire',
      note: 'Idéal pour une activité régulière',
      highlight: true,
    },
    {
      name: 'Sérénité',
      calls: 'Jusqu’à 190 appels traités / mois',
      price: '289 € / mois',
      overCall: '1,70 € / appel supplémentaire',
      note: 'Idéal pour une activité soutenue',
      highlight: false,
    },
    {
      name: 'Performance',
      calls: 'Jusqu’à 260 appels traités / mois',
      price: '359 € / mois',
      overCall: '1,60 € / appel supplémentaire',
      note: 'Idéal pour une activité importante',
      highlight: false,
    },
  ];

  return (
    <section className="section-tarifs mt-4">
      <div className="container">

        {/* HERO */}
        <div className="text-center mb-5 pb-3" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-5">
            Tarifs de télésecrétariat médical pour médecins et infirmiers libéraux
          </h1>
          <p className="lead mb-4">
            Des formules claires et adaptées aux <strong>médecins libéraux</strong>, <strong>infirmiers libéraux</strong> et autres <strong>professionnels de santé</strong>,
            avec un accompagnement humain, rigoureux et personnalisé.
          </p>
          <p className="mb-0">
            Chaque formule inclut un <strong>socle de service complet</strong> déjà intégré au tarif affiché :
            mise en place de votre organisation, personnalisation des consignes, suivi du fonctionnement et continuité du service.
          </p>
        </div>

        {/* INCLUS DANS TOUS LES PACKS */}
        <div className="mb-5 pb-3" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-center mb-5">Ce qui est inclus dans toutes les formules</h2>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-4 p-md-5 rounded-4 border shadow-sm bg-white">
                <ul className="list-unstyled mb-4">
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Accueil téléphonique professionnel et personnalisé au nom du cabinet</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion des appels entrants</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Qualification des demandes et prise de messages détaillés</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Transmission des messages selon vos consignes</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion des urgences selon le protocole défini ensemble</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Prise, modification et annulation de rendez-vous</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Gestion de l’agenda selon votre organisation</li>
                  <li className="mb-3"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Appels sortants liés à la gestion courante si nécessaire</li>
                  <li className="mb-0"><i className="bi bi-check-lg text-brand me-2" aria-hidden="true"></i>Suivi du fonctionnement et adaptation à vos habitudes</li>
                </ul>

                <p className="mb-0">
                  <strong>Important :</strong> aucune information médicale n’est délivrée aux patients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULES */}
        <div className="mb-5 pb-3" data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-center mb-5">Mes formules mensuelles</h2>

          <p className="text-center mb-5">
            Le volume mensuel correspond aux <strong>appels effectivement traités dans le cadre de la prestation</strong>.
          </p>

          <div className="row g-4 justify-content-center">
            {packs.map((pack, i) => (
              <div
                key={i}
                className="col-xl-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200 + i * 50}
              >
                <div
                  className={`card h-100 d-flex flex-column shadow-sm rounded-4 border-2 ${
                    pack.highlight
                      ? 'border-primary'
                      : 'border-light-subtle'
                  }`}
                >
                  <div className="card-body d-flex flex-column p-4 p-lg-4">
                    <div className="text-center mb-3">
                      <h3 className="h4 fw-bold mb-3">
                        {pack.highlight ? '⭐ ' : ''}Pack {pack.name}
                      </h3>
                      <p className="text-muted mb-3">{pack.calls}</p>
                    </div>

                    <div className="text-center mb-4">
                      <p className="fw-bold fs-3 mb-2">{pack.price}</p>
                      <p className="text-muted mb-0">{pack.overCall}</p>
                    </div>

                    <div className="mt-auto text-center">
                      <p className="mb-0">
                        <small>{pack.note}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pack sur mesure */}
          <div className="row justify-content-center mt-4 mt-md-5">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="450">
              <div className="card shadow-sm rounded-4 border-2 border-light-subtle">
                <div className="card-body p-4 p-md-5 text-center">
                  <h3 className="h3 fw-bold mb-3">Pack Gros Volume / Sur mesure</h3>
                  <p className="text-muted mb-3">À partir de 300 appels traités / mois</p>
                  <p className="fw-bold fs-4 mb-3">Sur devis</p>
                  <p className="mb-0">
                    Pour les volumes élevés, les organisations plus complexes, les besoins multi-sites
                    ou les consignes spécifiques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini texte d'aide */}
          <div className="text-center mt-5">
            <p className="mb-0">
              <strong>Vous hésitez entre deux formules ?</strong> Je vous oriente vers la solution la plus adaptée selon votre volume d’appels et votre organisation.
            </p>
          </div>
        </div>

        {/* OPTIONS COMPLEMENTAIRES RESTRUCTUREES */}
        <div className="mb-5 pb-3" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center mb-5">Options complémentaires</h2>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-4 p-md-5 rounded-4 border shadow-sm bg-white">
                <p className="mb-4">
                  Ces options sont disponibles pour compléter votre pack selon vos besoins.
                </p>

                <ul className="list-unstyled mb-0 ps-4">
                  <li className="mb-3"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>Agenda professionnel dédié <strong>12 € / mois</strong></li>
                  <li className="mb-3"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>Synchronisation Google / Outlook / CalDav <strong>3,99 € / mois</strong></li>
                  <li className="mb-3"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>Application mobile <strong>2,50 € / mois</strong></li>
                  <li className="mb-3"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>SVI (Serveur Vocal Interactif) <strong>5,50 € / mois</strong></li>
                  <li className="mb-3"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>Reporting mensuel détaillé <strong>15 € / mois</strong></li>
                  <li className="mb-0"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>Gestion multi-sites <strong>20 € / mois / site supplémentaire</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* OPTIONS AVEC AGENDA DEDIE */}
        <div className="mb-5 pb-3" data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-center mb-5">Options disponibles uniquement avec l’agenda professionnel dédié</h2>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-4 p-md-5 rounded-4 border shadow-sm bg-white">
                <p className="mb-4">
                  Ces fonctionnalités sont disponibles <strong>uniquement si vous choisissez l’option Agenda professionnel dédié</strong>.
                </p>

                <ul className="list-unstyled mb-4 ps-4">
                  <li className="mb-3"><i className="bi bi-calendar-check text-brand me-2" aria-hidden="true"></i>Prise de rendez-vous par internet <strong>3,99 € / mois</strong></li>
                  <li className="mb-3"><i className="bi bi-plus-circle text-brand me-2" aria-hidden="true"></i>SMS patients / rappels <strong>0,15 € / SMS</strong></li>
                  <li className="mb-3"><i className="bi bi-camera-video text-brand me-2" aria-hidden="true"></i>Téléconsultation <strong>12,50 € / mois</strong></li>
                  <li className="mb-0"><i className="bi bi-credit-card text-brand me-2" aria-hidden="true"></i>Prépaiement des rendez-vous <strong>12,50 € / mois</strong></li>
                </ul>

                <p className="mb-0">
                  Si vous utilisez déjà <strong>Doctolib, Maiia ou une autre solution externe</strong>, ces fonctionnalités relèvent de votre propre plateforme.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FRAIS PONCTUELS */}
        <div className="mb-5 pb-3" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-center mb-5">Frais ponctuels éventuels</h2>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-4 p-md-5 rounded-4 border shadow-sm bg-white">
                <p className="mb-4">
                  Ces frais ponctuels concernent uniquement la mise en place ou la configuration initiale de certains services.
                </p>
                <ul className="list-unstyled mb-0 ps-4">
                  <li className="mb-3"><i className="bi bi-gear text-brand me-2" aria-hidden="true"></i>Mise en place de l’agenda professionnel dédié + import de données <strong>50 €</strong></li>
                  <li className="mb-0"><i className="bi bi-gear text-brand me-2" aria-hidden="true"></i>Configuration SVI <strong>70 €</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="350">
          <h2 className="display-6 fw-bold mb-5 text-center">FAQ – Questions fréquentes</h2>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  Comment est calculé le volume mensuel ?
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="faq1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Le volume correspond aux appels effectivement traités dans le cadre de la prestation,
                  incluant les appels entrants et, si nécessaire, certains appels sortants liés à la gestion courante du cabinet.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Que se passe-t-il en cas de dépassement ?
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faq2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Les appels supplémentaires sont facturés selon le tarif prévu dans votre formule.
                  Si les dépassements deviennent récurrents, une formule plus adaptée pourra vous être proposée.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Puis-je faire évoluer ma formule ?
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faq3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Oui. Votre formule peut être réévaluée si votre volume d’appels évolue
                  ou si votre organisation change, afin de rester adaptée à votre activité réelle.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  Les options sont-elles obligatoires ?
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faq4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Non. Les options sont entièrement facultatives et peuvent être activées
                  selon vos besoins, sous réserve de compatibilité technique ou organisationnelle.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-5 pt-3" data-aos="fade-up" data-aos-delay="400">
          <p className="mb-4 fs-5">
            Besoin d’une formule adaptée à votre cabinet ?
          </p>
          <Link href="/contact" className="btn btn-turquoise btn-lg px-4 py-3">
            Discutons de vos besoins
          </Link>
        </div>

      </div>
    </section>
  );
}