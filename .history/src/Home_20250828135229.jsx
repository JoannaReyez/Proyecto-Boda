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



{/* Invitados */}
<div className="card invitados">
  <h3>Invitados</h3>
  <div className="contenido">
    {/* Círculo que cambia según estado */}
    <div className="circle confirmados">
      <strong>85</strong>
      <span>de 131</span>
    </div>

    {/* Lista a la derecha */}
    <ul className="lista-invitados">
      <li className="confirmados">85 Confirmados</li>
      <li className="pendientes">35 Pendientes</li>
      <li className="rechazados">11 Rechazados</li>
    </ul>
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
