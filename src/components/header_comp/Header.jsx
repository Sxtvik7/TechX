import React, { useState } from "react";
import {useSelector}  from "react-redux";
import { Link } from "react-router-dom";
import techxLogo from '../../assets/logo-techx.png';

import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <Link to="/">
          <img src={techxLogo} className="logo" alt="" />
        </Link>

        <main>
          <div id="navbar" className={menuOpen ? 'open' : ''}>
            <span className="close" onClick={toggleMenu}><i class="bi bi-x-circle"></i></span>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/shop" onClick={toggleMenu}>
              Shop
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/cart" className="cart" onClick={toggleMenu}>
              <i className="bi bi-cart2"></i>{' '}
              <div className="cartAmount">{cartTotalQuantity}</div>
            </Link>
            <Link to="/profile" onClick={toggleMenu}>
              <i className="bi bi-person-circle"><span> Profile</span></i>
            </Link>
          </div>
        </main>
        <div id="mobile" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </>
  );
}

export default Header;
