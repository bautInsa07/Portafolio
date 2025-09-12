import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../App.css'; // Asegúrate de que App.css o index.css tenga los estilos del layout

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;