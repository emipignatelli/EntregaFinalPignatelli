import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom"; 

function CartWidget() {
  const { countItemsInCart } = useContext(cartContext); 
  const totalItems = countItemsInCart(); 

  return (
    <div>
      <Link to="/cart">
        <img className="Carrito" src="./public/carrito.png" alt="Ícono del carrito" width="30px"/>
        <span className="totalCarrito">{totalItems}</span> 
      </Link>
    </div>
  );
}

export default CartWidget;
