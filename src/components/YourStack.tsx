import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p>
            {stack.length} Technology Selected
          </p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">
          <div className="empty-icon">+</div>

          <p>No technologies selected yet.</p>

          <span>
            Add technologies from the collection
            to build your stack.
          </span>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((technology) => (
            <div
              className="stack-item"
              key={technology.id}
            >
              <img
                src={technology.icon}
                alt=""
                className="stack-item-icon"
              />

              <div className="stack-item-info">
                <strong>{technology.name}</strong>
                <span>{technology.category}</span>
              </div>

              <button
                type="button"
                className="remove-button"
                onClick={() =>
                  onRemove(technology.id)
                }
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="remove-all-button"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
      >
        Remove All
      </button>
    </aside>
  );
}