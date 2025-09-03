// Invitados.jsx
import React, { useState } from "react";
import "./Invitados.css";

export default function Invitados() {
  const [filtro, setFiltro] = useState("Todos");
  const [buscar, setBuscar] = useState("");
  const [invitados] = useState([
    {
      id: 1,
      nombre: "Jesús Ramos Cruz",
      estado: "Confirmado",
      parentesco: "Familia Cruz",
      whatsapp: "921102435",
      correo: "dg.jaanso1@gmail.com",
      atencion: "No",
      restricciones: "No",
    },
    {
      id: 2,
      nombre: "María del Refugio Cruz Villalobos",
      estado: "Confirmado",
      parentesco: "Amigo",
      whatsapp: "8974528932",
      correo: "duneferok@gmail.com",
      atencion: "No",
      restricciones: "No",
    },
    {
      id: 3,
      nombre: "Antonio Cerros Cruz",
      estado: "Pendiente",
      parentesco: "Trabajo",
      whatsapp: "8854561234",
      correo: "panmoso@gmail.com",
      atencion: "Sí",
      restricciones: "No",
    },
    {
      id: 4,
      nombre: "Juana Villalobos Flores",
      estado: "Confirmado",
      parentesco: "Familia Lara",
      whatsapp: "8854561234",
      correo: "uver8986@gmail.com",
      atencion: "No",
      restricciones: "Sí",
    },
    {
      id: 5,
      nombre: "Cesar Octavio Pérez Cruz",
      estado: "Rechazado",
      parentesco: "Familia Lara",
      whatsapp: "8974528932",
      correo: "dg.jaanso1@gmail.com",
      atencion: "Sí",
      restricciones: "No",
    },
  ]);

  // Filtrado
  const invitadosFiltrados = invitados.filter((i) => {
    const coincideFiltro = filtro === "Todos" || i.estado === filtro;
    const coincideBusqueda = i.nombre
      .toLowerCase()
      .includes(buscar.toLowerCase());
    return coincideFiltro && coincideBusqueda;
  });

  return (
    <div className="invitados-wrapper">
      {/* Encabezado */}
      <div className="header-invitados">
        <div>
          <h2 className="titulo">Lista de invitados</h2>
          <p className="subtitulo">
            Las personas especiales que compartirán nuestro día
          </p>
        </div>
        <button className="btn-add">+ Añadir invitado</button>
      </div>

      {/* Contenido principal */}
      <div className="contenido-principal">
        {/* Tabla */}
        <div className="tabla-container">
          {/* Filtro y buscador */}
          <div className="filtros">
            <label>Filtrar por estado: </label>
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
          <div className="buscador">
            <input
              type="text"
              placeholder="Buscar"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
          </div>

          {/* Tabla de invitados */}
          <table className="tabla-invitados">
            <thead>
              <tr>
                <th>Nombre completo</th>
                <th>Estatus</th>
                <th>Parentesco</th>
                <th>Número de WhatsApp</th>
                <th>Correo electrónico</th>
                <th>Atención humana</th>
                <th>Restricciones alimenticias</th>
              </tr>
            </thead>
            <tbody>
              {invitadosFiltrados.map((invitado) => (
                <tr key={invitado.id}>
                  <td>{invitado.nombre}</td>
                  <td>
                    <span
                      className={`estatus ${invitado.estado.toLowerCase()}`}
                    >
                      {invitado.estado}
                    </span>
                  </td>
                  <td>{invitado.parentesco}</td>
                  <td>{invitado.whatsapp}</td>
                  <td>{invitado.correo}</td>
                  <td>
                    <span
                      className={`badge ${
                        invitado.atencion === "Sí" ? "si" : "no"
                      }`}
                    >
                      {invitado.atencion}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        invitado.restricciones === "Sí" ? "si" : "no"
                      }`}
                    >
                      {invitado.restricciones}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div className="paginacion">
            <button className="page-btn">Anterior</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Siguiente</button>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="panel-lateral">
          <h3>Progreso General</h3>
          <div className="progreso-item verde">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#88a04b" viewBox="0 0 24 24">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zM10 17.414l-4.707-4.707 1.414-1.414L10 14.586l7.293-7.293 1.414 1.414L10 17.414z"/>
  </svg>
  <span>85</span> Confirmados
</div>

<div className="progreso-item naranja">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#e0a742" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
  </svg>
  <span>35</span> Pendientes
</div>

<div className="progreso-item rojo">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#d94d64" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM16.95 7.05l-1.414-1.414L12 9.172 8.464 5.636 7.05 7.05 10.586 10.586 7.05 14.122l1.414 1.414L12 12.828l3.536 3.536 1.414-1.414L13.414 10.586 16.95 7.05z"/>
  </svg>
  <span>11</span> Rechazados
</div>

          <div className="total-confirmados">
            <strong>Invitados confirmados</strong>
            <p>
              85 de 130 <br />
              <button className="link-button">Ver Gráfico de RSVP</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
