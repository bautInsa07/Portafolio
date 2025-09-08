const projects = [
  {
    title: "Gestor de Tareas",
    description: "App para organizar pendientes con React.",
    link: "#"
  },
  {
    title: "Portafolio",
    description: "Mi sitio web personal (este que ves ahora).",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank">Ver</a>
          </div>
        ))}
      </div>
    </section>
  );
}