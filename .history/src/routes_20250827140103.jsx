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


