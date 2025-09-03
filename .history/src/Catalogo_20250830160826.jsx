import React from "react";
import "./Catalogo.css";
import useScriptHome from "./ScriptHome";

export default function Catalogo() {
  const {
    filtro,
    setFiltro,
    modalItem,
    setModalItem,
    toggleFavorito,
    itemsFiltrados,
  } = useScriptHome();

  return (
    <div className="catalogo-container">
      <div className="catalogo-filtros">
        <button
          className={filtro === "Todos" ? "activo" : ""}
          onClick={() => setFiltro("Todos")}
        >
          Todos
        </button>
        <button
          className={filtro === "Favoritos" ? "activo" : ""}
          onClick={() => setFiltro("Favoritos")}
        >
          Favoritos
        </button>
        <button
          className={filtro === "Seleccionados" ? "activo" : ""}
          onClick={() => setFiltro("Seleccionados")}
        >
          Seleccionados
        </button>
      </div>

      {/* Grid de tarjetas */}
      <div className="catalogo-grid">
        {itemsFiltrados.map((item) => (
          <div key={item.id} className="card">
            <div className="card-img">
              {item.imagen ? (
                <img src={item.imagen} alt={item.nombre} />
              ) : (
                <div className="placeholder">Sin imagen</div>
              )}
              <span
                className={`favorito ${item.favorito ? "activo" : ""}`}
                onClick={() => toggleFavorito(item.id)}
              >
                ♥
              </span>
            </div>
            <div className="card-info">
              <div className="info-header">
                <div className="info-text">
                  <h3>{item.nombre}</h3>
                  <p>{item.categoria}</p>
                </div>
                <button
                  className="btn-perfil"
                  onClick={() => setModalItem(item)}
                >
                  Ver Perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalItem && (
        <div className="modal-overlay" onClick={() => setModalItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalItem(null)}>
              ×
            </span>
            <h2>{modalItem.nombre}</h2>
            <p>{modalItem.categoria}</p>
            {modalItem.imagen ? (
              <img
                src={modalItem.imagen}
                alt={modalItem.nombre}
                className="modal-img"
              />
            ) : (
              <div className="placeholder">Sin imagen</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
