import React, { useState, useEffect } from "react";
import "./Invitados.css";

export default function Invitados() {
  const [filtro, setFiltro] = useState("Todos");
  const [buscar, setBuscar] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 3; // 🔹 3 registros por página

  // Cargar invitados desde localStorage
  const [invitados, setInvitados] = useState(() => {
    const dataGuardada = localStorage.getItem("invitados");
    return dataGuardada
      ? JSON.parse(dataGuardada)
      : [
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
        ];
  });

  useEffect(() => {
    localStorage.setItem("invitados", JSON.stringify(invitados));
  }, [invitados]);

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

  const handleGuardar = () => {
    setInvitados([
      ...invitados,
      { ...nuevoInvitado, id: Date.now() },
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

  const invitadosFiltrados = invitados.filter((i) => {
    const coincideFiltro = filtro === "Todos" || i.estado === filtro;
    const coincideBusqueda = i.nombre
      .toLowerCase()
      .includes(buscar.toLowerCase());
    return coincideFiltro && coincideBusqueda;
  });

  // 🔹 Lógica de paginación
  const totalPaginas = Math.ceil(invitadosFiltrados.length / registrosPorPagina);
  const indiceInicial = (paginaActual - 1) * registrosPorPagina;
  const indiceFinal = indiceInicial + registrosPorPagina;
  const invitadosPagina = invitadosFiltrados.slice(indiceInicial, indiceFinal);

  const totalConfirmados = invitados.filter((i) => i.estado === "Confirmado").length;
  const totalPendientes = invitados.filter((i) => i.estado === "Pendiente").length;
  const totalRechazados = invitados.filter((i) => i.estado === "Rechazado").length;
  const totalInvitados = invitados.length;

  return (
    <div className="invitados-wrapper">
      <div className="header-invitados">
        <div>
          <h2 className="titulo">Lista de invitados</h2>
          <p className="subtitulo">
            Las personas especiales que compartirán nuestro día
          </p>
        </div>
      </div>

      <div className="contenido-principal">
        <div className="tabla-container">
          <div className="acciones">
            <button className="btn-add" onClick={() => setModalOpen(true)}>
              <span className="icon">+</span> Añadir invitado
            </button>
            <div className="filtros">
              <label>Filtrar por estado: </label>
              <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
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
              {invitadosPagina.map((invitado) => (
                <tr key={invitado.id}>
                  <td>{invitado.nombre}</td>
                  <td>
                    <span className={`estatus ${invitado.estado.toLowerCase()}`}>
                      {invitado.estado}
                    </span>
                  </td>
                  <td>{invitado.parentesco}</td>
                  <td>{invitado.whatsapp}</td>
                  <td>{invitado.correo}</td>
                  <td>
                    <span className={`badge ${invitado.atencion === "Sí" ? "si" : "no"}`}>
                      {invitado.atencion}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${invitado.restricciones === "Sí" ? "si" : "no"}`}>
                      {invitado.restricciones}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 🔹 Paginación */}
          <div className="paginacion">
            {Array.from({ length: totalPaginas }, (_, index) => (
              <button
                key={index}
                className={paginaActual === index + 1 ? "activo" : ""}
                onClick={() => setPaginaActual(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

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
                      setNuevoInvitado({ ...nuevoInvitado, restricciones: e.target.value })
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
          <div className="progreso-item verde">
            <div className="texto">
              <span className="numero verde-texto">{totalConfirmados}</span>
              <p>Confirmados</p>
            </div>
          </div>
          <div className="progreso-item naranja">
            <div className="texto">
              <span className="numero naranja-texto">{totalPendientes}</span>
              <p>Pendientes</p>
            </div>
          </div>
          <div className="progreso-item rojo">
            <div className="texto">
              <span className="numero rojo-texto">{totalRechazados}</span>
              <p>Rechazados</p>
            </div>
          </div>
          <div className="total-confirmados">
            <strong>Invitados confirmados</strong>
            <p>
              <span className="confirmados-numero">{totalConfirmados}</span>
              <span className="total-numero"> de {totalInvitados}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
