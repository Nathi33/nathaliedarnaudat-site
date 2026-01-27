export default function ContactForm() {
  return (
    <form action="mailto:contact@nathaliedarnaudat.fr" method="POST" encType="text/plain">
      <div className="mb-3">
        <label className="form-label">Nom</label>
        <input type="text" className="form-control" name="Nom" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="Email" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="4" name="Message" required></textarea>
      </div>
      <button type="submit" className="btn btn-info text-dark">Envoyer</button>
    </form>
  );
}
