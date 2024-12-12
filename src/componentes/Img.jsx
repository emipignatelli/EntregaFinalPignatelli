export default function Img(props) {
  const { src, alt, width = '100', height= '80' } = props;
    return (
      <div>
        <img src="./public/logo.jpg" alt={alt} width={width} height={height} />
      </div>
    )
  }
 
 
 