import { Fragment } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Fragment>
      {/* Main Content */}
      <div className="min-h-screen relative bg-white text-gray-900 overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
