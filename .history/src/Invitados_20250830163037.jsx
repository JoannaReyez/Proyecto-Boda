import React from "react";
import "./Invitados.css";
import useInvitados from "./useInvitados";

export default function Invitados() {
  const {
    filtro,
    setFiltro,
    invitadosFiltrados,
    totalConfirmados,
    totalPendientes,
    totalRechazados,
    total,
  } = useInvitados();

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

      <div className="contenido-principal">
        {/* Tabla */}
        <div className="tabla-container">
          <div className="buscador">
            <input type="text" placeholder="Buscar" />
          </div>

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
              {invitadosFiltrados.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.nombre}</td>
                  <td>
                    <span className={`estatus ${inv.estatus.toLowerCase()}`}>
                      {inv.estatus}
                    </span>
                  </td>
                  <td>{inv.parentesco}</td>
                  <td>{inv.whatsapp}</td>
                  <td>{inv.correo}</td>
                  <td>
                    <span className={`badge ${inv.atencionHumana ? "si" : "no"}`}>
                      {inv.atencionHumana ? "Si" : "No"}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${inv.restricciones ? "si" : "no"}`}>
                      {inv.restricciones ? "Si" : "No"}
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
            <button className="page-btn">Siguiente</button>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="panel-lateral">
          <h3>Progreso General</h3>
          <div className="progreso-item verde">
            <span>{totalConfirmados}</span>
            <p>Confirmados</p>
          </div>
          <div className="progreso-item naranja">
            <span>{totalPendientes}</span>
            <p>Pendientes</p>
          </div>
          <div className="progreso-item rojo">
            <span>{totalRechazados}</span>
            <p>Rechazados</p>
          </div>

          <div className="total-confirmados">
            <p>
              Invitados confirmados <strong>{totalConfirmados}</strong> de{" "}
              <strong>{total}</strong>
            </p>
            <a href="#">Ver Gráfico de RSVP</a>
          </div>
        </div>
      </div>
    </div>
  );
}
