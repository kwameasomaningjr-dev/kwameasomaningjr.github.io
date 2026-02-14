import './Projects.css';

const PROJECTS = [
    {
        title: 'Customer Churn Predictor',
        desc: 'Built a machine learning model to predict customer churn using logistic regression and random forests. Achieved 92% accuracy with feature engineering and hyperparameter tuning.',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '🔮',
        link: 'https://github.com/kwameasomaningjr-dev/customer_churn_predictor',
    },
    {
        title: 'Sales Dashboard — Office Data Ghana',
        desc: 'Designed an interactive Power BI dashboard tracking KPIs, revenue trends, and regional performance for data-driven decision making at Office Data Ghana.',
        tags: ['Power BI', 'DAX', 'SQL', 'Excel'],
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        icon: '📊',
        link: '#',
    },
    {
        title: 'Sentiment Analysis — Twitter/X',
        desc: 'Developed an NLP pipeline analyzing public sentiment on social issues using BERT-based models and beautiful word cloud visualizations.',
        tags: ['Python', 'NLP', 'TensorFlow', 'NLTK'],
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        icon: '💬',
        link: '#',
    },
    {
        title: 'Time Series Forecasting',
        desc: 'Implemented ARIMA and Prophet models to forecast monthly sales data with confidence intervals and trend decomposition.',
        tags: ['Python', 'Prophet', 'Statsmodels', 'Matplotlib'],
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        icon: '📈',
        link: '#',
    },
    {
        title: 'COVID-19 Data Explorer',
        desc: 'Built an interactive data exploration tool visualizing pandemic trends across countries with dynamic charts and filtering capabilities.',
        tags: ['Python', 'Plotly', 'Dash', 'Pandas'],
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        icon: '🌍',
        link: '#',
    },
    {
        title: 'Student Performance Analysis',
        desc: 'Analyzed factors affecting student academic performance using exploratory data analysis, correlation studies, and regression modeling.',
        tags: ['R', 'ggplot2', 'dplyr', 'Tableau'],
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        icon: '🎓',
        link: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <span className="section-label">Projects</span>
                <h2 className="section-title">
                    Featured <span className="glow-text">Work</span>
                </h2>
                <p className="section-subtitle">
                    A collection of data science projects showcasing analytics, machine learning, and visualization.
                </p>

                <div className="projects-grid">
                    {PROJECTS.map((project, i) => (
                        <div className="project-card" key={i}>
                            <div className="project-thumbnail">
                                <div
                                    className="project-thumbnail-bg"
                                    style={{ background: project.gradient }}
                                >
                                    {project.icon}
                                </div>
                                <div className="project-overlay">
                                    <a href={project.link} className="project-overlay-btn" target="_blank" rel="noopener noreferrer">
                                        View Project
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
