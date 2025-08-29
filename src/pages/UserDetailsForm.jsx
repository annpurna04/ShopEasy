import React from "react";

const UserDetailsForm = ({ formData, errors, handleChange, refsMap }) => (
  <div className="cart-bottom">
    <h2>User Details</h2>
    <div className="form-step">
      {/* Full Name */}
      <input
        ref={refsMap?.name}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      {/* Address */}
      <input
        ref={refsMap?.address}
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Shipping Address"
        required
      />
      {errors.address && <p className="error-text">{errors.address}</p>}

      {/* Payment Method */}
      <select
        ref={refsMap?.paymentMethod}
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
      >
        <option value="cod">Cash on Delivery</option>
        <option value="card">Credit/Debit Card</option>
        <option value="upi">UPI</option>
      </select>
      {errors.paymentMethod && (
        <p className="error-text">{errors.paymentMethod}</p>
      )}
    </div>
  </div>
);

export default UserDetailsForm;
