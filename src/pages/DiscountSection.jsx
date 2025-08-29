import React from "react";

const DiscountSection = ({ discountCode, handleChange, applyDiscount }) => (
  <div className="discount-section">
    <input
      type="text"
      name="discountCode"
      placeholder="Enter Discount Code"
      value={discountCode}
      onChange={handleChange}
    />
    <button onClick={applyDiscount}>Apply</button>
  </div>
);

export default DiscountSection;
