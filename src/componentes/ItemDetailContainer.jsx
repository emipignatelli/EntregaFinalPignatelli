import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


 
function ItemDetailContainer() {

    const [product, setProduct] = useState();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
        async function getProduct() {
            const data = await getAsyncItemById(id);
            setProduct(data);
        }
        getProduct();
    }
    }, [id]);

    if (!product) { 
        return <div>Cargando producto...</div>;
    
    }

  return <ItemDetail {...product} />;
    
  
}

export default ItemDetailContainer;