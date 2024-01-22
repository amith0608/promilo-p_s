import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cart }) => {
  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
