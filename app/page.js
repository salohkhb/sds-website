"use client";

import useAnimations from "./hooks/useAnimations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

export default function Home() {
  useAnimations();

  return (
    <>
      <Navbar />
    

      <div className="main-container">
        <div className="section-container">

          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <CTA />
          <Contact />

        </div>
      </div>
    </>
  );
}