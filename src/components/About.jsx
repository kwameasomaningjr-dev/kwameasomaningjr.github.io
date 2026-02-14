import './About.css';

const TECH_STACK = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Scikit-learn', icon: '⚙️' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Power BI', icon: '📈' },
    { name: 'Tableau', icon: '📉' },
    { name: 'Excel', icon: '📋' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Matplotlib', icon: '🎨' },
    { name: 'Git', icon: '🔀' },
];

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <span className="section-label">About Me</span>
                <h2 className="section-title">
                    Turning Data into <span className="glow-text">Decisions</span>
                </h2>
                <p className="section-subtitle">
                    A curious mind driven by the desire to uncover patterns hidden in data.
                </p>

                <div className="about-grid">
                    <div className="about-photo-wrapper">
                        <div className="about-photo">
                            <div className="about-photo-placeholder">👨‍💻</div>
                        </div>
                        <div className="about-photo-accent"></div>
                    </div>

                    <div className="about-text">
                        <h3>Hello, I'm <span className="glow-text">Richard</span></h3>
                        <div className="about-bio">
                            <p>
                                I'm a Data Science student with a deep passion for uncovering insights from complex datasets.
                                Currently interning at <strong>Office Data Ghana</strong>, where I apply statistical analysis,
                                machine learning, and data visualization to solve real-world business problems.
                            </p>
                            <p>
                                My journey in data science started with a fascination for how numbers tell stories.
                                From building predictive models to crafting interactive dashboards, I love every
                                step of the data pipeline — from messy raw data to polished, actionable intelligence.
                            </p>
                            <p>
                                When I'm not coding or crunching numbers, you'll find me exploring new datasets,
                                contributing to open-source projects, or learning about the latest advances in AI and
                                machine learning.
                            </p>
                        </div>

                        <p className="tech-stack-title">Tech Stack</p>
                        <div className="tech-stack">
                            {TECH_STACK.map(({ name, icon }) => (
                                <span key={name} className="tech-tag">
                                    <span className="tech-tag-icon">{icon}</span>
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
