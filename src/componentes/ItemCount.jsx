import { useState } from "react";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count < props.max) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function handleClick() {
    props.onSubmitCount(count);
  }

  return (
    <div>
      <div>
        <button onClick={handleAdd} disabled={count >= props.max}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract} disabled={count <= 1}>-</button>
      </div>
      <div>
        <button onClick={handleClick} disabled={props.max === 0}>Agregar al carrito</button>
        {props.max === 0 && <p>Stock no disponible</p>} 
      </div>
    </div>
  );
}

export default ItemCount;
