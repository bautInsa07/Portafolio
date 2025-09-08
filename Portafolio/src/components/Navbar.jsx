import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">FullStack Developer.Bautista</h1>
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}