import React, { useState } from "react";
import "./Calendario.css";

export default function Calendario() {
  const [tab, setTab] = useState("Calendario");

  const tareas = [
    { id: 1, nombre: "Seleccionar lugar de la ceremonia", estado: "completado", fecha: "15 Marzo" },
    { id: 2, nombre: "Contratar fotógrafo", estado: "completado", fecha: "22 Marzo" },
    { id: 3, nombre: "Prueba de menú", estado: "en-progreso", fecha: "5 Mayo" },
    { id: 4, nombre: "Enviar invitaciones", estado: "pendiente", fecha: "20 Mayo" },
    { id: 5, nombre: "Prueba de vestido final", estado: "pendiente", fecha: "15 Julio" },
    { id: 6, nombre: "¡Nuestra Boda!", estado: "pendiente", fecha: "" },
  ];

  const completadas = tareas.filter((t) => t.estado === "completado").length;
  const total = tareas.length;
  const progreso = Math.round((completadas / total) * 100);

  return (
    <div className="calendario-container">
      {/* Switch Tabs */}
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
        <button className="guardar-btn">Guardar cambios</button>
      </div>

      {/* Header */}
      <div className="calendario-header">
        <h2>Nuestro Calendario</h2>
        <p>El camino hacia nuestro día perfecto</p>
      </div>

      <div className="contenido">
        {/* Timeline */}
        <div className="timeline-horizontal">
          {tareas.map((tarea, index) => (
            <div key={tarea.id} className={`timeline-step ${tarea.estado}`}>
              <div className="circle"></div>
       <div className="info">
  <strong>{tarea.nombre}</strong>
  <p>
    {tarea.estado === "completado"
      ? `Completado - ${tarea.fecha}`
      : tarea.estado === "en-progreso"
      ? `En progreso - ${tarea.fecha}`
      : tarea.fecha
      ? `Programado - ${tarea.fecha}`
      : ""}
  </p>
</div>

              {index < tareas.length - 1 && <div className="line" />}
            </div>
          ))}
        </div>

        {/* Progreso General */}
        <div className="progreso">
          <h3>Progreso General</h3>
          <div className="circle-progress">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${progreso}, 100`}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {progreso}%
              </text>
            </svg>
          </div>
          <ul className="detalles">
            <li className="completadas">✔ {completadas} tareas completadas</li>
            <li className="pendientes">◻ {total - completadas} tareas pendientes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
