import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { FaUserCircle } from 'react-icons/fa'; 

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
       navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <h1 className="logo-text">ShopEasy</h1>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Products
        </NavLink>

        <div className="right-nav-group">
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Cart{cartItems.length > 0 && ` (${cartItems.length})`}          
          </NavLink>

           {auth.isAuthenticated && (
            <div className="avatar-container">
              <FaUserCircle
                className="profile-icon"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />
              {dropdownOpen && (
                <div className="dropdown-card">
                  <p>{auth.name || 'User'}</p>
                  <button className="profile-btn" onClick={handleProfile}>
                    Profile
                  </button>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {!auth.isAuthenticated && (
            <>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Login
              </NavLink>
             
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
