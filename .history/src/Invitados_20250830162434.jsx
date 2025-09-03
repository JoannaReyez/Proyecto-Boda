import React from "react";
import "./Invitados.css";
import useScriptHome from "./ScriptHome";

export default function Catalogo() {
  const {
    filtro,
    setFiltro,
    modalItem,
    setModalItem,
    itemsFiltrados,
  } = useScriptHome();

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
              {itemsFiltrados.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>
                    <span
                      className={`estatus ${
                        item.estatus?.toLowerCase() || "pendiente"
                      }`}
                    >
                      {item.estatus}
                    </span>
                  </td>
                  <td>{item.parentesco}</td>
                  <td>{item.whatsapp}</td>
                  <td>{item.correo}</td>
                  <td>
                    <span
                      className={`badge ${item.atencionHumana ? "si" : "no"}`}
                    >
                      {item.atencionHumana ? "Si" : "No"}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${item.restricciones ? "si" : "no"}`}
                    >
                      {item.restricciones ? "Si" : "No"}
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
            <span>85</span>
            <p>Confirmados</p>
          </div>
          <div className="progreso-item naranja">
            <span>35</span>
            <p>Pendientes</p>
          </div>
          <div className="progreso-item rojo">
            <span>11</span>
            <p>Rechazados</p>
          </div>

          <div className="total-confirmados">
            <p>
              Invitados confirmados <strong>85</strong> de <strong>130</strong>
            </p>
            <a href="#">Ver Gráfico de RSVP</a>
          </div>
        </div>
      </div>
    </div>
  );
}
