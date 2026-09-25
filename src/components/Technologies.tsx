import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../types/technology";

interface TechnologiesProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function Technologies({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesProps) {
  return (
    <section
      className="technologies-section"
      id="technologies"
    >
      <div className="section-heading">
        <h2>
          Explore the{" "}
          <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build
          your ideal stack.
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
    </section>
  );
}