import React, { useState, useEffect } from "react";
import "./Invitados.css";

export default function Invitados() {
  const [filtro, setFiltro] = useState("Todos");
  const [buscar, setBuscar] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 3;

  // Cargar invitados desde localStorage al inicio
  const [invitados, setInvitados] = useState(() => {
  const dataGuardada = localStorage.getItem("invitados");
  const handleEliminar = (id) => {
  const nuevosInvitados = invitados.filter((i) => i.id !== id);
  setInvitados(nuevosInvitados);
};
  return dataGuardada ? JSON.parse(dataGuardada) : [];
});
  // Guardar en localStorage cada vez que cambia la lista
  useEffect(() => {
    localStorage.setItem("invitados", JSON.stringify(invitados));
  }, [invitados]);

  // Estado modal
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
      { ...nuevoInvitado, id: Date.now() }, // usamos Date.now() como id único
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
    
  const totalPaginas = Math.ceil(invitadosFiltrados.length / registrosPorPagina);
  const indiceInicial = (paginaActual - 1) * registrosPorPagina;
  const indiceFinal = indiceInicial + registrosPorPagina;
  const invitadosPagina = invitadosFiltrados.slice(indiceInicial, indiceFinal);

  // Totales dinámicos (panel lateral)
  const totalConfirmados = invitados.filter(
    (i) => i.estado === "Confirmado"
  ).length;
  const totalPendientes = invitados.filter(
    (i) => i.estado === "Pendiente"
  ).length;
  const totalRechazados = invitados.filter(
    (i) => i.estado === "Rechazado"
  ).length;
  const totalInvitados = invitados.length;

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
  {invitadosPagina.map((invitado) => (
    <tr key={invitado.id}>
      <td data-label="Nombre">{invitado.nombre}</td>
      <td data-label="Estado">
        <span className={`estatus ${invitado.estado.toLowerCase()}`}>
          {invitado.estado}
        </span>
      </td>
      <td data-label="Parentesco">{invitado.parentesco}</td>
      <td data-label="WhatsApp">{invitado.whatsapp}</td>
      <td data-label="Correo">{invitado.correo}</td>
      <td data-label="Atención">
        <span className={`badge ${invitado.atencion === "Sí" ? "si" : "no"}`}>
          {invitado.atencion}
        </span>
      </td>
      <td data-label="Restricciones">
  <span className={`badge ${invitado.restricciones === "Sí" ? "si" : "no"}`}>
    {invitado.restricciones}
  </span>
  <button 
    className="btn-eliminar" 
    onClick={() => handleEliminar(invitado.id)}
    title="Eliminar invitado"
  >
    🗑️
  </button>
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
                    setNuevoInvitado({
                      ...nuevoInvitado,
                      nombre: e.target.value,
                    })
                  }
                />
                <select
                  value={nuevoInvitado.estado}
                  onChange={(e) =>
                    setNuevoInvitado({
                      ...nuevoInvitado,
                      estado: e.target.value,
                    })
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
                    setNuevoInvitado({
                      ...nuevoInvitado,
                      parentesco: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="WhatsApp"
                  value={nuevoInvitado.whatsapp}
                  onChange={(e) =>
                    setNuevoInvitado({
                      ...nuevoInvitado,
                      whatsapp: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Correo"
                  value={nuevoInvitado.correo}
                  onChange={(e) =>
                    setNuevoInvitado({
                      ...nuevoInvitado,
                      correo: e.target.value,
                    })
                  }
                />
                <label>
                  Atención humana:
                  <select
                    value={nuevoInvitado.atencion}
                    onChange={(e) =>
                      setNuevoInvitado({
                        ...nuevoInvitado,
                        atencion: e.target.value,
                      })
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
              <span className="numero verde-texto">{totalConfirmados}</span>
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
              <span className="numero naranja-texto">{totalPendientes}</span>
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
              <span className="numero rojo-texto">{totalRechazados}</span>
              <p>Rechazados</p>
            </div>
          </div>

          {/* Invitados confirmados */}
          <div className="total-confirmados">
            <strong>Invitados confirmados</strong>
            <p>
              <span className="confirmados-numero">{totalConfirmados}</span> 
              <span className="total-numero">de {totalInvitados}</span>
            </p>
          </div>

          <button className="link-button">Ver Gráfico de RSVP</button>
        </div>
      </div>
    </div>
  );
}
