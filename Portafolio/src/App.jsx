import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('About');

  const sections = {
    About: <About />,
    Experience: <Experience />,
    Projects: <Projects />,
    Skills: <Skills />,
  };

  return (
    <div className="layout">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="content">
        <section className="section">{sections[activeSection]}</section>
        <footer className="footer">Diseñado por Ti © 2025</footer>
      </main>
    </div>
  );
}

export default App;