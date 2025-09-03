import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
  <div className="hero-overlay">
    <h3>Boda de</h3>
    <h1>Ana & Juan</h1>
    <p>15 de septiembre, 2025</p>
  </div>
  <img src="/boda.png" alt="Boda" className="hero-image" />
</section>

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
          <div className="card">
            <h3>Próximas Tareas</h3>
            <ul>
              <li>Prueba de menú <span>En 3 días</span></li>
              <li>Reunión con fotógrafo <span>En 1 semana</span></li>
            </ul>
            <a href="#">Ver todas las tareas →</a>
          </div>

          {/* Invitados */}
          <div className="card">
            <h3>Invitados</h3>
            <ul>
              <li>85 Confirmados</li>
              <li>35 Pendientes</li>
              <li>11 Rechazados</li>
            </ul>
            <div className="circle">
              <strong>85</strong>
              <span>de 131</span>
            </div>
          </div>

          {/* Etiquetas */}
          <div className="card">
            <h3>Etiquetas</h3>
            <ul>
              <li>📸 Fotógrafo</li>
              <li>🍽️ Catering</li>
              <li>🌸 Florista</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
