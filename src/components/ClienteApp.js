// src/ClienteApp.js
import React, { useState } from 'react';
import axios from 'axios';
import './ClienteApp.css';

function ClienteApp() {
  const [query, setQuery] = useState('');
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState(null);

  const buscarCliente = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/clientes/${query}`);
      setCliente(response.data);
      setError(null);
    } catch (error) {
      console.error('Error al buscar cliente:', error);
      setCliente(null);
      setError('Cliente no encontrado');
    }
  };

  const eliminarCliente = async () => {
    try {
      await axios.delete(`http://localhost:3000/clientes/${cliente.id}`);
      setCliente(null);
      setError('Cliente eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
      setError('Error al eliminar cliente');
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="ClienteApp">
      <h1>Buscar Cliente</h1>
      <input type="text" value={query} onChange={handleChange} placeholder="Nombre o ID del cliente" />
      <button onClick={buscarCliente}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cliente && (
        <div>
          <h2>Información del Cliente</h2>
          <pre>{JSON.stringify(cliente, null, 2)}</pre>
          <button onClick={eliminarCliente}>Eliminar Cliente</button>
        </div>
      )}
    </div>
  );
}

export default ClienteApp;
