import React, { useState } from "react";
import "./Invitados.css";

export default function Invitados() {
  const [filtro, setFiltro] = useState("Todos");
  const [buscar, setBuscar] = useState("");
  const [invitados, setInvitados] = useState([
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
  ]);

  // Estado para modal y nuevo invitado
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevoInvitado, setNuevoInvitado] = useState({
    nombre: "",
    estado: "Pendiente",
    parentesco: "",
    whatsapp: "",
    correo: "",
    atencion: "No",
    restricciones: "No",
  });

  // Guardar invitado
  const handleGuardar = () => {
    setInvitados([
      ...invitados,
      { ...nuevoInvitado, id: invitados.length + 1 },
    ]);
    setNuevoInvitado({
      nombre: "",
      estado: "Pendiente",
      parentesco: "",
      whatsapp: "",
      correo: "",
      atencion: "No",
      restricciones: "No",
    });
    setModalOpen(false);
  };

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
      </div>

      {/* Contenido principal */}
      <div className="contenido-principal">
        {/* Contenedor tabla */}
        <div className="tabla-container">
          {/* Filtro y buscador */}
          <div className="acciones">
            <button className="btn-add" onClick={() => setModalOpen(true)}>
              <span className="icon">+</span> Añadir invitado
            </button>
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

          {/* Modal */}
          {modalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Añadir Invitado</h3>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={nuevoInvitado.nombre}
                  onChange={(e) =>
                    setNuevoInvitado({ ...nuevoInvitado, nombre: e.target.value })
                  }
                />
                <select
                  value={nuevoInvitado.estado}
                  onChange={(e) =>
                    setNuevoInvitado({ ...nuevoInvitado, estado: e.target.value })
                  }
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Confirmado">Confirmado</option>
                  <option value="Rechazado">Rechazado</option>
                </select>
                <input
                  type="text"
                  placeholder="Parentesco"
                  value={nuevoInvitado.parentesco}
                  onChange={(e) =>
                    setNuevoInvitado({ ...nuevoInvitado, parentesco: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="WhatsApp"
                  value={nuevoInvitado.whatsapp}
                  onChange={(e) =>
                    setNuevoInvitado({ ...nuevoInvitado, whatsapp: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Correo"
                  value={nuevoInvitado.correo}
                  onChange={(e) =>
                    setNuevoInvitado({ ...nuevoInvitado, correo: e.target.value })
                  }
                />
                <label>
                  Atención humana:
                  <select
                    value={nuevoInvitado.atencion}
                    onChange={(e) =>
                      setNuevoInvitado({ ...nuevoInvitado, atencion: e.target.value })
                    }
                  >
                    <option value="No">No</option>
                    <option value="Sí">Sí</option>
                  </select>
                </label>
                <label>
                  Restricciones alimenticias:
                  <select
                    value={nuevoInvitado.restricciones}
                    onChange={(e) =>
                      setNuevoInvitado({
                        ...nuevoInvitado,
                        restricciones: e.target.value,
                      })
                    }
                  >
                    <option value="No">No</option>
                    <option value="Sí">Sí</option>
                  </select>
                </label>

                <div className="modal-actions">
                  <button onClick={handleGuardar}>Guardar</button>
                  <button onClick={() => setModalOpen(false)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Panel lateral */}
        <div className="panel-lateral">
          <h3>Progreso General</h3>

          {/* Confirmados */}
          <div className="progreso-item verde">
            <div className="icono">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="texto">
              <span className="numero verde-texto">85</span>
              <p>Confirmados</p>
            </div>
          </div>

          {/* Pendientes */}
          <div className="progreso-item naranja">
            <div className="icono">
              <svg className="icono-naranja" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e67e22">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="texto">
              <span className="numero naranja-texto">35</span>
              <p>Pendientes</p>
            </div>
          </div>

          {/* Rechazados */}
          <div className="progreso-item rojo">
            <div className="icono">
              <svg className="icono-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#f8d7da"/>
                <path d="M15 9L9 15M9 9l6 6" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="texto">
              <span className="numero rojo-texto">11</span>
              <p>Rechazados</p>
            </div>
          </div>

          {/* Invitados confirmados */}
          <div className="total-confirmados">
            <strong>Invitados confirmados</strong>
            <p>
              <span className="confirmados-numero">85</span> 
              <span className="total-numero">de 130</span>
            </p>
          </div>

          {/* Botón enlace */}
          <button className="link-button">Ver Gráfico de RSVP</button>
        </div>
      </div>
    </div>
  );
}
