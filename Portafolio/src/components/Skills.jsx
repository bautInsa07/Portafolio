import React from 'react';

const Skills = () => {
  const frontend = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Tailwind', level: 80 },
  ];

  const backend = [
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'Express', level: 75 },
  ];

  const databases = [
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQLite', level: 70 },
  ];

  const tools = [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'Docker', level: 65 },
  ];

  const renderSkills = (group, title) => (
    <div className="skill-group">
      <h3>{title}</h3>
      {group.map((skill, i) => (
        <div key={i} className="skill-item">
          <span>{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section">
      <h2 className="numbered-heading">Lenguajes & Tech</h2>
      <div className="skills-grid">
        {renderSkills(frontend, 'Frontend')}
        {renderSkills(backend, 'Backend')}
        {renderSkills(databases, 'Bases de Datos')}
        {renderSkills(tools, 'Herramientas')}
      </div>
    </section>
  );
};

export default Skills;