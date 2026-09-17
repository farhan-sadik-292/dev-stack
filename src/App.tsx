import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import technologiesData from "./data/technologies.json";
import type { Technology } from "./types/technology";

function App() {
  const technologies = technologiesData as Technology[];

  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies
          technologies={technologies}
          stack={stack}
          onAdd={handleAddToStack}
        />

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
    </>
  );
}

export default App;