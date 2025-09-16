import React from 'react';
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      desc: 'Una app web para gestión de tareas con React.',
      tags: ['React', 'Node.js'],
      links: { demo: '#', github: '#' },
    },
    {
      title: 'Proyecto 2',
      desc: 'Sitio e-commerce con integración de pagos.',
      tags: ['JavaScript', 'MongoDB'],
      links: { demo: '#', github: '#' },
    },
  ];

  return (
    <section className="section">
      <h2 className="numbered-heading">Algunos Proyectos</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <div className="tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.links.demo}><FaExternalLinkAlt /> Demo</a>
              <a href={proj.links.github}><FaCode /> Código</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;