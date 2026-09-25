export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a
            href="#home"
            className="footer-logo"
          >
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
            />
          </a>

          <p>
            Curated tools, technologies, and resources
            for developers building modern software.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="footer-column"
          id="projects"
        >
          <h3>PRODUCT</h3>

          <a href="#home">Home</a>
          <a href="#technologies">
            Technologies
          </a>
          <a href="#projects">Projects</a>
        </div>

        <div
          className="footer-column"
          id="about"
        >
          <h3>COMPANY</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">Careers</a>
        </div>

        <div
          className="footer-column"
          id="contact"
        >
          <h3>LEGAL</h3>

          <a href="#contact">
            Privacy Policy
          </a>

          <a href="#contact">
            Terms of Service
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#contact">Privacy</a>
          <a href="#contact">Terms</a>
        </div>
      </div>
    </footer>
  );
}