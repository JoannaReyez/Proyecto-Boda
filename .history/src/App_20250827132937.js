import React from 'react';
import MasterPage from './MasterPage';
import Componente from './Componente';

export default function App() {
  return (
    <MasterPage>
      <h2>Página Principal</h2>
      <p>Creo que aqui va el contenido</p>
      <Componente />
    </MasterPage>
  );
}
