import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAsyncData, getAsyncItemsByCategory } from "../data/getAsyncData";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      getAsyncData()
        .then((respuesta) => {
          setProducts(respuesta);
        })
        .catch((error) => alert(error));
    } else {
      getAsyncItemsByCategory(category)
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
