import React from "react";

const frontend = [
  { name: "React", image: "/public/react.svg" },
  { name: "JavaScript", image: "/public/js.png" },
  { name: "CSS", image: "/public/css.svg" },
  { name: "HTML", image: "/public/html.webp" },
  { name: "Tailwind", image: "/public/tailwind.png" }
];

const backend = [
  { name: "Django", image: "/public/django-icon.svg" },
  { name: "Python", image: "/public/3030224.webp" },
  { name: "MySQL", image: "/public/mysql-logo-png_seeklogo-231538.png" },
  { name: "JavaScript", image: "/public/js.png" },
  { name: "PHP", image: "/public/php.svg" },
];

export default function Lenguajes() {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades & Tecnologías</h2>

      <h3>Frontend</h3>
      <div className="slider">
        <div className="slide-track">
          {frontend.concat(frontend).map((tech, i) => (
            <div key={i} className="slide">
              <img src={tech.image} alt={tech.name} title={tech.name} />
            </div>
          ))}
        </div>
      </div>

      <h3>Backend</h3>
      <div className="slider">
        <div className="slide-track">
          {backend.concat(backend).map((tech, i) => (
            <div key={i} className="slide">
              <img src={tech.image} alt={tech.name} title={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}