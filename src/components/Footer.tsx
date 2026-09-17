function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <img
                        src="/assets/logo-text.png"
                        alt="Dev Stack"
                    />

                    <p>
                        Build your perfect development stack with modern
                        technologies and tools.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Product</h3>

                        <a href="#technologies">Technologies</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                    </div>

                    <div className="footer-column">
                        <h3>Resources</h3>

                        <a href="#technologies">Documentation</a>
                        <a href="#technologies">Learning</a>
                        <a href="#technologies">Community</a>
                    </div>

                    <div className="footer-column">
                        <h3>Company</h3>

                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                        <a href="#contact">Support</a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>
                    © {new Date().getFullYear()} Dev Stack. All rights
                    reserved.
                </p>

                <div>
                    <a href="#contact">Privacy</a>
                    <a href="#contact">Terms</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;