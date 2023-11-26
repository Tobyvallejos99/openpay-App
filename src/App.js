// src/App.js
import React, { useState } from 'react';
import ClienteApp from './components/ClienteApp';
import ClienteForm from './components/ClienteForm';  // Importa el componente ClienteForm
import './App.css';

function App() {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(true);

  const toggleVista = () => {
    setMostrarBusqueda(!mostrarBusqueda);
  };

  return (
    <div className="App">
      <h1>OpenPay Clientes</h1>
      <button className="container"onClick={toggleVista}>
        {mostrarBusqueda ? 'Crear Usuario' : 'Buscar Usuario'}
      </button>
      <div >
      {mostrarBusqueda ? <ClienteApp /> : <ClienteForm />}
      </div>
    </div>
  );
}

export default App;
