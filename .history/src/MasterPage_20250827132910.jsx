import React from 'react';
import './MasterPage.css'; // Aquí pondrás el CSS del diseño que te dio tu jefe

export default function MasterPage({ children }) {
  return (
    <div className="master-page">
      {/* HEADER */}
      <header className="header">
        {/* Aquí va el header del diseño */}
        <h1>Jijiji</h1>
      </header>

      {/* NAVBAR o MENÚ */}
      <nav className="navbar">
        {/* Menú del diseño */}
        <a href="/">Inicio</a>
        <a href="/servicios">Ejemplo</a>
        <a href="/contacto">Apartado uno</a>
      </nav>

      {/* CONTENIDO DINÁMICO */}
      <main className="main-content">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        {/* Footer del diseño */}
        <p>© 2025 Mi Empresa</p>
      </footer>
    </div>
  );
}
