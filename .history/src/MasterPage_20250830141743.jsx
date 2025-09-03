// src/MasterPage.jsx
import { NavLink } from "react-router-dom"
import "./MasterPage.css"

export default function MasterPage({ children }) {
  return (
    <div className="masterpage">
      <header className="header">
        <nav className="navbar">
          <NavLink
            to="/Catalogo"
            className={({ isActive }) =>
              "nav-item proveedores" + (isActive ? " active" : "")
            }
          >
            Catálogo de Proveedores
          </NavLink>
          <NavLink to="/Calendario" className={({ isActive }) => "nav-item calendario" + (isActive ? " active" : "") 
          } > Calendario y Tareas </NavLink>
          
          <NavLink to="/finanzas" className={({ isActive }) => "nav-item finanzas" + (isActive ? " active" : "")
            } >
            Gestión Financiera
          </NavLink>
          <NavLink
            to="/invitados"
            className={({ isActive }) =>
              "nav-item invitados" + (isActive ? " active" : "")
            }
          >
            Gestión de invitados
          </NavLink>
          <NavLink
            to="/mesas"
            className={({ isActive }) =>
              "nav-item mesas" + (isActive ? " active" : "")
            }
          >
            Distribución de mesas
          </NavLink>
          <NavLink
            to="/Minutas"
            className={({ isActive }) =>
              "nav-item minutas" + (isActive ? " active" : "")
            }
          >
            Minutas y Cambios
          </NavLink>
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  )
}
