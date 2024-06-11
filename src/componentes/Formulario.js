import React, { useState } from 'react';

const Formulario = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value
    };
    setFormData(newFormData);
    onFormDataChange(newFormData);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <label>
        Nombre:
        <input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Apellido:
        <input 
          type="text" 
          name="apellido" 
          value={formData.apellido} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Correo electrónico:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Contraseña:
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Confirmar contraseña:
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
        />
      </label>
    </form>
  );
};

export default Formulario;
