import "./Home.css";
import MasterPage from "./MasterPage";
import { CircleChart } from "./ScriptHome";
import { Outlet } from "react-router-dom";


export default function Home() {
  return (
    <div className="home-container">
      {/* APARTADO DE LA IMAGEN*/}
      <section className="hero">
        <div className="hero-overlay">
          <h3>Boda de</h3>
          <h1>Ana & Juan</h1>
          <p>15 de septiembre, 2025</p>
        </div>
        <img src="/boda.jpg" alt="Boda" className="hero-image" />
      </section>

      {/* PRIMER APARTADO */}
      <section className="summary">
        <h4>Resumen general del evento</h4>
        <div className="summary-grid">
          <div className="card">
            <h2>127</h2>
            <p>Días para nuestra boda</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
            <span>Progreso de la boda</span>
          </div>

          {/* APARTADO DE PROXIMAS TAREAS */}
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
        <ul className="lista-invitados">
          <li className="confirmados">85 Confirmados</li>
          <li className="pendientes">35 Pendientes</li>
          <li className="rechazados">11 Rechazados</li>
        </ul>

        <CircleChart confirmados={85} pendientes={35} rechazados={11} />
      </div>
    </div>

          {/* Etiquetas */}
          <div className="card">
  <h3>Etiquetas</h3>
  <ul className="tag-list">
    <li className="fotografo">Fotógrafo</li>
    <li className="catering">Catering</li>
    <li className="florista">Florista</li>
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
      <MasterPage>
        <Outlet />
      </MasterPage>
    </div>
  );
}
