'use client';

import { useState } from 'react';

export default function GoogleMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="mb-4 rounded overflow-hidden shadow">

      {!showMap ? (
        <div
          className="bg-light text-center p-5"
          style={{ minHeight: '300px' }}
        >
          <i
            className="bi bi-geo-alt"
            style={{ fontSize: '3rem', color: '#6A1857' }}
            aria-hidden="true"
          ></i>

          <h2 className="h4 mt-3 mb-3">
            Localisation de Saint-Christoly-de-Blaye
          </h2>

          <p className="text-muted mb-4">
            La carte est fournie par Google Maps.
            En cliquant sur le bouton ci-dessous, vous
            acceptez le chargement de ce service externe,
            susceptible de collecter certaines données
            et d’utiliser des cookies ou autres traceurs.
          </p>

          <button
            type="button"
            className="btn btn-turquoise btn-lg"
            onClick={() => setShowMap(true)}
          >
            J’accepte et afficher la carte Google Maps
          </button>

          <p className="small text-muted mt-3 mb-0">
            Vous pouvez également consulter directement
            la localisation sur Google Maps.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Saint-Christoly-de-Blaye"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link d-inline-block mt-2"
          >
            Ouvrir Google Maps
          </a>
        </div>
      ) : (
        <>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps?q=Saint-Christoly-de-Blaye&output=embed"
              title="Carte de Saint-Christoly-de-Blaye"
              aria-label="Carte interactive de Saint-Christoly-de-Blaye"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-light text-center p-3">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowMap(false)}
            >
              Masquer la carte
            </button>
          </div>
        </>
      )}

    </div>
  );
}
