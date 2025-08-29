import React from 'react';
import brand1 from "../assets/br-1.png";
import brand2 from "../assets/br-2.png";
import brand3 from "../assets/br-3.png";
import brand4 from "../assets/br-4.png";
import brand5 from "../assets/br-5.png";

const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="partners-section"
    >
      <div className="partners-container">
        <div className="partners-grid">
          <img src={brand1} alt="brand" className="partner-logo" />
          <img src={brand2} alt="brand" className="partner-logo" />
          <img src={brand3} alt="brand" className="partner-logo" />
          <img src={brand4} alt="brand" className="partner-logo" />
          <img src={brand5} alt="brand" className="partner-logo" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
