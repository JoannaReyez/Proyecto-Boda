import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Componente from "./Componente"
import Finanzas from "./Finanzas"
import Invitados from "./Invitados"
import Mesas from "./Mesas"
import Minutas from "./Minutas"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Ruta Home (incluye hero, resumen y MasterPage adentro) */}
        <Route path="/" element={<Home />}>
          {/* Sub-rutas que se cargan en el Outlet de Home */}
          <Route path="componente" element={<Componente />} />
          <Route path="finanzas" element={<Finanzas />} />
          <Route path="invitados" element={<Invitados />} />
          <Route path="mesas" element={<Mesas />} />
          <Route path="minutas" element={<Minutas />} />
        </Route>
      </Routes>
    </Router>
  )
}
