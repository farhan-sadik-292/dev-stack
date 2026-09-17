import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
    technologies: Technology[];
    stack: Technology[];
    onAdd: (technology: Technology) => void;
}

function Technologies({
    technologies,
    stack,
    onAdd,
}: TechnologiesProps) {
    return (
        <section className="technologies-section" id="technologies">
            <div className="container">
                <div className="section-heading">
                    <p className="section-label">TECHNOLOGY COLLECTION</p>

                    <h2>
                        Explore Modern
                        <span> Technologies</span>
                    </h2>

                    <p>
                        Choose the technologies you need and create your own development
                        stack.
                    </p>
                </div>

                <div className="technology-grid">
                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            isAdded={stack.some((item) => item.id === technology.id)}
                            onAdd={onAdd}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;