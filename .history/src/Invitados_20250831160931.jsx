{/* Contenido principal */}
<div className="contenido-principal">
  {/* Contenedor de tabla + panel lateral */}
  <div className="main-layout">
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
          <button className="btn-add">+ Añadir invitado</button>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="#e67e22" viewBox="0 0 24 24">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
