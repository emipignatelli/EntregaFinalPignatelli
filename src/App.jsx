
import './App.css';
import CartWidget from './componentes/CartWidget';
import Img from './componentes/Img';
import Navbar from './componentes/Navbar';
import './componentes/HeaderContenedor.css';
import ItemListContainer from './componentes/ItemListContainer';
import './componentes/Navbar.css';
import './componentes/Cartwidget.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Footer from './componentes/Footer';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './componentes/CartContainer';
import React, { useState, useEffect } from 'react';
import { loadProductsOnce } from './data/database';


function App() {
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      loadProductsOnce().then(() => {
        setProductsLoaded(true);
      }).catch((error) => {
        console.error("Error cargando productos:", error);
      });
    }
  }, [productsLoaded]);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="HeaderContenedor">
          <div>
            <Img />
          </div>
          <div>
            <Navbar>
              <li><Link to="/">Inicio</Link> </li>
              <li><Link to="/category/hombre">Zapatillas de hombre</Link></li>
              <li><Link to="/category/mujer">Zapatillas de mujer</Link></li>
              <li><Link to="/category/chicos">Zapatillas de chicos</Link></li>
            </Navbar>
          </div>
          <div>
            <CartWidget />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Emi Indumentaria!" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Compras por categoría" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
