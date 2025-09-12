import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'About', label: 'Sobre Mí' },
    { id: 'Experience', label: 'Experiencia' },
    { id: 'Projects', label: 'Proyectos' },
    { id: 'Skills', label: 'Lenguajes & Tech' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">TuNombre</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;