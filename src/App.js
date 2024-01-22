import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import BillingInformation from './components/BillingInformation';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <ProductList addToCart={addToCart} />
      <div className="CheckoutContainer">
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        <BillingInformation cart={cart} clearCart={clearCart} />
      </div>
    </div>
  );
};

export default App;
