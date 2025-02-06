import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";
import { getAsyncItemById } from "../data/getAsyncData";
import cartContext from "../context/cartContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(cartContext);

  useEffect(() => {
    getAsyncItemById(id)
      .then((product) => {
        setItem(product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {item && <ItemDetail {...item} addToCart={addItem} />}
    </div>
  );
}

export default ItemDetailContainer;
