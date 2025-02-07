import { useState, useEffect, useContext } from "react";
import { savePurchaseData } from "../data/database.js";
import cartContext from "../context/cartContext"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function FormCompra({ onSubmit }) {
  const { cartItems } = useContext(cartContext); 

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

  const [submitted, setSubmitted] = useState(false);
  const [purchaseId, setPurchaseId] = useState(""); 

  
  useEffect(() => {
    if (submitted && purchaseId) {
      console.log("ID de compra recibido en el useEffect: ", purchaseId);
    }
  }, [submitted, purchaseId]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!/^[a-zA-Z]+$/.test(formData.nombre)) {
      formErrors.nombre = "El nombre debe contener solo letras.";
      isValid = false;
    }

    if (!/^[a-zA-Z]+$/.test(formData.apellido)) {
      formErrors.apellido = "El apellido debe contener solo letras.";
      isValid = false;
    }

    if (!/^\d{8}$/.test(formData.dni)) {
      formErrors.dni = "El DNI debe ser un número de 8 dígitos.";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "El correo electrónico no es válido.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      console.log("Formulario validado. Enviando datos a Firebase...");
      console.log("Datos del formulario:", formData);
  
      
      const newPurchaseId = await savePurchaseData(formData, cartItems);
  
      if (newPurchaseId) {
        console.log("ID de compra recibido de Firebase: ", newPurchaseId);
        
        onSubmit(formData, newPurchaseId);
      }
  
      setSubmitted(true);  
    }
  };

  
  if (submitted) {
    return (
      <div className="alert alert-success mt-3">
        <h2>
        Gracias por elegirnos, te hemos enviado un correo a tu casilla para poder completar la transacción.
        {purchaseId && ` Tu número de ID es: ${purchaseId}`}
        </h2>
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

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormCompra;
