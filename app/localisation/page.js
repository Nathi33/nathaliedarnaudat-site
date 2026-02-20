export const metadata = {
  title: 'Localisation – Nathalie Darnaudat',
};

export default function Localisation() {
  return (
    <section className="section-localisation bg-white">
      <div className="container">
        <h1 className="mb-4" data-aos="fade-up">Où me trouver</h1>

        <p data-aos="fade-up" data-aos-delay="100">
          Basée à <strong>Saint-Christoly-de-Blaye (33920)</strong>, j’interviens principalement à distance pour gérer vos appels et messages patients.  
          Au besoin, je peux me déplacer ponctuellement pour vous rencontrer ou vous assister sur place.
        </p>

        <div className="ratio ratio-16x9 mt-4 rounded overflow-hidden shadow" data-aos="zoom-in" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps?q=Saint-Christoly-de-Blaye&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-muted mt-5 small" data-aos="fade-up" data-aos-delay="300">
          Les prestations à distance me permettent également d’accompagner des clients
          partout en France.
        </p>
      </div>
    </section>
  );
}
