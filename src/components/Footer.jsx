import React from 'react'
import { Link } from 'react-router-dom'
import techxLogo from '../assets/logo-techx.png'

function Footer() {
  return (
    <>
     <footer class="section-p1">
        <div class="col">

        <img src={techxLogo} class="logo" alt=""/>

            <h4>Contact</h4>
            <p> <strong> Address: </strong> 562 Wellington Road, Street 32, San Franciscok</p>
            <p><strong>Phone : </strong> +01 2222 365 /(+91) 9930783715</p>
            <p><strong> Hours : </strong> 10:00 - 18:00 , Mon - Sat</p>
<br />
            <div class="follow">
                <h4>Follow us</h4>

                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>

            <Link to="/about">About us</Link>
            <Link to="#">Delivery Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="/contact">Contact Us</Link>
            
        </div>

        <div class="col">
            <h4>My Account</h4>
                      
            <Link to="#">Sign In</Link>
            <Link to="#">View Cart</Link>
            <Link to="#">My Wishlist</Link>
            <Link to="#">Track My Order</Link>
            <Link to="#">Help</Link>


        </div>
    </footer>
    </>
  )
}

export default Footer