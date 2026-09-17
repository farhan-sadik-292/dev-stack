import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    isAdded: boolean;
    onAdd: (technology: Technology) => void;
}

function TechnologyCard({
    technology,
    isAdded,
    onAdd,
}: TechnologyCardProps) {
    return (
        <article className="technology-card">
            <div className="technology-card-top">
                <div className="technology-icon">
                    <img src={technology.icon} alt={`${technology.name} icon`} />
                </div>

                <span className="technology-badge">{technology.badge}</span>
            </div>

            <h3>{technology.name}</h3>

            <p className="technology-description">
                {technology.description}
            </p>

            <div className="technology-meta">
                <span>{technology.category}</span>

                <span>★ {technology.rating}</span>
            </div>

            <div className="technology-footer">
                <span className="difficulty">
                    {technology.difficulty}
                </span>

                <button
                    className={`add-stack-button ${isAdded ? "added" : ""}`}
                    disabled={isAdded}
                    onClick={() => onAdd(technology)}
                >
                    {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
                </button>
            </div>
        </article>
    );
}

export default TechnologyCard;