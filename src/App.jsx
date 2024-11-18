import React, { useState } from 'react'
import Header from './Componentes/Header'
import Showcase from './Componentes/Showcase'
import Carousel from './Componentes/Carousel'
import Cart from './Componentes/Cart'
import Contact from './Componentes/Contact'
import './Firebase/Firebase';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (name, price) => {
    setCartItems([...cartItems, { name, price }]);
  };

  return (
    <div>
      <Header toggleCart={toggleCart} cartCount={cartItems.length} />
      <Showcase addToCart={addToCart} />
      <Carousel addToCart={addToCart} />
      {isCartVisible && <Cart cartItems={cartItems} />}
      <Contact />
    </div>
  );
}

export default App

