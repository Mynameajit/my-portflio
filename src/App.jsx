import React from "react";

import BackgroundCircles from "./components/Common/BackgroundCircles";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Projects from "./features/projects/Project";
import Experience from "./features/experience/Experience";
import Contact from "./features/contact/Contact";
import Navbar from "./components/Common/Navbar";
import Skills from "./features/skills/Skills ";
import Footer from "./components/Common/Footer";



const App = () => {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-black transition-colors">
      
      {/* Background Effects (GLOBAL) */}
      <div className="fixed top-12 right-0 w-full h-screen -z-10">
        <BackgroundCircles />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
