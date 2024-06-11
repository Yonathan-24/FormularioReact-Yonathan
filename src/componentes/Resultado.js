import React from 'react';

const DatosIngresados = ({ formData }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Datos ingresados:</h3>
      <p>Nombre: {formData.nombre}</p>
      <p>Apellido: {formData.apellido}</p>
      <p>Correo electrónico: {formData.email}</p>
      <p>Contraseña: {formData.password}</p>
      <p>Confirmar contraseña: {formData.confirmPassword}</p>
    </div>
  );
};

export default DatosIngresados;
