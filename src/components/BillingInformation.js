import React from 'react';
import './BillingInformation.css';

const BillingInformation = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="BillingInformation">
      <h2>Billing Information</h2>
      <div>
        <strong>Total:</strong> ${calculateTotal().toFixed(2)}
      </div>
      <button onClick={() => alert('Implement payment logic here')}>Proceed to Payment</button>
    </div>
  );
};

export default BillingInformation;
