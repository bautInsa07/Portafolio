import React from 'react';

const Skills = () => {
  const frontend = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
  ];
  const backend = [
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
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
    <div className="skills-grid">
      {renderSkills(frontend, 'Frontend')}
      {renderSkills(backend, 'Backend')}
    </div>
  );
};

export default Skills;