import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          <div className="cart-header-row">
            <span>Image</span>
            <span>Name</span>
            <span>Description</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span>Action</span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img
                src={Array.isArray(item.image) ? item.image[0] : item.image}
                alt={item.name}
                className="cart-img"
              />
              <span>{item.name}</span>
              <span>{item.description}</span>
              <span>₹{item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
              </div>
              <span>₹{item.price * item.quantity}</span>
              <CiCircleRemove
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              />
            </div>
          ))}
        </div>
      )}
      <h3>
        {cartItems.length} items | Total: ₹{total}
      </h3>

      {cartItems.length > 0 && (
        <div className="buy-btn-group">
          <button
            className="buy-btn"
            onClick={() => {
              if (auth.isAuthenticated) {
                navigate("/checkout");
              } else {
                navigate("/login");
              }
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
