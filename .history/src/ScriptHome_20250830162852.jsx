import { useState } from "react";
import React from "react";

/*Función para calcular el porcentaje de cada segmento (para el circulo)*/
export const calcularSegmento = (valor, total) =>
  total > 0 ? (valor / total) * 100 : 0;

/*Componente del circulo*/
export const CircleChart = ({ confirmados, pendientes, rechazados }) => {
  const total = confirmados + pendientes + rechazados;

  return (
    <div className="circle-chart">
      <svg width="120" height="120" viewBox="0 0 36 36" className="donut">
        <circle
          className="circle-segment confirmados"
          cx="18"
          cy="18"
          r="15.9155"
          strokeDasharray={`${calcularSegmento(confirmados, total)} ${
            100 - calcularSegmento(confirmados, total)
          }`}
          strokeDashoffset="25"
        />

        <circle
          className="circle-segment pendientes"
          cx="18"
          cy="18"
          r="15.9155"
          strokeDasharray={`${calcularSegmento(pendientes, total)} ${
            100 - calcularSegmento(pendientes, total)
          }`}
          strokeDashoffset={25 - calcularSegmento(confirmados, total)}
        />

        <circle
          className="circle-segment rechazados"
          cx="18"
          cy="18"
          r="15.9155"
          strokeDasharray={`${calcularSegmento(rechazados, total)} ${
            100 - calcularSegmento(rechazados, total)
          }`}
          strokeDashoffset={
            25 -
            (calcularSegmento(confirmados, total) +
              calcularSegmento(pendientes, total))
          }
        />
      </svg>

      <div className="circle-text">
        <strong>{confirmados}</strong>
        <span>de {total}</span>
      </div>
    </div>
  );
};

/*Aqui inicia el script del aparatdo del catalogo, en la cuestion de imagenes*/
export default function useScriptHome() {
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
  const [filtro, setFiltro] = useState("Todos");
  const [modalItem, setModalItem] = useState(null); // Estado para el modal

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorito: !item.favorito } : item
      )
    );
  };

  /* Aqui esta la logica para ver el apartado de favoritos y todo, falta la seccion de seleccionada*/
  const itemsFiltrados =
    filtro === "Todos"
      ? favoritos
      : filtro === "Favoritos"
      ? favoritos.filter((item) => item.favorito)
      : favoritos;

  return {
    favoritos,
    filtro,
    setFiltro,
    modalItem,
    setModalItem,
    toggleFavorito,
    itemsFiltrados,
  };
}
/* Aqui empieza el apartado de Calendario*/ 
export function useCalendarioConfig() {
  const [tab, setTab] = useState("Calendario");

  const tareas = [
    { id: 1, nombre: "Seleccionar lugar de la ceremonia", estado: "completado", fecha: "15 Marzo" },
    { id: 2, nombre: "Contratar fotógrafo", estado: "completado", fecha: "22 Marzo" },
    { id: 3, nombre: "Prueba de menú", estado: "en-progreso", fecha: "5 Mayo" },
    { id: 4, nombre: "Enviar invitaciones", estado: "pendiente", fecha: "20 Mayo" },
    { id: 5, nombre: "Prueba de vestido final", estado: "en-pendiente", fecha: "15 Julio" },
    { id: 6, nombre: "¡Nuestra Boda!", estado: "pendiente", fecha: "" },
  ];

  const completadas = tareas.filter((t) => t.estado === "completado").length;
  const total = tareas.length;
  const progreso = Math.round((completadas / total) * 100);

  return {
    tab,
    setTab,
    tareas,
    completadas,
    total,
    progreso
  };
}

/*Aqui termina el script de Invitados*/
export default function useInvitados() {
  const [filtro, setFiltro] = useState("Todos");

  const [invitados, setInvitados] = useState([
    {
      id: 1,
      nombre: "Jesús Ramos Cruz",
      estatus: "Confirmado",
      parentesco: "Familia Cruz",
      whatsapp: "921102435",
      correo: "dg.juanso1@gmail.com",
      atencionHumana: false,
      restricciones: false,
    },
    {
      id: 2,
      nombre: "María del Refugio Cruz Villalobos",
      estatus: "Confirmado",
      parentesco: "Amigo",
      whatsapp: "8974258932",
      correo: "duneftorck@gmail.com",
      atencionHumana: false,
      restricciones: false,
    },
    {
      id: 3,
      nombre: "Antonio Cerros Cruz",
      estatus: "Pendiente",
      parentesco: "Trabajo",
      whatsapp: "8854651234",
      correo: "pamroso@gmail.com",
      atencionHumana: true,
      restricciones: false,
    },
    {
      id: 4,
      nombre: "Juana Villalobos Flores",
      estatus: "Confirmado",
      parentesco: "Familia Lara",
      whatsapp: "uvero896@gmail.com",
      correo: "uvero896@gmail.com",
      atencionHumana: false,
      restricciones: true,
    },
    {
      id: 5,
      nombre: "Cesar Octavio Pérez Cruz",
      estatus: "Rechazado",
      parentesco: "Familia Lara",
      whatsapp: "8974258932",
      correo: "dg.juanso1@gmail.com",
      atencionHumana: true,
      restricciones: false,
    },
    {
      id: 6,
      nombre: "Alejandra Lara Cruz",
      estatus: "Pendiente",
      parentesco: "Familia Cruz",
      whatsapp: "duneftorck@gmail.com",
      correo: "duneftorck@gmail.com",
      atencionHumana: false,
      restricciones: false,
    },
    {
      id: 7,
      nombre: "Esmeralda Jimena Rosado",
      estatus: "Pendiente",
      parentesco: "Amigo",
      whatsapp: "8854651234",
      correo: "pamroso@gmail.com",
      atencionHumana: false,
      restricciones: false,
    },
  ]);

  const invitadosFiltrados = useMemo(() => {
    if (filtro === "Todos") return invitados;
    return invitados.filter((inv) => inv.estatus === filtro);
  }, [filtro, invitados]);

  const totalConfirmados = invitados.filter((i) => i.estatus === "Confirmado").length;
  const totalPendientes = invitados.filter((i) => i.estatus === "Pendiente").length;
  const totalRechazados = invitados.filter((i) => i.estatus === "Rechazado").length;

  return {
    filtro,
    setFiltro,
    invitadosFiltrados,
    totalConfirmados,
    totalPendientes,
    totalRechazados,
    total: invitados.length,
  };
}
