import "./Card.css";

export default function Card({ imageSrc, badge, title, description }) {
  return (
    <article className="card-item">
      <div className="card-gradient">
        <div className="card-surface">
          <div className="card-image">
            <img src={imageSrc} alt={title} />
            <div className="card-image-overlay" aria-hidden="true" />
            {badge && <span className="card-badge">{badge}</span>}
          </div>

          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>

            <div className="card-footer">
              <button className="card-cta" aria-label={`Read article: ${title}`}>
                <span>Read Article</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
