import { useState } from "react";
import { savePurchaseData } from "../data/database.js";
<data value=""></data>;  // Asegúrate de que la ruta esté correcta

import 'bootstrap/dist/css/bootstrap.min.css';


function FormCompra({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false); // Nuevo estado para el mensaje de agradecimiento

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar el formulario
  const validate = () => {
    let formErrors = {};
    let isValid = true;

    // Validación para el Nombre (solo letras)
    if (!/^[a-zA-Z]+$/.test(formData.nombre)) {
      formErrors.nombre = "El nombre debe contener solo letras.";
      isValid = false;
    }

    // Validación para el Apellido (solo letras)
    if (!/^[a-zA-Z]+$/.test(formData.apellido)) {
      formErrors.apellido = "El apellido debe contener solo letras.";
      isValid = false;
    }

    // Validación para el DNI (exactamente 8 números)
    if (!/^\d{8}$/.test(formData.dni)) {
      formErrors.dni = "El DNI debe ser un número de 8 dígitos.";
      isValid = false;
    }

    // Validación para el Email (debe contener "@")
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "El correo electrónico no es válido.";
      isValid = false;
    }

    setErrors(formErrors); // Guardamos los errores
    return isValid;
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Formulario validado. Enviando datos a Firebase...");

      // Primero, mostramos los datos en la consola para asegurarnos que están correctos
      console.log("Datos del formulario:", formData);

      // Guardamos los datos en Firebase
      savePurchaseData(formData);

      // Continuamos con el resto del código
      onSubmit(formData); // Si es válido, enviamos los datos
      setSubmitted(true);  // Establecemos el estado de envío como true para mostrar el mensaje
    }
};

  if (submitted) {
    return (
      <div className="alert alert-success mt-3">
        <h2>Gracias por elegirnos, te hemos enviado un correo a tu casilla para poder completar la transacción.</h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
          required
        />
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="form-control"
          required
        />
        {errors.apellido && <p style={{ color: "red" }}>{errors.apellido}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI:</label>
        <input
          type="text"
          id="dni"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          className="form-control"
          required
        />
        {errors.dni && <p style={{ color: "red" }}>{errors.dni}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div className="mt-3">
        <button type="submit" className="btn btn-primary w-100">Enviar datos</button>
      </div>
    </form>
  );
}

export default FormCompra;
