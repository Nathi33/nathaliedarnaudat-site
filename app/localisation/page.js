export const metadata = {
  title: 'Localisation – Nathalie Darnaudat',
};

export default function Localisation() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h1 className="mb-4" data-aos="fade-up">Où me trouver</h1>

        <p data-aos="fade-up" data-aos-delay="100">
          Basée à <strong>Saint-Christoly-de-Blaye (33920)</strong>,  
          j’interviens en <strong>Gironde</strong> et en <strong>Charente Maritime</strong>, en présentiel ou à distance selon vos besoins et votre localisation.
        </p>

        <div className="ratio ratio-16x9 mt-4 rounded overflow-hidden shadow" data-aos="zoom-in" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps?q=Saint-Christoly-de-Blaye&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-muted mt-5 small" data-aos="fade-up" data-aos-delay="300">
          Les prestations à distance permettent d’accompagner également des clients
          situés au-delà de ces zones.
        </p>
      </div>
    </section>
  );
}
