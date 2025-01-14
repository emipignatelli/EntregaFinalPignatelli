import { Link } from "react-router-dom";

function Img(props) {
  const { src, alt, width = '100', height= '80no' } = props;
    return (
      <div>
        <Link to ="/">
        <img src="./public/logo.jpg" alt={alt} width={width} height={height} />
      </Link>
      </div>
    
    )
  }
 
export default Img 
 