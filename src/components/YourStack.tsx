import type { Technology } from "../types/technology";

interface YourStackProps {
    stack: Technology[];
    onRemove: (technologyId: string) => void;
    onRemoveAll: () => void;
}

function YourStack({
    stack,
    onRemove,
    onRemoveAll,
}: YourStackProps) {
    return (
        <aside className="your-stack">
            <div className="stack-header">
                <div>
                    <p className="stack-label">YOUR DEVELOPMENT STACK</p>
                    <h2>
                        Your Stack{" "}
                        <span className="stack-count">{stack.length}</span>
                    </h2>
                </div>

                {stack.length > 0 && (
                    <button
                        className="remove-all-button"
                        onClick={onRemoveAll}
                    >
                        Remove All
                    </button>
                )}
            </div>

            {stack.length === 0 ? (
                <div className="empty-stack">
                    <div className="empty-stack-icon">+</div>

                    <h3>Your stack is empty</h3>

                    <p>
                        Add technologies from the collection to build your
                        development stack.
                    </p>
                </div>
            ) : (
                <div className="stack-list">
                    {stack.map((technology) => (
                        <div className="stack-item" key={technology.id}>
                            <div className="stack-item-icon">
                                <img
                                    src={technology.icon}
                                    alt={`${technology.name} icon`}
                                />
                            </div>

                            <div className="stack-item-info">
                                <h3>{technology.name}</h3>
                                <span>{technology.category}</span>
                            </div>

                            <button
                                className="remove-button"
                                aria-label={`Remove ${technology.name}`}
                                onClick={() => onRemove(technology.id)}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
}

export default YourStack;