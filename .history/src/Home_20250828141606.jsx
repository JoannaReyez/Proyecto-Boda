import "./Home.css";
import MasterPage from "./MasterPage";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay">
          <h3>Boda de</h3>
          <h1>Ana & Juan</h1>
          <p>15 de septiembre, 2025</p>
        </div>
        <img src="/boda.jpg" alt="Boda" className="hero-image" />
      </section>

      {/* Resumen */}
      <section className="summary">
        <h4>Resumen general del evento</h4>
        <div className="summary-grid">
          {/* Días restantes */}
          <div className="card">
            <h2>127</h2>
            <p>Días para nuestra boda</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
            <span>Progreso de la boda</span>
          </div>

          {/* Próximas tareas */}
<div className="card tareas-card">
  <h3>Próximas Tareas</h3>
  <ul>
    <li className="tarea-naranja">
      Prueba de menú <span>En 3 días</span>
    </li>
    <li className="tarea-verde">
      Reunión con fotógrafo <span>En 1 semana</span>
    </li>
  </ul>
  <button className="link-button">Ver todas las tareas →</button>
</div>


{/* APARTADO DE INVITADOS */}
<div className="card invitados">
  <h3>Invitados</h3>
  <div className="contenido">
    {/* Lista a la izquierda */}
    <ul className="lista-invitados">
      <li className="confirmados">85 Confirmados</li>
      <li className="pendientes">35 Pendientes</li>
      <li className="rechazados">11 Rechazados</li>
    </ul>

    {/* Círculo a la derecha */}
    <div className="circle-chart">
      <svg width="120" height="120" viewBox="0 0 36 36" className="donut">
        {/* Aqui se hace la operación para el contenido del circulo */}
        {/* Confirmados */}
        <circle
          className="circle-segment confirmados"
          cx="18" cy="18" r="15.9155"
          strokeDasharray={`${(85/131)*100} ${100-(85/131)*100}`}
          strokeDashoffset="25"
        />
        {/* Pendientes */}
        <circle
          className="circle-segment pendientes"
          cx="18" cy="18" r="15.9155"
          strokeDasharray={`${(35/131)*100} ${100-(35/131)*100}`}
          strokeDashoffset={25 - ((85/131)*100)}
        />
        {/* Rechazados */}
        <circle
          className="circle-segment rechazados"
          cx="18" cy="18" r="15.9155"
          strokeDasharray={`${(11/131)*100} ${100-(11/131)*100}`}
          strokeDashoffset={25 - (((85+35)/131)*100)}
        />
      </svg>
      <div className="circle-text">
        <strong>85</strong>
        <span>de 131</span>
      </div>
    </div>
  </div>
</div>

          {/* Etiquetas */}
          <div className="card">
            <h3>Etiquetas</h3>
           <ul class="tag-list">
           <li class="fotografo">Fotógrafo</li>
  <li class="catering">Catering</li>
  <li class="florista">Florista</li>
</ul>

          </div>
        </div>
      </section>

      {/* Sección extra */}
<section className="extra">
  <div className="extra-content">
    <div className="text-content">
      <h2>Secciones de tu Boda</h2>
      <p>Gestiona y controla cada detalle para tu boda perfecta</p>
    </div>
    <div className="search-box">
      <input type="text" placeholder="Boda de Ana y Juan" />
      <button className="search-btn"></button>
    </div>
  </div>
</section>


      {/* MasterPage */}
      <MasterPage>
        <Outlet />
      </MasterPage>
    </div>
  );
}
