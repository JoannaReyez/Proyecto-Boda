// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MasterPage from "./MasterPage"
import Componente from "./Componente"
import Home from "./Home"

export default function AppRoutes() {
  return (
    <Router>
      <MasterPage>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/componente" element={<Componente />} />
        </Routes>
      </MasterPage>
    </Router>
  )
}


