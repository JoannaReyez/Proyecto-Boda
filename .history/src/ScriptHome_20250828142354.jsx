// CircleChart.jsx
import React from "react";

export default function CircleChart({ confirmados, pendientes, rechazados }) {
  const total = confirmados + pendientes + rechazados;

  const calcularSegmento = (valor) => (valor / total) * 100;

  return (
    <div className="circle-chart">
      <svg width="120" height="120" viewBox="0 0 36 36" className="donut">
        {/* Confirmados */}
        <circle
          className="circle-segment confirmados"
          cx="18"
          cy="18"
          r="15.9155"
          strokeDasharray={`${calcularSegmento(confirmados)} ${100 - calcularSegmento(confirmados)}`}
          strokeDashoffset="25"
        />

        {/* Pendientes */}
        <circle
          className="circle-segment pendientes"
          cx="18"
          cy="18"
          r="15.9155"
          strokeDasharray={`${calcularSegmento(pendientes)} ${100 - calcularSegmento(pendientes)}`}
          strokeDashoffset={25 - calcularSegmento(confirmados)}
        />

        {/* Rechazados */}
        <circle
          className="circle-segment rechazados"
          cx="18"
          cy="18"
          r="15.9155"
          strokeDasharray={`${calcularSegmento(rechazados)} ${100 - calcularSegmento(rechazados)}`}
          strokeDashoffset={25 - (calcularSegmento(confirmados) + calcularSegmento(pendientes))}
        />
      </svg>

      <div className="circle-text">
        <strong>{confirmados}</strong>
        <span>de {total}</span>
      </div>
    </div>
  );
}
