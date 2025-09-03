import React, { useState } from "react";
import "./Calendario.css";

export default function Calendario() {
  const [tab, setTab] = useState("Calendario");

  const tareas = [
    { id: 1, nombre: "Seleccionar lugar de la ceremonia", estado: "completado", fecha: "15 Marzo" },
    { id: 2, nombre: "Contratar catering", estado: "pendiente", fecha: "20 Marzo" },
    { id: 3, nombre: "Comprar vestido", estado: "rechazado", fecha: "25 Marzo" },
    { id: 4, nombre: "Enviar invitaciones", estado: "pendiente", fecha: "28 Marzo" },
  ];

  return (
    <div className="calendario-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={tab === "Calendario" ? "active" : ""}
          onClick={() => setTab("Calendario")}
        >
          Calendario
        </button>
        <button
          className={tab === "Tareas" ? "active" : ""}
          onClick={() => setTab("Tareas")}
        >
          Tareas
        </button>
      </div>

      {/* Contenido */}
      <div className="contenido">
        {tab === "Calendario" ? (
          <div className="calendario">
            <h3>Calendario de actividades</h3>
            <p>Próximamente tu calendario aparecerá aquí 📅</p>
          </div>
        ) : (
          <div className="tareas">
            <h3>Lista de tareas</h3>
            <ul>
              {tareas.map((tarea) => (
                <li key={tarea.id} className={`tarea ${tarea.estado}`}>
                  <span className="nombre">{tarea.nombre}</span>
                  <span className="fecha">{tarea.fecha}</span>
                </li>
              ))}
            </ul>
            <button className="link-button">Ver todas las tareas →</button>
          </div>
        )}
      </div>
    </div>
  );
}
