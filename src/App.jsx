import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Timeline />
            <Contact />
        </>
    );
}
