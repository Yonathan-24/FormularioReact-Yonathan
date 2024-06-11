import React, { useState } from 'react';
import Formulario from './componentes/Formulario';
import DatosIngresados from './componentes/Resultado';

const App = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Formulario onFormDataChange={handleFormDataChange} />
      <DatosIngresados formData={formData} />
    </div>
  );
};

export default App;
