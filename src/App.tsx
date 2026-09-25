import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

import technologiesUrl from "./data/technologies.json?url";

function App() {
  const [technologies, setTechnologies] =
    useState<Technology[]>([]);

  const [stack, setStack] =
    useState<Technology[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response =
          await fetch(technologiesUrl);

        if (!response.ok) {
          throw new Error(
            "Failed to load technology data.",
          );
        }

        const data: Technology[] =
          await response.json();

        setTechnologies(data);
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load technologies. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (
    technology: Technology,
  ) => {
    if (
      stack.some(
        (item) => item.id === technology.id,
      )
    ) {
      toast.warn(
        `${technology.name} is already in your stack.`,
      );

      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`,
    );
  };

  const handleRemoveFromStack = (
    id: string,
  ) => {
    const removedTechnology =
      stack.find(
        (technology) => technology.id === id,
      );

    setStack((currentStack) =>
      currentStack.filter(
        (technology) =>
          technology.id !== id,
      ),
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`,
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack.",
    );
  };

  return (
    <div className="app">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />

        {loading && (
          <section className="loading-section">
            <div className="spinner" />
            <p>
              Loading technologies...
            </p>
          </section>
        )}

        {!loading && error && (
          <section className="error-section">
            <p>{error}</p>
          </section>
        )}

        {!loading && !error && (
          <Technologies
            technologies={technologies}
            stack={stack}
            onAdd={handleAddToStack}
            onRemove={
              handleRemoveFromStack
            }
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;