import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";

export default function Dashboard() {
  const hoy = new Date();
  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const primerDia = new Date(anio, mes, 1).getDay() || 7;
  const diasEnMes = new Date(anio, mes + 1, 0).getDate();

  const cambiarMes = (offset) => {
    let nuevoMes = mes + offset;
    let nuevoAnio = anio;
    if (nuevoMes < 0) {
      nuevoMes = 11;
      nuevoAnio--;
    } else if (nuevoMes > 11) {
      nuevoMes = 0;
      nuevoAnio++;
    }
    setMes(nuevoMes);
    setAnio(nuevoAnio);
  };

  return (
    <div className="dashboard-container">
      {/* Encabezado */}
      <div className="dashboard-header">
        <h1>Hola, Instituto Villa Rica</h1>
        <span className="evento">Graduación de Lic. Derecho 2020 - 2024</span>
      </div>

      {/* Métricas clave */}
      <div className="metricas">
        <div className="card-metrica">
          <CircularProgressbar
            value={75}
            text={`75%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#2c9cdb",
              trailColor: "#e6f0f7",
              textSize: "16px",
            })}
          />
          <p>% de pagos completados</p>
          <span>750 / 1000 asistentes</span>
        </div>
        <div className="card-metrica">
          <CircularProgressbar
            value={60}
            text={`60%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#4ab5a6",
              trailColor: "#e6f0f7",
              textSize: "16px",
            })}
          />
          <p>Asientos Asignados</p>
          <span>600 / 1000 asistentes</span>
        </div>
        <div className="card-metrica">
          <CircularProgressbar
            value={85}
            text={`85%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#82c341",
              trailColor: "#e6f0f7",
              textSize: "16px",
            })}
          />
          <p>Boletos emitidos</p>
          <span>850 / 1000 asistentes</span>
        </div>
      </div>

      {/* Calendario */}
      <div className="calendario-container">
        <div className="calendario-header">
          <button onClick={() => cambiarMes(-1)}>&lt;</button>
          <h2>{meses[mes]} {anio}</h2>
          <button onClick={() => cambiarMes(1)}>&gt;</button>
        </div>
        <div className="calendario-grid">
          {diasSemana.map((dia, i) => (
            <div key={i} className="calendario-dia-semana">{dia}</div>
          ))}
          {Array(primerDia - 1).fill(null).map((_, i) => (
            <div key={"empty-" + i} className="calendario-vacio"></div>
          ))}
          {Array.from({ length: diasEnMes }, (_, i) => {
            const dia = i + 1;
            const esHoy =
              dia === hoy.getDate() &&
              mes === hoy.getMonth() &&
              anio === hoy.getFullYear();
            return (
              <div
                key={dia}
                className={`calendario-dia ${esHoy ? "hoy" : ""}`}
              >
                {dia}
              </div>
            );
          })}
        </div>
      </div>

      {/* Acciones requeridas */}
      <div className="acciones-requeridas">
        <h3>Acciones requeridas</h3>
        <p>Una lista de tareas urgentes para que el admin actúe</p>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>💰 Pago Pendiente</td>
              <td>Hay 15 nuevos comprobantes para verificar</td>
              <td><button className="accion-btn">Ir a Módulo de Pagos</button></td>
            </tr>
            <tr>
              <td>💬 Chat</td>
              <td>3 conversaciones requieren intervención humana</td>
              <td><button className="accion-btn">Ir a Módulo de Comunicación</button></td>
            </tr>
            <tr>
              <td>⚠️ Conflicto de asignación</td>
              <td>Nuevo conflicto de asignación de asientos</td>
              <td><button className="accion-btn">Ir a Módulo de Asignaciones</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
