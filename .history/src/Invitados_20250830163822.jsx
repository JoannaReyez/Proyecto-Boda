// Invitados.jsx
import React, { useState } from "react";
import "./Invitados.css"; // Estilos separados

export default function Invitados() {
  const [filtro, setFiltro] = useState("Todos");
  const [invitados] = useState([
    { id: 1, nombre: "Juan Pérez", estado: "Confirmado" },
    { id: 2, nombre: "María Gómez", estado: "Pendiente" },
    { id: 3, nombre: "Carlos Ruiz", estado: "Rechazado" },
    { id: 4, nombre: "Laura Torres", estado: "Confirmado" },
  ]);

  const invitadosFiltrados =
    filtro === "Todos"
      ? invitados
      : invitados.filter((invitado) => invitado.estado === filtro);

  return (
    <div className="card invitados">
      <h3>Invitados</h3>
      <div className="filtros">
        <label>Filtrar por estado:</label>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
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
              <td>{invitado.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
