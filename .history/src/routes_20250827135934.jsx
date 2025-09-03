// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MasterPage from "./MasterPage"
import Componente from "./Componente"

export default function AppRoutes() {
  return (
    <Router>
      <MasterPage>
        <Routes>
          <Route path="/" element={<h2>Página Principal</h2>} />
          <Route path="/componente" element={<Componente />} />
        </Routes>
      </MasterPage>
    </Router>
  )
}

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

