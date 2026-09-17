import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

import technologiesData from "./data/technologies.json";
import type { Technology } from "./types/technology";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        // Simulates fetching data from a JSON source.
        await new Promise((resolve) => setTimeout(resolve, 700));

        setTechnologies(technologiesData as Technology[]);
      } catch {
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    if (
      stack.some(
        (item) => item.id === technology.id,
      )
    ) {
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (technologyId: string) => {
    const technology = stack.find(
      (item) => item.id === technologyId,
    );

    setStack((currentStack) =>
      currentStack.filter(
        (item) => item.id !== technologyId,
      ),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <section
            className="loading-section"
            id="technologies"
          >
            <div className="container loading-content">
              <div className="loading-spinner" />

              <h2>Loading Technologies...</h2>

              <p>
                Please wait while we prepare the technology
                collection.
              </p>
            </div>
          </section>
        ) : (
          <Technologies
            technologies={technologies}
            stack={stack}
            onAdd={handleAddToStack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        )}

        <section id="projects" className="placeholder-section">
          <div className="container">
            <h2>Projects</h2>
          </div>
        </section>

        <section id="about" className="placeholder-section">
          <div className="container">
            <h2>About</h2>
          </div>
        </section>

        <section id="contact" className="placeholder-section">
          <div className="container">
            <h2>Contact</h2>
          </div>
        </section>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;