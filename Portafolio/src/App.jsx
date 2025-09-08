import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Lenguajes from "./components/lenguajes";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Lenguajes/>
        <Projects />
        <Contact />
      </main>
    </>
  );
}