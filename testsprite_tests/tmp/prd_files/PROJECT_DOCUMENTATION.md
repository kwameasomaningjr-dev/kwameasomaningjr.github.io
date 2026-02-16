# Richard Kwame Asomaning Jr. — Data Science Portfolio

> **Live URL:** [kwameasomaningjr.github.io](https://kwameasomaningjr.github.io)

---

## Purpose

This project is a **personal portfolio website** for Richard Kwame Asomaning Jr., a Data Science student and intern at Office Data Ghana. It serves as a professional digital presence to:

- **Showcase data science projects** — machine learning models, analytics dashboards, and NLP pipelines.
- **Highlight technical skills** — organized by discipline (analysis, ML, visualization, programming, and tooling).
- **Present professional experience and education** — a visual timeline of academic and career milestones.
- **Enable direct contact** — via a built-in contact form and social media links (GitHub, LinkedIn, X/Twitter, Email).

The site is designed to attract recruiters, collaborators, and potential employers by demonstrating both technical expertise and an eye for polished, modern web design.

---

## Technology Stack

| Layer         | Technology                                         |
|---------------|-----------------------------------------------------|
| Framework     | **React 19** (functional components, hooks)         |
| Build Tool    | **Vite 7** (fast dev server, optimized production)  |
| Language      | **JavaScript (JSX)**                                |
| Styling       | **Vanilla CSS** with CSS custom properties          |
| Typography    | **Inter** (Google Fonts)                            |
| Deployment    | **GitHub Pages** via `gh-pages` package             |
| Version Control | **Git / GitHub**                                  |

---

## Architecture Overview

```
kwameasomaningjr.github.io/
├── index.html             ← HTML entry point with SEO meta tags
├── package.json           ← Dependencies, scripts, homepage config
├── vite.config.js         ← Vite configuration with React plugin
├── public/                ← Static assets (favicon, etc.)
└── src/
    ├── main.jsx           ← React root mount
    ├── App.jsx            ← Top-level component composing all sections
    ├── index.css          ← Global design system (variables, resets, animations)
    └── components/
        ├── Navbar.jsx / Navbar.css
        ├── Hero.jsx   / Hero.css
        ├── About.jsx  / About.css
        ├── Projects.jsx / Projects.css
        ├── Skills.jsx / Skills.css
        ├── Timeline.jsx / Timeline.css
        └── Contact.jsx / Contact.css
```

The app follows a **single-page architecture** — all sections render on one page and are navigated via smooth-scrolling anchor links.

---

## Features

### 1. Navigation Bar (`Navbar`)
- **Sticky header** that adds a subtle backdrop/shadow effect on scroll.
- **Active section highlighting** — uses `IntersectionObserver` to detect which section the user is currently viewing and highlights the corresponding nav link automatically.
- **Smooth scrolling** — clicking any nav link scrolls smoothly to the target section.
- **Mobile hamburger menu** — a togglable three-line menu button that opens/closes the navigation on smaller screens.
- Links: Home, About, Projects, Skills, Experience, Contact.

### 2. Hero Section (`Hero`)
- Full-screen landing area with the owner's name, title, and tagline.
- **Animated gradient orb** background for a dynamic, premium feel.
- **Grid overlay** for subtle depth.
- **Availability badge** — a pulsing green dot with "Available for opportunities."
- **Glowing gradient text** on the last name for emphasis.
- **Call-to-action button** ("View My Projects") with a smooth scroll to the Projects section.
- **Scroll indicator** at the bottom with an animated line.

### 3. About Section (`About`)
- Personal bio describing background, passion for data, and interests.
- **Photo placeholder area** with an accent glow effect.
- **Tech Stack display** — a horizontally scrolling row of badges, each with an emoji icon:
  - Python, SQL, Pandas, Scikit-learn, TensorFlow, Power BI, Tableau, Excel, NumPy, Matplotlib, Git.

### 4. Projects Section (`Projects`)
- **Card-based grid layout** showcasing three featured data science projects:

| Project | Description | Tags |
|---------|-------------|------|
| **Customer Churn Predictor** | ML model with logistic regression & random forests (92% accuracy) | Python, Scikit-learn, Pandas, Seaborn |
| **Sales Dashboard — Office Data Ghana** | Interactive Power BI dashboard tracking KPIs and revenue | Power BI, DAX, SQL, Excel |
| **Sentiment Analysis — Twitter/X** | NLP pipeline with BERT-based models and word cloud visualizations | Python, NLP, TensorFlow, NLTK |

- Each card features:
  - Gradient-colored thumbnail with an emoji icon.
  - Hover overlay with a "View Project" link opening in a new tab.
  - Technology tags displayed beneath the description.

### 5. Skills Section (`Skills`)
- Skills organized into **five category cards**, each with an icon, name, and a list of specific skills:

| Category | Skills |
|----------|--------|
| 📊 Data Analysis | Pandas/NumPy, SQL & Database Queries, EDA, Statistical Analysis |
| 🤖 Machine Learning | Scikit-learn, TensorFlow/Keras, Feature Engineering, Model Evaluation |
| 🎨 Visualization | Power BI, Tableau, Matplotlib/Seaborn, Plotly/Dash |
| 💻 Programming | Python, SQL, JavaScript |
| 🛠️ Tools & Platforms | Jupyter/Colab, Git & GitHub, Excel (Advanced), VS Code |

### 6. Experience / Timeline (`Timeline`)
- A **vertical timeline** with a connecting line and dot markers showing:
  1. **BSc. Data Science and Analytics** — University of Ghana (2025–Present). Dean's list honoree.
  2. **Data Science Intern** — Office Data Ghana (2026–Present). Building dashboards, performing analysis, automating workflows.
  3. **Machine Learning Certificate** — Online Certification (2026). Supervised/unsupervised learning, neural networks, model deployment.

### 7. Contact Section (`Contact`)
- **Split layout** with:
  - **Info panel** — introductory text and social media icon links (GitHub, LinkedIn, X/Twitter, Email).
  - **Contact form** — fields for Name, Email, and Message with client-side validation.
  - **Submit feedback** — button text changes to "✓ Message Sent!" for 3 seconds after submission.
- **Footer** at the bottom with copyright notice.

---

## Design System

The site uses a **dark theme** with a carefully curated design system defined in CSS custom properties:

- **Color Palette:**
  - Backgrounds: `#0a0a0f` (primary), `#12121a` (secondary), translucent white card surfaces.
  - Accent: `#6c63ff` (indigo-purple) with light/dark variants and glow effects.
  - Gradients: Purple-to-pink, cyan-to-indigo, orange-to-gold.
  - Text: Light grey (`#e8e8ed`) primary, muted tones for secondary content.

- **Typography:** Inter font family with weights 300–900 and fluid sizing (`clamp()` for hero text).

- **Animations:** `fadeInUp`, `fadeIn`, `slideInLeft`, `slideInRight`, `pulse`, `float` — used for entrances and micro-interactions.

- **Responsive Design:** Media queries adjust spacing, font sizes, and layouts at 768px breakpoints. Navigation collapses to a hamburger menu on mobile.

---

## How It Works

### Development
```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (hot-reload at localhost:5173)
```

### Production Build & Deployment
```bash
npm run build      # Generates optimized static files in /dist
npm run deploy     # Builds + deploys to GitHub Pages via gh-pages
```

### User Flow
1. Visitor lands on the **Hero** section — immediately sees the name, title, tagline, and availability status.
2. Scrolls down (or uses the navbar) to learn **About** the person and their tech stack.
3. Explores **Featured Projects** — can click through to live demos/repos on GitHub.
4. Reviews **Skills** broken down by category for a clear competency overview.
5. Views the **Experience Timeline** for education and work history.
6. Reaches the **Contact** section to send a message or connect via social platforms.
7. The navbar's active link updates automatically as the user scrolls, so they always know where they are.

---

## SEO & Accessibility

- **Meta tags:** Description, keywords, and author set in `index.html` for search engine optimization.
- **Semantic HTML:** Proper use of `<section>`, `<nav>`, `<footer>`, `<h1>`–`<h3>` hierarchy.
- **Accessible controls:** `aria-label` on toggle buttons and social links.
- **Keyboard navigable:** Standard anchor and button elements.
- **Custom scrollbar** styling for a cohesive visual experience.

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `index.html` | Entry HTML with SEO meta, Google Fonts, and root div |
| `src/main.jsx` | React DOM root render |
| `src/App.jsx` | Composes all section components in order |
| `src/index.css` | Global CSS: reset, variables, utilities, animations, responsive rules |
| `src/components/Navbar.jsx` | Sticky nav with scroll detection, active section tracking, mobile menu |
| `src/components/Hero.jsx` | Full-screen hero with animated background and CTA |
| `src/components/About.jsx` | Bio, photo area, and tech stack badges |
| `src/components/Projects.jsx` | Project cards with gradient thumbnails and tag lists |
| `src/components/Skills.jsx` | Five-category skill breakdown grid |
| `src/components/Timeline.jsx` | Vertical timeline with education and experience entries |
| `src/components/Contact.jsx` | Contact form, social links, and footer |
| `vite.config.js` | Vite build configuration with React plugin |
| `package.json` | Project metadata, scripts, and dependency list |
