import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  
  const { category } = useParams();
  


  useEffect(() => {
    if (!category) {
      const respuestaPromise = getAsyncData();
      
      respuestaPromise
        .then((respuesta) => {
          setProducts(respuesta);  
          
        })
        .catch((error) => alert(error));
    } else {
      const respuestaPromise = getAsyncItemsByCategory(category);
      console.log(respuestaPromise);  
      respuestaPromise
        .then((respuesta) => {
          setProducts(respuesta);  
          
        })
        .catch((error) => alert(error));
    }
  }, [category]);

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
