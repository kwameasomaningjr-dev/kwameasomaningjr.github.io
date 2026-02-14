import './Hero.css';

export default function Hero() {
    const scrollToProjects = (e) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            {/* Animated background */}
            <div className="hero-bg">
                <div className="hero-orb"></div>
            </div>
            <div className="hero-grid"></div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Available for opportunities
                </div>

                <h1 className="hero-name">
                    Richard Kwame{' '}
                    <span className="glow-text">Asomaning Jr</span>
                </h1>

                <p className="hero-title">
                    Data Science Student &amp; Intern at Office Data Ghana
                </p>

                <p className="hero-tagline">
                    I transform raw data into actionable insights that drive smart decisions.
                    Passionate about machine learning, analytics, and building data-driven solutions.
                </p>

                <a href="#projects" className="hero-cta" onClick={scrollToProjects}>
                    View My Projects
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
