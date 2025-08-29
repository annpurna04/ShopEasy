import React,{ useEffect } from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { profile, orders } = useSelector((state) => state.user);
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!profile) {
    return <h2 className="no-profile">No profile found. Place an order first!</h2>;
  }

  return (
    <div className="profile-page">
      {/* Profile Card */}
      <div className="profile-card">
        <FaUserCircle className="profile-avatar" size={100} />
        <h2 className="profile-name">{profile.name}</h2>
      </div>

      {/* Orders Section */}
      <div className="orders-section">
        <h2 className="orders-heading">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="no-orders">No orders yet.</p>
        ) : (
          <div className="orders-grid">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                {/* Top row → Order ID */}
                <h3 className="order-id">Order #{order.id}</h3>

                {/* 2nd row → Date & Total */}
                <div className="order-row">
                  <p className="order-date">
                    <strong>Date:</strong>{" "}
                    {order.date || new Date().toLocaleDateString()}
                  </p>
                  <p className="order-total">
                    <strong>Total:</strong> ₹ {order.total.toFixed(2)}
                  </p>
                </div>  
                {/* Cart Summary */}
                <div className="cart-summary">
                  <h4>Cart Summary</h4>
                  <div className="cart-header-sum-row">
                    <span>Image</span>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Qty</span>
                    <span>Subtotal</span>
                  </div>
                  {order.items.map((item) => (
                    <div key={item.id} className="cart-sum-row">
                      <img
                        src={Array.isArray(item.image) ? item.image[0] : item.image}
                        alt={item.name}
                        className="cart-sum-img"
                      />
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                      <span>{item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                 {/* 3rd row → Payment & Address */}
                <div className="order-row">
                  <p className="order-payment">
                    <strong>Payment:</strong>{" "}
                    {order.paymentStatus || "Success"}
                  </p>
                  <p className="order-address">
                    <strong>Address:</strong> {profile.address}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
