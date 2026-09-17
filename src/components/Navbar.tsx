import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <a href="#" className="logo">
                    <img src="/assets/logo-text.png" alt="Dev Stack" />
                </a>

                <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                    <a href="#technologies" onClick={() => setMenuOpen(false)}>
                        Technologies
                    </a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </nav>

                <div className="nav-actions">
                    <button className="sign-in">Sign In</button>
                    <button className="sign-up">Sign Up</button>
                </div>

                <button
                    className="menu-button"
                    aria-label="Toggle navigation menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}

export default Navbar;