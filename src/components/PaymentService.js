// PaymentService.js
const PaymentService = {
    processPayment: (totalAmount) => {
      return new Promise((resolve, reject) => {
        // Simulate payment processing
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5; // 50% success rate for simulation
          if (isSuccess) {
            resolve('Payment successful!');
          } else {
            reject('Payment failed. Please try again.');
          }
        }, 2000); // Simulate a delay for processing
      });
    },
  };
  
  export default PaymentService;
  