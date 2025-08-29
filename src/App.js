import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import PrivateRoute from "./components/PrivateRoute";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Partners from "./components/Partners"
import Contact from "./components/Contact"

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <ProductList />
              <Services />
              <Partners />
              <Contact />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
         <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute> }/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
