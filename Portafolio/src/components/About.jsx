import React from 'react';
import perfil from "../assets/react.svg"; // 👈 poné tu foto en /src/assets/

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h1>Sobre mí</h1>
          <h2>Hola, soy <span className="highlight">Bautista Insaurralde</span></h2>
          <p className="subtitle">Ingeniero de Software</p>
          <p>
            Estudio en la <strong>E.E.S.T. N°3 de Tortuguitas</strong>, donde curso el último año de la tecnicatura en Técnico en Informática Personal y Profesional.  
            Actualmente me estoy formando como <strong>programador full-stack</strong>, con experiencia en varios lenguajes de programación.  
          </p>
          <p>
            Mi objetivo es seguir puliendo mis conocimientos y llevarlos a un nivel más alto, aplicándolos en proyectos propios y futuros desafíos profesionales.
          </p>
          <a href="#contact" className="cta-button">Contáctame</a>
        </div>

        {/* Imagen */}
        <div className="about-photo">
          <img src={perfil} alt="Foto de Bautista Insaurralde" />
        </div>
      </div>
    </section>
  );
};

export default About;