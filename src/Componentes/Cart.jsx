import React from 'react'

function Cart({ cartItems }) {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <div id="cart">
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Total: ${total}</p>
        <button onClick={() => alert('Gracias por tu compra!')}>Proceder al pago</button>
      </div>
    );
  }

export default Cart