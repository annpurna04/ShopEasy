import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for everything awesome. Shop smart, live better.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: support@shopeasy.com</p>
          <p>Phone: +91 123456789</p>
          <p>Location: Gurugram, Haryana</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
