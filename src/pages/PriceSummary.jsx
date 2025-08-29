import React from "react";

const PriceSummary = ({ subtotal, discountAmount, total }) => (
  <div className="price-summary">
    <p>
      Subtotal: <span>₹{subtotal.toFixed(2)}</span>
    </p>
    <p>
      Discount: <span>-₹{discountAmount.toFixed(2)}</span>
    </p>
    <h3>
      Total: <span>₹{total.toFixed(2)}</span>
    </h3>
  </div>
);

export default PriceSummary;
