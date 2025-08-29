import React from "react";

const CartSummary = ({ cartItems }) => (
  <div className="cart-summary">
    <h3>Cart Summary</h3>
    <div className="cart-header-sum-row">
      <span>Image</span>
      <span>Name</span>
      <span>Price</span>
      <span>Qty</span>
      <span>Subtotal</span>
    </div>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cartItems.map((item) => (
        <div key={item.id} className="cart-sum-row">
          <img
            src={Array.isArray(item.image) ? item.image[0] : item.image}
            alt={item.name}
            className="cart-sum-img"
          />
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <span>{item.quantity}</span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))
    )}
  </div>
);

export default CartSummary;
