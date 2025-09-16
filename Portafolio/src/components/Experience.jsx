import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Ingeniero Senior',
      company: 'Empresa Tech',
      period: '2023 - Presente',
      desc: 'Desarrollé apps web con React y Node.js, liderando un equipo de 5 devs.',
    },
    {
      title: 'Desarrollador Junior',
      company: 'Startup',
      period: '2021 - 2023',
      desc: 'Construí interfaces frontend y mantuve el backend.',
    },
  ];

  return (
    <section className="section">
      <h2 className="numbered-heading">Dónde He Trabajado</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company} | {exp.period}</p>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;