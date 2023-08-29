import React from "react";
import { Link } from "react-router-dom";
import techxLogo from '../assets/logo-techx.png'


function Header() {
  return (
    <>
      <nav>
        {/* <h1>Teach X</h1> */}
        <Link to="/"><img src={techxLogo} class="logo" alt=""/></Link>

        <main>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </main>
      </nav>
    </>
  );
}

export default Header;
