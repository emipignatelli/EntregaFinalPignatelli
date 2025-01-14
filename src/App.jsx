import './App.css'
import Cartwidget from './componentes/Cartwidget'
import Img from './componentes/Img'
import Navbar from './componentes/Navbar'
import './componentes/HeaderContenedor.css';
import ItemListContainer from './componentes/ItemListContainer';
import './componentes/Navbar.css';
import './componentes/Cartwidget.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Footer from './componentes/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className='HeaderContenedor'>
        <div>
          <Img />
        </div>
        <div>
          <Navbar>
            {/* Aquí cambiamos los <a> por <Link> para el enrutamiento */}
            <li><Link to="/">Inicio</Link> </li>
            <li><Link to="/category/hombre">Zapatillas de hombre</Link></li>
            <li><Link to="/category/mujer">Zapatillas de mujer</Link></li>
            <li><Link to="/category/chicos">Zapatillas de chicos</Link></li>
          </Navbar>
        </div>
        <div>
          <Cartwidget />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenidos a Emi Indumentaria!" />}
        />
        

        <Route
          path="/category/:category"
          element={<ItemListContainer greeting="Compras por categoría" />}
        />

      <Route path="/item/:id" element={<ItemDetailContainer />} />
        
      </Routes> 
      
      <Footer>
        
      </Footer>
    </BrowserRouter>
  );
}

export default App;
