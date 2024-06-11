import React, { useState } from 'react';

const Formulario = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validaciones
    let error = '';
    if (name === 'nombre' || name === 'apellido') {
      if (value.length > 0 && value.length < 2) {
        error = 'El campo debe tener al menos 2 caracteres';
      }
    } else if (name === 'email') {
      if (value.length > 0 && value.length < 5) {
        error = 'El campo debe tener al menos 5 caracteres';
      }
    } else if (name === 'password') {
      if (value.length > 0 && value.length < 8) {
        error = 'La contraseña debe tener al menos 8 caracteres';
      }
      if (formData.confirmPassword && value !== formData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'Las contraseñas deben coincidir'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: ''
        }));
      }
    } else if (name === 'confirmPassword') {
      if (formData.password && value !== formData.password) {
        error = 'Las contraseñas deben coincidir';
      }
    }

    setErrors({
      ...errors,
      [name]: error
    });

    onFormDataChange({
      ...formData,
      [name]: value
    });
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
        {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
      </label>
      <label>
        Apellido:
        <input 
          type="text" 
          name="apellido" 
          value={formData.apellido} 
          onChange={handleChange} 
        />
        {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido}</p>}
      </label>
      <label>
        Correo electrónico:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </label>
      <label>
        Contraseña:
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </label>
      <label>
        Confirmar contraseña:
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
        />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
      </label>
    </form>
  );
};

export default Formulario;
