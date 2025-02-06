import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ id, title, price, img, stock, addToCart }) {
  const handleAddToCart = (count) => {
    addToCart({ id, title, price, img, count, stock });
  };

  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>Precio: ${price}</p>
      <p>Stock: {stock} unidades</p>
      <ItemCount max={stock} onSubmitCount={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;
