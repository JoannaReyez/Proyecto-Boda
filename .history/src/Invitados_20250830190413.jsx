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
        <div className="tabla-container">
          {/* Filtro y buscador */}
          <div className="acciones">
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
          </div>

          {/* Tabla */}
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
            <span>Registros por página</span>
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
    <div className="icono">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="#6ab04c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="texto">
      <span className="numero verde-texto">85</span>
      <p>Confirmados</p>
    </div>
  </div>

<div className="progreso-item naranja">
  <div className="icono">
    <svg
      className="icono-naranja"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#e67e22"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  </div>
  <div className="texto">
    <span className="numero naranja-texto">35</span>
    <p>Pendientes</p>
  </div>
</div>


  <div className="progreso-item rojo">
  <div className="icono">
    <svg
      className="icono-x"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" fill="#f8d7da"/>
      <path d="M15 9L9 15M9 9l6 6" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  </div>
  <div className="texto">
    <span className="numero rojo-texto">11</span>
    <p>Rechazados</p>
  </div>
    </div>
          

<div className="total-confirmados">
  <strong>Invitados confirmados</strong>
  <p>
    <span className="confirmados-numero">85</span> 
    <span className="total-numero">de 130</span>
  </p>
</div>
            <button className="link-button">Ver Gráfico de RSVP</button>
        </div>
      </div>
    </div>
  );
}
