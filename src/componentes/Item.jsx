import Button from "./Button";
import './Button.css'
import { Link } from "react-router-dom";


function Item(props) {
    const { price, title, text, img, id } = props;
  return (
    <div className="card" style={{background: "grey", borderRadius: "50px", borderColor: "black" }}>
        <img src={img} style={{height: '200px', width: '200px'}} alt="Aquí va a ir el título del producto" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text" style={{fontSize: "20px"}}>{text}</p>
            <div style={{border: "block", color: "black"}}>
                <p className="card-price">$ {price}</p>
            </div>
            <Link to={`/item/${id}`}>
            <Button>Ver más</Button>
            </Link>
        </div>

    </div>
  )
}

export default Item