// src/ClienteForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './ClienteForm.css';

function ClienteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/clientes', formData);
      // Limpiar el formulario después de un envío exitoso
      setFormData({
        name: '',
        email: '',
      });
      console.log('Cliente creado exitosamente');
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Crear Cliente</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />

        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}

export default ClienteForm;
