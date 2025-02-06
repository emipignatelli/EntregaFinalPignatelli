import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import cartContext from "../context/cartContext";
import FormCompra from "./FormCompra"; 

function CartContainer() {
  const { cartItems, removeItem, clearCart } = useContext(cartContext); 
  const [showForm, setShowForm] = useState(false); 
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const [purchaseId, setPurchaseId] = useState(""); 
  const navigate = useNavigate(); 

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);

  const handleFinalizePurchase = () => {
    setShowForm(true); 
  };

  const handleFormSubmit = (formData, newPurchaseId) => {
    console.log("Datos del formulario:", formData);
    console.log("ID de compra recibido en CartContainer: ", newPurchaseId); 
  
   
    const isValid = formData.nombre && formData.apellido && formData.dni && formData.email;
  
    if (isValid) {
      setFormSubmitted(true);
      setPurchaseId(newPurchaseId); 
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };

  
  useEffect(() => {
    if (formSubmitted && purchaseId) {
      console.log("Estado de purchaseId después de actualizar:", purchaseId);  
      
      
      setTimeout(() => {
        clearCart();
        navigate("/");  
      }, 5000); 
    }
  }, [purchaseId, formSubmitted]);  

  return (
    <div>
      <h1>Tu carrito</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
            <hr />
          </div>
        ))
      ) : (
        <p>Tu carrito está vacío</p>
      )}

      {cartItems.length > 0 && (
        <div>
          <h3>Total: ${totalPrice}</h3>
          <button onClick={handleFinalizePurchase}>Finalizar compra</button>
        </div>
      )}

      {showForm && !formSubmitted && <FormCompra onSubmit={handleFormSubmit} />}

      {formSubmitted && (
        <div>
          <h2>
            Gracias por elegirnos, te hemos enviado un correo a tu casilla para poder completar la transacción.
            {purchaseId && ` Tu número de ID es: ${purchaseId}`}
          </h2>
        </div>
      )}
    </div>
  );
}

export default CartContainer;

