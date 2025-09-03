import React, { useState } from "react";
import "./Catalogo.css";

export default function Catalogo() {
  // Ejemplo de datos
  const items = [
    {
      id: 1,
      nombre: "Estudio Luna",
      categoria: "Fotografía de Bodas",
      imagen: "/estudio.png",
      favorito: true,
    },
    {
      id: 2,
      nombre: "Delicias Gourmet",
      categoria: "Catering & Banquetes",
      imagen: "",
      favorito: false,
    },
    {
      id: 3,
      nombre: "Jardín Secreto",
      categoria: "Decoración Floral",
      imagen: "./jardin.png",
      favorito: true,
    },
    {
      id: 4,
      nombre: "Armonía Musical",
      categoria: "Música & DJ",
      imagen: "./armonia.png",
      favorito: false,
    },
  ];

  const [favoritos, setFavoritos] = useState(items);
  const [filtro, setFiltro] = useState("Todos"); 
  const [modalItem, setModalItem] = useState(null); // Estado para el modal

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorito: !item.favorito } : item
      )
    );
  };

  // Lógica del filtrado
  const itemsFiltrados =
    filtro === "Todos"
      ? favoritos
      : filtro === "Favoritos"
      ? favoritos.filter((item) => item.favorito)
      : favoritos;

  return (
    <div className="catalogo-container">
      {/* Filtros */}
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
            <span className="close-btn" onClick={() => setModalItem(null)}>×</span>
            <h2>{modalItem.nombre}</h2>
            <p>{modalItem.categoria}</p>
            {modalItem.imagen ? (
              <img src={modalItem.imagen} alt={modalItem.nombre} className="modal-img" />
            ) : (
              <div className="placeholder">Sin imagen</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}






