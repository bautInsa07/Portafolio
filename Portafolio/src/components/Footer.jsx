import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Designed and Built by You © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;