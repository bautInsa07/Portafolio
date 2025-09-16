import React from 'react';

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
    <div>
      <h2>Algunos Proyectos</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <div>
              {proj.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={proj.links.demo}>Demo</a>
              <a href={proj.links.github}>Código</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;