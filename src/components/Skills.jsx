import './Skills.css';

const CATEGORIES = [
    {
        name: 'Data Analysis',
        icon: '📊',
        color: 'linear-gradient(135deg, #6c63ff22, #6c63ff11)',
        skills: [
            'Pandas / NumPy',
            'SQL & Database Queries',
            'Exploratory Data Analysis',
            'Statistical Analysis',
        ],
    },
    {
        name: 'Machine Learning',
        icon: '🤖',
        color: 'linear-gradient(135deg, #e040fb22, #e040fb11)',
        skills: [
            'Scikit-learn',
            'TensorFlow / Keras',
            'Feature Engineering',
            'Model Evaluation',
        ],
    },
    {
        name: 'Visualization',
        icon: '🎨',
        color: 'linear-gradient(135deg, #00c9ff22, #00c9ff11)',
        skills: [
            'Power BI',
            'Tableau',
            'Matplotlib / Seaborn',
            'Plotly / Dash',
        ],
    },
    {
        name: 'Programming',
        icon: '💻',
        color: 'linear-gradient(135deg, #43e97b22, #43e97b11)',
        skills: [
            'Python',
            'SQL',
            'JavaScript',
        ],
    },
    {
        name: 'Tools & Platforms',
        icon: '🛠️',
        color: 'linear-gradient(135deg, #f7971e22, #f7971e11)',
        skills: [
            'Jupyter / Colab',
            'Git & GitHub',
            'Excel (Advanced)',
            'VS Code',
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <span className="section-label">Skills</span>
                <h2 className="section-title">
                    My <span className="glow-text">Expertise</span>
                </h2>
                <p className="section-subtitle">
                    A breakdown of my technical skills across data science disciplines.
                </p>

                <div className="skills-grid">
                    {CATEGORIES.map((cat) => (
                        <div className="skill-category" key={cat.name}>
                            <div className="skill-category-header">
                                <div className="skill-category-icon" style={{ background: cat.color }}>
                                    {cat.icon}
                                </div>
                                <h3 className="skill-category-name">{cat.name}</h3>
                            </div>
                            <div className="skill-items">
                                {cat.skills.map((skill) => (
                                    <div className="skill-item" key={skill}>
                                        <span className="skill-item-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
