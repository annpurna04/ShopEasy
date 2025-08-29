import React, { useState,useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { toast } from "react-toastify";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentIndex(0); 
  }, [id]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const existing = cartItems.find((item) => item.id === product?.id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAdd = (p) => {
    dispatch(addToCart(p));
    toast.success(
      `${p.name} added to cart (x${
        (cartItems.find((i) => i.id === p.id)?.quantity || 0) + 1
      })`
    );
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
    toast.info("Quantity increased");
  };

  const handleDecrement = (id, name, currentQty) => {
    dispatch(decrementQuantity(id));
    if (currentQty > 1) {
      toast.info("Quantity decreased");
    } else {
      toast.warn(`${name} removed from cart`);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % product.image.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1
    );
  };

  return (
    <div className="product-page">
      <div className="product-main">
        {/* LEFT: IMAGES */}
        <div className="product-images">
          <div className="image-slider">
            <button className="slider-btn left" onClick={prevImage}>
              ❮
            </button>
            <img
              src={product.image[currentIndex]}
              alt={product.name}
              className="main-image"
            />
            <button className="slider-btn right" onClick={nextImage}>
              ❯
            </button>
          </div>
          <div className="thumbnail-row">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className={`thumbnail ${
                  currentIndex === i ? "active-thumb" : ""
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* CENTER: DETAILS */}
        <div className="product-info">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-description">{product.description}</p>

          <ul className="product-specs">
            <li>
              <strong>Material:</strong> {product.details?.materialType}
            </li>
            <li>
              <strong>Closure:</strong> {product.details?.closureType}
            </li>
            <li>
              <strong>Heel:</strong> {product.details?.heelType}
            </li>
            <li>
              <strong>Water Resistance:</strong>{" "}
              {product.details?.waterResistance}
            </li>
            <li>
              <strong>Sole:</strong> {product.details?.soleMaterial}
            </li>
            <li>
              <strong>Style:</strong> {product.details?.style}
            </li>
            <li>
              <strong>Origin:</strong> {product.details?.countryOfOrigin}
            </li>
          </ul>

          <h3 className="about-title">About this item</h3>
          <ul className="about-list">
            {product.details?.about.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT: BUY BOX */}
        <div>
          <div className="buy-box">
            <p className="price">₹{product.price}</p>
            <p className="delivery-info">
              <strong>Delivery:</strong> Tomorrow by 9 PM
            </p>
            <p className="delivery-info">
              <strong>Ships from:</strong> ShopEasy
            </p>
            <p className="delivery-info">
              <strong>Sold by:</strong>{" "}
              {product.details?.additionalInfo.manufacturer}
            </p>
          </div>

          <div className="product-actions">
            {!existing ? (
              <button onClick={() => handleAdd(product)} className="add-btn">
                Add to Cart
              </button>
            ) : (
              <>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleDecrement(
                        product.id,
                        product.name,
                        existing?.quantity || 1
                      )
                    }
                    className="qty-btn"
                  >
                    -
                  </button>
                  <span>{existing?.quantity || 1}</span>
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>
                <button onClick={handleCheckout} className="buy-btn">
                   View Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ADDITIONAL INFO */}
      <div className="additional-info">
        <h4>Additional Information</h4>
        <ul>
          <li>
            <strong>Manufacturer:</strong>{" "}
            {product.details?.additionalInfo.manufacturer}
          </li>
          <li>
            <strong>Packer:</strong> {product.details?.additionalInfo.packer}
          </li>
          <li>
            <strong>Item Weight:</strong>{" "}
            {product.details?.additionalInfo.itemWeight}
          </li>
          <li>
            <strong>Dimensions:</strong>{" "}
            {product.details?.additionalInfo.itemDimensions}
          </li>
          <li>
            <strong>Net Quantity:</strong>{" "}
            {product.details?.additionalInfo.netQuantity}
          </li>
          <li>
            <strong>Generic Name:</strong>{" "}
            {product.details?.additionalInfo.genericName}
          </li>
        </ul>
      </div>

      {/* RELATED PRODUCTS */}
      <h2 className="related">Related Products</h2>
      <div className="related-products-grid">
        {relatedProducts.map((p) => {
          const existingRelated = cartItems.find((item) => item.id === p.id);
          return (
            <div key={p.id} className="related-card">
              <Link to={`/product/${p.id}`} className="related-link">
                <img src={p.image[0]} alt={p.name} className="related-img" />
              </Link>
              <h3 className="related-name">{p.name}</h3>
              <p className="related-price">₹{p.price}</p>

              {!existingRelated ? (
                <button
                  className="related-add-btn"
                  onClick={() => handleAdd(p)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleDecrement(p.id, p.name, existingRelated.quantity)
                    }
                    className="qty-btn"
                  >
                    -
                  </button>
                  <span>{existingRelated.quantity}</span>
                  <button
                    onClick={() => handleIncrement(p.id)}
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
    </div>
  );
};

export default ProductDetails;
