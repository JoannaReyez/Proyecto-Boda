// src/MasterPage.jsx
import { NavLink } from "react-router-dom"
import "./MasterPage.css"

export default function MasterPage({ children }) {
  return (
    <div className="masterpage">
      <header className="header">
        <nav className="navbar">
          <NavLink to="/" className="nav-item">
            Inicio
          </NavLink>
          <NavLink to="/componente" className="nav-item">
            Componente
          </NavLink>
          <NavLink to="/tareas" className="nav-item">
            Tareas
          </NavLink>
          <NavLink to="/invitados" className="nav-item">
            Invitados
          </NavLink>
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  )
}
