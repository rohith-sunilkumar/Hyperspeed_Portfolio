import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#fdfbf8] text-[#333333] font-sans overflow-x-clip">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
