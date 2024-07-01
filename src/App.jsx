import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <ProductList onAddToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
