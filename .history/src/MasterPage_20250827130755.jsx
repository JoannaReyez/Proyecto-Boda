import React from 'react';
import MasterPage from './MasterPage';
import Componente from './Componente';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas de ejemplo
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <MasterPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </MasterPage>
    </Router>
  );
}
