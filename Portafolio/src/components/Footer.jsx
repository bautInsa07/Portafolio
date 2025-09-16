import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Bautista Insaurralde · Todos los derechos reservados</p>
        <div className="footer-links">
          <a href="https://github.com/TU-USUARIO" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/TU-USUARIO/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:tuemail@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;