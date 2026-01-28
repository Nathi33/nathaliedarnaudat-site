export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 text-center service-card border-0 shadow-sm">
        <div className="card-body">
          <i className={`bi ${icon} display-5 text-info mb-3`}></i>
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
