import React from 'react';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Rice', price: 100 },
    { id: 2, name: 'Pasta', price: 589 },
    { id: 3, name: 'Beans', price: 356 },
    // Add more products as needed
  ];

  return (
    <div className="ProductList">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li className="ProductItem" key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
