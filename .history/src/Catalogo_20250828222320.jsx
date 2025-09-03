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
      imagen: "./",
      favorito: true,
    },
    {
      id: 4,
      nombre: "Armonía Musical",
      categoria: "Música & DJ",
      imagen: "https://via.placeholder.com/300x200/ff69b4",
      favorito: false,
    },
  ];

  const [favoritos, setFavoritos] = useState(items);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorito: !item.favorito } : item
      )
    );
  };

  return (
    <div className="catalogo-container">
      {/* Filtros */}
      <div className="catalogo-filtros">
        <button className="activo">Todos</button>
        <button>Favoritos</button>
        <button>Seleccionados</button>
      </div>

      {/* Grid de tarjetas */}
      <div className="catalogo-grid">
        {favoritos.map((item) => (
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
              <h3>{item.nombre}</h3>
              <p>{item.categoria}</p>
              <button className="btn-perfil">Ver Perfil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
