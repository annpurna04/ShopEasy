import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const existing = cartItems.find((item) => item.id === product.id);

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success(
      `${product.name} added to cart (x${(existing?.quantity || 0) + 1})`
    );
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
    toast.info("Quantity increased");
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
    if (existing?.quantity > 1) {
      toast.info("Quantity decreased");
    } else {
      toast.warn(`${product.name} removed from cart`);
    }
  };

  return (
    <div className="product-card">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={Array.isArray(product.image) ? product.image[0] : product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      {/* Name + Description */}
      <div className="product-details">
        <Link to={`/product/${product.id}`} className="product-link">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </Link>
      </div>

      {/* Price */}
      <div className="product-price">₹{product.price}</div>

      {/* Actions */}
        {!existing ? (
          <button onClick={handleAdd} className="add-btn">
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button
              onClick={() => handleDecrement(product.id)}
              className="qty-btn"
            >
              -
            </button>
            <span>{existing.quantity}</span>
            <button
              onClick={() => handleIncrement(product.id)}
              className="qty-btn"
            >
              +
            </button>
          </div>
        )}
    </div>
  );
};

export default ProductCard;
