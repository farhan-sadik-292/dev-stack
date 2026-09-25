const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({
  menuOpen,
  setMenuOpen,
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <img
            src="/assets/hamburger.png"
            alt=""
          />
        </button>

        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
          />
        </a>

        <nav
          className={`nav-links ${
            menuOpen ? "nav-links-open" : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="sign-in">
            Sign In
          </a>

          <a href="#contact" className="sign-up">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}