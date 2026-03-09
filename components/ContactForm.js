'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const successRef = useRef(null);
  const errorRef = useRef(null);
  const firstInputRef = useRef(null);

  // Scroll vers une ref avec offset pour navbar fixe
  const scrollToRef = (ref) => {
    if (!ref.current) return;
    const topOffset = 100;
    window.scrollTo({
      top: ref.current.offsetTop - topOffset,
      behavior: 'smooth',
    });
  };

  // Efface automatiquement les messages après 5 secondes
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);

    // Honeypot anti-spam
    if (e.target.website.value) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      e.target.reset();
      // Réinitialiser la case RGPD
      e.target.rgpd.checked = false;
      // Scroll vers message succès
      scrollToRef(successRef);
      // Focus sur le premier input pour nouvelle saisie
      firstInputRef.current?.focus();
    } catch (err) {
      console.error(err);
      setError(true);
      scrollToRef(errorRef);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {success && (
        <div
          ref={successRef}
          className="alert alert-success text-center"
          role="alert"
          aria-live="polite"
        >
          Merci pour votre demande de télésecrétariat. Je vous recontacte sous 24 à 48 heures ouvrées.
        </div>
      )}

      {error && (
        <div
          ref={errorRef}
          className="alert alert-danger text-center"
          role="alert"
          aria-live="polite"
        >
          Une erreur est survenue lors de l’envoi du message. Merci de réessayer.
        </div>
      )}

      <form
        onSubmit={sendEmail}
        onChange={() => {
          if (success) setSuccess(false);
          if (error) setError(false);
        }}
      >
        {/* Honeypot */}
        <input type="text" name="website" className="d-none" />

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">
              Nom / Cabinet <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nom"
              aria-required="true"
              className="form-control"
              required
              ref={firstInputRef}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Prénom</label>
            <input type="text" name="prenom" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Téléphone <span className="text-danger">*</span>
          </label>
          <input type="tel" name="telephone" aria-required="true" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Adresse e-mail <span className="text-danger">*</span>
          </label>
          <input type="email" name="email" aria-required="true" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Spécialité du professionnel de santé <span className="text-danger">*</span>
          </label>
          <select name="demande" aria-required="true" className="form-select" required>
            <option value="">Choisir...</option>
            <option>Médecin</option>
            <option>Infirmier</option>
            <option>Kinésithérapeute</option>
            <option>Ostéopathe</option>
            <option>Psychologue</option>
            <option>Autre</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Expliquez votre demande (prise d'appels, suivi patients…)"
            aria-required="true"
            className="form-control"
            required
          />
        </div>

        {/* RGPD */}
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" id="rgpd" required />
          <label className="form-check-label" htmlFor="rgpd">
            J’accepte que mes données soient utilisées pour être recontacté(e).<span className="text-danger"> *</span>
          </label>
        </div>

        <button type="submit" className="btn btn-turquoise" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Envoi en cours...
            </>
          ) : (
            'Envoyer le message'
          )}
        </button>

        <div className="text-muted mt-4">
          <span className="text-danger">*</span> Champs obligatoires
        </div>
      </form>
    </>
  );
}