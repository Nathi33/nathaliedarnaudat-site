'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const successRef = useRef(null);
  const errorRef = useRef(null);

  // Scroll vers une ref avec offset pour navbar fixe
  const scrollToRef = (ref) => {
    if (!ref.current) return;

    const topOffset = 100;
    const rect = ref.current.getBoundingClientRect();
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - topOffset,
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

    setSuccess(false);
    setError(false);

    const form = e.currentTarget;

    // Honeypot anti-spam
    const websiteField = form.elements.namedItem('website');
    if (websiteField?.value) return;

    setLoading(true);

    try {
      // Envoi principal vers moi
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Réponse automatique vers le client
      // Si elle échoue, le succès principal reste valide
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          form,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } catch (autoReplyErr) {
        console.warn(
          'Réponse automatique EmailJS non envoyée : ',
          autoReplyErr
        );
      }

      setSuccess(true);
      form.reset();

      // Scroll vers le message de succès
      setTimeout(() => {
        scrollToRef(successRef);
      }, 50);

    } catch (err) {
      console.error('Erreur EmailJS :', err);
      setError(true);

      setTimeout(() => {
        scrollToRef(errorRef);
      }, 50);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* MESSAGE DE SUCCÈS */}
      {success && (
        <div
          ref={successRef}
          className="alert alert-success text-center"
          role="alert"
          aria-live="polite"
        >
          Merci pour votre demande !
          Je vous recontacte généralement sous 24 à 48 heures ouvrées.
        </div>
      )}

      {/* MESSAGE D'ERREUR */}
      {error && (
        <div
          ref={errorRef}
          className="alert alert-danger text-center"
          role="alert"
          aria-live="assertive"
        >
          Une erreur est survenue lors de l’envoi du message.
          Merci de réessayer ou de me contacter directement à{' '}
          <strong>contact@nathaliedarnaudat.fr</strong>.
        </div>
      )}

      <form
        onSubmit={sendEmail}
        onChange={() => {
          if (success) setSuccess(false);
          if (error) setError(false);
        }}
      >
        {/* HONEYPOT ANTI-SPAM */}
        <input
          type="text"
          name="website"
          className="d-none"
          tabIndex="-1"
          autoComplete="off"
        />

        {/* NOM / CABINET ET PRÉNOM */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nom" className="form-label">
              Nom / Cabinet <span className="text-danger">*</span>
            </label>

            <input
              id="nom"
              type="text"
              name="nom"
              className="form-control"
              autoComplete="organization"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="prenom" className="form-label">
              Prénom
            </label>

            <input
              id="prenom"
              type="text"
              name="prenom"
              className="form-control"
              autoComplete="given-name"
            />
          </div>
        </div>

        {/* TÉLÉPHONE */}
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Téléphone <span className="text-danger">*</span>
          </label>

          <input
            id="telephone"
            type="tel"
            name="telephone"
            className="form-control"
            autoComplete="tel"
            pattern="^(?:(?:\+33|0)[1-9](?:[ .-]?\d{2}){4})$"
            title="Veuillez saisir un numéro de téléphone français valide."
            required
          />
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adresse e-mail <span className="text-danger">*</span>
          </label>

          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            autoComplete="email"
            required
          />
        </div>

        {/* TYPE DE STRUCTURE */}
        <div className="mb-3">
          <label htmlFor="type_structure" className="form-label">
            Vous exercez en tant que...{' '}
            <span className="text-danger">*</span>
          </label>

          <select
            id="type_structure"
            name="type_structure"
            className="form-select"
            required
          >
            <option value="">Choisir...</option>
            <option value="Professionnel exerçant seul">
              Professionnel exerçant seul
            </option>
            <option value="Cabinet regroupant plusieurs praticiens">
              Cabinet regroupant plusieurs praticiens
            </option>
            <option value="Maison de santé">
              Maison de santé
            </option>
            <option value="Centre médical ou paramédical">
              Centre médical ou paramédical
            </option>
            <option value="Autre structure">
              Autre structure
            </option>
          </select>
        </div>

        {/* PROFESSION */}
        <div className="mb-3">
          <label htmlFor="demande" className="form-label">
            Votre profession ou spécialité{' '}
            <span className="text-danger">*</span>
          </label>

          <select
            id="demande"
            name="demande"
            className="form-select"
            required
          >
            <option value="">Choisir...</option>
            <option value="Médecin">Médecin</option>
            <option value="Infirmier / Infirmière">
              Infirmier / Infirmière
            </option>
            <option value="Kinésithérapeute">
              Kinésithérapeute
            </option>
            <option value="Ostéopathe">Ostéopathe</option>
            <option value="Sage-femme">Sage-femme</option>
            <option value="Orthophoniste">Orthophoniste</option>
            <option value="Orthoptiste">Orthoptiste</option>
            <option value="Podologue">Podologue</option>
            <option value="Psychologue">Psychologue</option>
            <option value="Autre profession médicale ou paramédicale">
              Autre profession médicale ou paramédicale
            </option>
          </select>
        </div>

        {/* PRESTATIONS RECHERCHÉES */}
        <div className="mb-3">
          <label htmlFor="prestation" className="form-label">
            Votre besoin principal{' '}
            <span className="text-danger">*</span>
          </label>

          <select
            id="prestation"
            name="prestation"
            className="form-select"
            required
          >
            <option value="">Choisir...</option>
            <option value="Accueil téléphonique">
              Accueil téléphonique
            </option>
            <option value="Gestion des agendas">
              Gestion des agendas
            </option>
            <option value="Accueil téléphonique et gestion des agendas">
              Accueil téléphonique et gestion des agendas
            </option>
            <option value="Autre demande">
              Autre demande
            </option>
          </select>
        </div>

        {/* VOLUME D'APPELS */}
        <div className="mb-3">
          <label htmlFor="volume_appels" className="form-label">
            Votre volume d’appels mensuel estimé
          </label>

          <select
            id="volume_appels"
            name="volume_appels"
            className="form-select"
          >
            <option value="">Je ne sais pas / Non renseigné</option>
            <option value="Moins de 80 appels">
              Moins de 80 appels
            </option>
            <option value="Entre 80 et 130 appels">
              Entre 80 et 130 appels
            </option>
            <option value="Entre 130 et 190 appels">
              Entre 130 et 190 appels
            </option>
            <option value="Entre 190 et 260 appels">
              Entre 190 et 260 appels
            </option>
            <option value="Plus de 260 appels">
              Plus de 260 appels
            </option>
          </select>

          <small className="text-muted">
            Cette information est facultative et permet de mieux comprendre vos besoins.
          </small>
        </div>

        {/* MESSAGE */}
        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Votre message <span className="text-danger">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Présentez-moi votre activité et expliquez-moi vos besoins en accueil téléphonique ou en gestion des agendas..."
            className="form-control"
            minLength={20}
            required
          />

          <small className="text-muted">
            Merci de ne pas communiquer de données personnelles ou médicales concernant vos patients dans ce formulaire.
          </small>
        </div>

        {/* INFORMATION SUR LES DONNÉES PERSONNELLES */}
        <p className="small text-muted mb-4">
          Les informations transmises sont utilisées uniquement pour répondre à votre demande et vous recontacter.
          Pour en savoir plus sur le traitement de vos données personnelles et vos droits, consultez notre{' '}
          <Link href="/politique-confidentialite/" className='legal-link'>
            politique de confidentialité
          </Link>.
        </p>

        {/* BOUTON ENVOI */}
        <button
          type="submit"
          className="btn btn-turquoise"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                aria-hidden="true"
              ></span>
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
