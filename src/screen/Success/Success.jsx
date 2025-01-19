import React from "react";
import "./success.css";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Success = () => {
  return (
    <>
      <div className="thankyou-main">
        <div className="thankyou-container">
          <div>
            <p className="thankyou-text">Thank You for Your Purchase!</p>
          </div>
          <div className="thankyou-subtext-container">
            
              <h5 className="thankyou-subtext">🎉 Your order has been successfully placed! 🎉</h5> 
              <p className="thankyou-subtext">
                We appreciate your trust in us and are thrilled to have you as a
                valued customer. Your payment has been processed, and we’re now
                preparing your order for shipment.
              </p>
          </div>
        </div>
        <div id="cart-empty">
              <Link to="/shop">
                <i>
                  <i class="bi bi-arrow-left"></i>
                </i>{" "}
                Continue Shopping
              </Link>
            </div>
      </div>
    </>
  );
};

export default Success;
