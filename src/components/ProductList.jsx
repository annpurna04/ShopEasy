import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import smartphoneImg from "../assets/smartphone.jpg";
import laptopImg from "../assets/laptop.jpg";
import headphonesImg from "../assets/headphones.jpg";
import tshirtImg from "../assets/tshirt.jpg";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Vivo V60 5G (Auspicious Gold, 16GB RAM, 512GB Storage)",
    price: 19999,
    image: smartphoneImg,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    description: "HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD",
    price: 49999,
    image: laptopImg,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    description: "boAt Rockerz 512 ANC, 80Hrs Playback, Bluetooth Headphone",
    price: 2999,
    image: headphonesImg,
    category: "Accessories",
  },
  {
    id: 5,
    name: "T-shirt",
    description:
      "Amazon Brand - Symbol Women's Cotton Stretch Regular Fit Round Neck Half Sleeve T-Shirt (Pack of 3)",
    price: 4799,
    image: tshirtImg,
    category: "Fashion",
  },
  
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (product, existing) => {
    if (!existing) {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to cart`);
    } else {
      dispatch(incrementQuantity(product.id));
      toast.info(`${product.name} quantity increased`);
    }
  };

  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product.id));
    toast.info(`${product.name} quantity decreased`);
  };

  return (
    <div className="related-products-grid">
      {products.map((p) => {
        const existing = cartItems.find((item) => item.id === p.id);

        return (
          <div key={p.id} className="related-card">
            <Link to={`/product/${p.id}`} className="related-link">
              <img src={p.image} alt={p.name} className="related-img" />
            </Link>
            <h3 className="related-name">{p.name}</h3>
            <p className="related-price">₹{p.price}</p>

            {!existing ? (
              <button
                onClick={() => handleAdd(p, existing)}
                className="related-add-btn"
              >
                Add to Cart
              </button>
            ) : (
              <div className="quantity-controls">
                <button
                  onClick={() => handleDecrement(p)}
                  className="qty-btn"
                >
                  -
                </button>
                <span>{existing.quantity}</span>
                <button
                  onClick={() => handleAdd(p, existing)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
