// src/Invitados.jsx
import React, { useState } from "react";
import "./Invitados.css"; // Aquí estará el CSS que te voy a pasar

export default function Invitados() {
  const [filtro, setFiltro] = useState("Todos");

  const [invitados, setInvitados] = useState([
    { id: 1, nombre: "Juan Pérez", estado: "Confirmado" },
    { id: 2, nombre: "Ana López", estado: "Pendiente" },
    { id: 3, nombre: "Luis García", estado: "Rechazado" },
    { id: 4, nombre: "María Torres", estado: "Confirmado" }
  ]);

  const invitadosFiltrados =
    filtro === "Todos"
      ? invitados
      : invitados.filter((i) => i.estado === filtro);

  return (
    <div className="card invitados">
      <h3>Invitados</h3>
      <div className="filtros">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Confirmado">Confirmados</option>
          <option value="Pendiente">Pendientes</option>
          <option value="Rechazado">Rechazados</option>
        </select>
      </div>

      <table className="tabla-invitados">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {invitadosFiltrados.map((invitado) => (
            <tr key={invitado.id}>
              <td>{invitado.nombre}</td>
              <td
                className={
                  invitado.estado === "Confirmado"
                    ? "estado-confirmado"
                    : invitado.estado === "Pendiente"
                    ? "estado-pendiente"
                    : "estado-rechazado"
                }
              >
                {invitado.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
