import { useState } from "react";
import './Button.css';


function Button(props) {
    const { color, children } = props;
    const [colorState, setColorState] = useState(color);


  return (
    <button onClick= { () => {
        setColorState("ligth blue");
    }}
    style={{
      backgroudColor: colorState,
      fontSize: '20px',
      color: 'black',
      border: 'block',
    
    }}
    >
        {children}
    </button>
  )
}

export default Button;