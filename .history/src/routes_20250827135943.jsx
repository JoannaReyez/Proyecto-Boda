

// src/MasterPage.jsx
import { Link } from "react-router-dom"
import "./MasterPage.css"

export default function MasterPage({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/componente">Componente</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

