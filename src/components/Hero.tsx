export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and put
            together the stack that fits your next project.
          </p>

          <div className="hero-actions">
            <a
              href="#technologies"
              className="primary-button"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="secondary-button"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/assets/banner-stack.png"
            alt="Development technology stack"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}