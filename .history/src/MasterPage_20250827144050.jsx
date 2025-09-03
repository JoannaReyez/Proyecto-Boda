// src/MasterPage.jsx
import { NavLink } from "react-router-dom"
import "./MasterPage.css"

export default function MasterPage({ children }) {
  return (
    <div className="masterpage">
      <header className="header">
        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-item inicio" + (isActive ? " active" : "")
            }
          >
            Catálogo de Proveedores
          </NavLink>
          <NavLink
            to="/componente"
            className={({ isActive }) =>
              "nav-item componente" + (isActive ? " active" : "")
            }
          >
            Calendario y Tareas
          </NavLink>
          <NavLink
            to="/tareas"
            className={({ isActive }) =>
              "nav-item tareas" + (isActive ? " active" : "")
            }
          >
            Gestion financiera
          </NavLink>
          <NavLink
            to="/invitados"
            className={({ isActive }) =>
              "nav-item invitados" + (isActive ? " active" : "")
            }
          >
            Invitados
          </NavLink>
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  )
}
