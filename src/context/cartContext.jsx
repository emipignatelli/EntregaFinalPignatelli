
import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]); 

 
  function addItem({ price, id, title, img, count, stock }) {
    const copyCartItems = [...cartItems]; 

    
    const existingItem = copyCartItems.find(item => item.id === id);

    if (existingItem) {
      
      const newCount = existingItem.count + count;
      if (newCount <= stock) {
        existingItem.count = newCount; 
      } else {
        existingItem.count = stock; 
        alert(`No hay suficiente stock. Se agregarán ${stock} unidades en lugar de ${count}`);
      }
    } else {
      
      if (count <= stock) {
        copyCartItems.push({ id, title, img, count, price, stock });
      } else {
        copyCartItems.push({ id, title, img, count: stock, price, stock });
        alert(`No hay suficiente stock. Se agregarán ${stock} unidades en lugar de ${count}`);
      }
    }

    setCartItems(copyCartItems); 
  }

 
  function removeItem(id) {
    const updatedCart = cartItems.filter(item => item.id !== id); 
    setCartItems(updatedCart); 
  }

 
  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }


  function clearCart() {
    setCartItems([]); 
  }

  return (
    <cartContext.Provider value={{ cartItems, countItemsInCart, addItem, removeItem, clearCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
