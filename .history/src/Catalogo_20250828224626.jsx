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
    {
      id: 5,
      nombre: "Anemone",
      categoria: "Decoración Floral",
      imagen: "./anemone.png",
      favorito: false,
    },
    {
      id: 6,
      nombre: "Estudio Panoramics",
      categoria: "Fotografias de Bodas",
      imagen: "./studio.png",
      favorito: false,
    },
    {
      id: 7,
      nombre: "Producciones Fusión",
      categoria: "Música & DJ",
      imagen: "./producciones.png",
      favorito: false,
    },
    {
      id: 8,
      nombre: "Banquetes Jesse",
      categoria: "Catering & Banquetes",
      imagen: "",
      favorito: false,
    },
  ];

  const [favoritos, setFavoritos] = useState(items);
  const [filtro, setFiltro] = useState("Todos"); // Estado para el filtro

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
                <div className="placeholder">Imagen del catering</div>
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
    <button className="btn-perfil">Ver Perfil</button>
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}
