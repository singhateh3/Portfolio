import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Centered layout wrapper */}
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <main className="space-y-16 sm:space-y-20 md:space-y-24">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
