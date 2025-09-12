import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar fade-in">
      <div className="logo">TuNombre</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;