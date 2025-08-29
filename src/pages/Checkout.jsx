import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { saveProfile, addOrder } from "../redux/userSlice";
import { validateForm } from "../redux/checkoutUtils";

import CartSummary from "./CartSummary";
import UserDetailsForm from "./UserDetailsForm";
import DiscountSection from "./DiscountSection";
import PriceSummary from "./PriceSummary";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items || []);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "cod",
    discountCode: "",
  });

  const [errors, setErrors] = useState({});
  const [discount, setDiscount] = useState(0);

  // create refs
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const paymentMethodRef = useRef(null);


  const fieldRefs = {
    name: nameRef,
    address: addressRef,
    payment:paymentMethodRef,
  };

  // update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // apply discount
  const applyDiscount = () => {
    if (formData.discountCode.trim().toUpperCase() === "SAVE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert("Invalid Discount Code");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const handleSubmit = () => {
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      const firstErrorField = Object.keys(newErrors)[0];
      if (fieldRefs[firstErrorField] && fieldRefs[firstErrorField].current) {
        fieldRefs[firstErrorField].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        fieldRefs[firstErrorField].current.focus();
      }

      return;
    }

    const order = {
      id: Date.now(),
      items: cartItems,
      total,
    };

    dispatch(
      saveProfile({
        name: formData.name,
        address: formData.address,
        paymentMethod: formData.paymentMethod,
      })
    );

    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate("/profile");
  };

  return (
    <div className="checkout-layout">
      {/* LEFT COLUMN */}
      <div className="checkout-left">
        <CartSummary cartItems={cartItems} />

        <UserDetailsForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          refsMap={fieldRefs} 
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="checkout-right">
        <div className="checkout-card">
          <h2 className="checkout-title">Shipping Info</h2>

          <DiscountSection
            discountCode={formData.discountCode}
            handleChange={handleChange}
            applyDiscount={applyDiscount}
          />

          <PriceSummary
            subtotal={subtotal}
            discountAmount={discountAmount}
            total={total}
          />

          <div className="button-group">
            <button className="place-order-btn" onClick={handleSubmit}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
