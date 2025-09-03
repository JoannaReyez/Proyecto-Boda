import React from "react";
import "./Distribucion.css";

export default function Distribucion() {
  return (
    <div className="distribucion-container">
      {/* Botones de acciones */}
      <div className="acciones-distribucion">
        <button className="btn btn-morado">Disposición del Salón</button>
        <button className="btn btn-verde-claro">Asignación automática</button>
        <button className="btn btn-verde">Guardar Distribución</button>
      </div>

      {/* Invitados sin asignar */}
      <div className="invitados-section">
        <h3>Invitados sin Asignar (20 personas)</h3>
        <div className="invitado-card">
          <strong>Familia García</strong> (4 personas)
          <ul>
            <li>María López</li>
          </ul>
        </div>
        <div className="invitado-card">
          <strong>Familia Rodríguez</strong> (3 personas)
          <ul>
            <li>Carlos Méndez</li>
          </ul>
        </div>
        <div className="invitado-card">
          <strong>Compañeros de trabajo</strong> (4 personas)
          <ul>
            <li>Ana Sofía</li>
            <li>Compañeros Padel</li>
          </ul>
        </div>
        <div className="invitado-card">
          <strong>Familia Lara</strong> (7 personas)
        </div>
        <p className="nota">
          Arrastra los invitados a las mesas del plano para asignar lugares
        </p>
      </div>

      {/* Plano del salón */}
      <div className="plano-section">
        <h3>Plano del Salón - "Jardín Romántico"</h3>
        <div className="plano-box">
          <img
            src="/plano-salon.png"
            alt="Plano del salón"
            className="plano-imagen"
          />
        </div>
      </div>
    </div>
  );
}
