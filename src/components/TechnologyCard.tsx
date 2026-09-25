import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="technology-icon"
        />

        {technology.badge && (
          <span className="technology-badge">
            {technology.badge}
          </span>
        )}
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          <span>★</span>
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        className={`add-stack-button ${
          isAdded ? "added" : ""
        }`}
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>
    </article>
  );
}