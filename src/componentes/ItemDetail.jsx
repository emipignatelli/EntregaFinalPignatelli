import ItemCount from "./ItemCount";
import { Link } from "react-router-dom"; 


function ItemDetail({ price, title, text, img, stock}) {
    

    function onSubmitCount(count) {
        

    }
  return (
    <div className="card" style={{background: "grey", borderRadius: "50px", borderColor: "black" }}>
        <img src={img} style={{height: '400px', width: '400px'}} alt="Aquí va a ir el título del producto" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text" style={{fontSize: "20px"}}>{text}</p>
            <div style={{border: "block", color: "black"}}>
                <p className="card-price">$ {price}</p>
            </div>
            
            <div>
                <ItemCount onSubmitCount={onSubmitCount} max={stock} />
            </div>
            
            
        </div>

    </div>
  )
}

export default ItemDetail;