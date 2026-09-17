function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-label">BUILD YOUR DREAM STACK</p>

                    <h1>
                        Build Your
                        <br />
                        <span>Perfect Dev Stack</span>
                    </h1>

                    <p className="hero-description">
                        Explore modern technologies and build a powerful development stack
                        that matches your goals, skills, and projects.
                    </p>

                    <div className="hero-actions">
                        <a href="#technologies" className="primary-button">
                            Explore Technologies
                        </a>

                        <a href="#about" className="secondary-button">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img
                        src="/assets/banner-stack.png"
                        alt="Development technology stack"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;