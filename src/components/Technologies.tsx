import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
    technologies: Technology[];
    stack: Technology[];
    onAdd: (technology: Technology) => void;
    onRemove: (technologyId: string) => void;
    onRemoveAll: () => void;
}

function Technologies({
    technologies,
    stack,
    onAdd,
    onRemove,
    onRemoveAll,
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
                        Choose the technologies you need and create your own
                        development stack.
                    </p>
                </div>

                <div className="technologies-layout">
                    <div className="technology-grid">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                isAdded={stack.some(
                                    (item) => item.id === technology.id,
                                )}
                                onAdd={onAdd}
                            />
                        ))}
                    </div>

                    <YourStack
                        stack={stack}
                        onRemove={onRemove}
                        onRemoveAll={onRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
}

export default Technologies;