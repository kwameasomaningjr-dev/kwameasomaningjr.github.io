import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const CATEGORIES = [
    {
        name: 'Data Analysis',
        icon: '📊',
        color: 'linear-gradient(135deg, #6c63ff22, #6c63ff11)',
        barColor: 'linear-gradient(90deg, #6c63ff, #8b83ff)',
        skills: [
            { name: 'Pandas / NumPy', level: 90 },
            { name: 'SQL & Database Queries', level: 85 },
            { name: 'Exploratory Data Analysis', level: 88 },
            { name: 'Statistical Analysis', level: 82 },
        ],
    },
    {
        name: 'Machine Learning',
        icon: '🤖',
        color: 'linear-gradient(135deg, #e040fb22, #e040fb11)',
        barColor: 'linear-gradient(90deg, #e040fb, #f06292)',
        skills: [
            { name: 'Scikit-learn', level: 85 },
            { name: 'TensorFlow / Keras', level: 75 },
            { name: 'Feature Engineering', level: 80 },
            { name: 'Model Evaluation', level: 83 },
        ],
    },
    {
        name: 'Visualization',
        icon: '🎨',
        color: 'linear-gradient(135deg, #00c9ff22, #00c9ff11)',
        barColor: 'linear-gradient(90deg, #00c9ff, #6c63ff)',
        skills: [
            { name: 'Power BI', level: 88 },
            { name: 'Tableau', level: 82 },
            { name: 'Matplotlib / Seaborn', level: 85 },
            { name: 'Plotly / Dash', level: 78 },
        ],
    },
    {
        name: 'Programming',
        icon: '💻',
        color: 'linear-gradient(135deg, #43e97b22, #43e97b11)',
        barColor: 'linear-gradient(90deg, #43e97b, #38f9d7)',
        skills: [
            { name: 'Python', level: 92 },
            { name: 'SQL', level: 85 },
            { name: 'JavaScript', level: 65 },
        ],
    },
    {
        name: 'Tools & Platforms',
        icon: '🛠️',
        color: 'linear-gradient(135deg, #f7971e22, #f7971e11)',
        barColor: 'linear-gradient(90deg, #f7971e, #ffd200)',
        skills: [
            { name: 'Jupyter / Colab', level: 90 },
            { name: 'Git & GitHub', level: 80 },
            { name: 'Excel (Advanced)', level: 88 },
            { name: 'VS Code', level: 85 },
        ],
    },
];

export default function Skills() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section" ref={ref}>
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
                                    <div className="skill-item" key={skill.name}>
                                        <div className="skill-item-header">
                                            <span className="skill-item-name">{skill.name}</span>
                                            <span className="skill-item-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: visible ? `${skill.level}%` : '0%',
                                                    background: cat.barColor,
                                                }}
                                            />
                                        </div>
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
