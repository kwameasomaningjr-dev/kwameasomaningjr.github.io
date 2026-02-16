import './Timeline.css';

const ENTRIES = [
    {
        date: '2023 — Present',
        title: 'Bsc. Data Science and Analytics',
        subtitle: 'University of Ghana',
        desc: 'Pursuing a degree in Data Science with coursework in statistics, machine learning, data engineering, and applied mathematics. Dean\'s list honoree.',
    },
    {
        date: '2025 — Present',
        title: 'Data Science Intern',
        subtitle: 'Office Data Ghana',
        desc: 'Building interactive dashboards with Power BI, performing data cleaning and statistical analysis on business datasets, automating reporting workflows with Python scripts.',
    },
    {
        date: '2025',
        title: 'Machine Learning Certificate',
        subtitle: 'Online Certification',
        desc: 'Completed an intensive machine learning specialization covering supervised/unsupervised learning, neural networks, and model deployment strategies.',
    },
];

export default function Timeline() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <span className="section-label">Experience</span>
                <h2 className="section-title">
                    My <span className="glow-text">Journey</span>
                </h2>
                <p className="section-subtitle">
                    Education, certifications, and professional experience that shape my growth.
                </p>

                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>
                    {ENTRIES.map((entry, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <span className="timeline-date">{entry.date}</span>
                                <h3 className="timeline-title">{entry.title}</h3>
                                <p className="timeline-subtitle">{entry.subtitle}</p>
                                <p className="timeline-desc">{entry.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
