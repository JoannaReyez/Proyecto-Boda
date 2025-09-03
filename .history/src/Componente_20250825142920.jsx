import React, { useState } from "react";
import "./Componente.css"; // Importamos estilos

export default function Componente() {
  const [text, setText] = useState("");
  const [updated, setUpdated] = useState("");

  const textOnChange = (event) => {
    setText(event.target.value);
  };

  const buttonOnClick = () => {
    setUpdated(text);
  };

  return (
    <div className="container">
      <h2>🌊 Actualizador de Texto</h2>
      <input
        type="text"
        value={text}
        onChange={textOnChange}
        placeholder="Escribe algo..."
        className="input-text"
      />
      <button onClick={buttonOnClick} className="btn-update">
        Actualizar
      </button>
      <div className="text-display">
        <p>
          <strong>Texto input:</strong> {text}
        </p>
        <p>
          <strong>Texto actualizado:</strong> {updated}
        </p>
      </div>
    </div>
  );
}

