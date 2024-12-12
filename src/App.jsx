import './App.css'
import Cartwidget from './componentes/Cartwidget'
import Img from './componentes/Img'
import Navbar from './componentes/Navbar'
import './componentes/HeaderContenedor.css';
import ItemListContainer from './componentes/ItemListContainer';
import './componentes/Navbar.css';
import './componentes/Cartwidget.css'



function App() {
  

  return (
    <>
      <div className='HeaderContenedor'>
        <div>
        <Img />
        </div>
        <div>
        <Navbar>
        <li><a href="">Zapatillas de hombre</a></li>
        <li><a href="">Zapatillas de mujer</a></li>
        <li><a href="">Zapatillas de chicos</a></li>
        </Navbar>
        </div>
        <div>
        <Cartwidget />
        </div>
      </div>
      <ItemListContainer greeting="¡Bienvenidos a Emi Indumentaria!" />
    </>
  )
}

export default App
