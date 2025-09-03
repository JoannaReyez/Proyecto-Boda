import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Componente from "./Componente"
import Finanzas from "./Componente"
import Invitados from "./Componente"
import Mesas from "./Componente"
import Minutas from "./Componente"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Ruta Home (incluye hero, resumen y MasterPage adentro) */}
        <Route path="/" element={<Home />}>
          {/* Sub-rutas que se cargan en el Outlet de Home */}
          <Route path="componente" element={<Componente />} />
          <Route path="Componente" element={<Finanzas />} />
          <Route path="Componente" element={<Invitados />} />
          <Route path="Componente" element={<Mesas />} />
          <Route path="Componente" element={<Minutas />} />
        </Route>
      </Routes>
    </Router>
  )
}
