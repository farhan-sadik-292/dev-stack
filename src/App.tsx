import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="placeholder-section">
          <div className="container">
            <h2>Technologies</h2>
            <p>Technology cards will be added in Step 4.</p>
          </div>
        </section>

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