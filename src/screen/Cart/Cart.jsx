import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";
import {
  addToCart,
  cartTotal,
  clearCart,
  decreaseCart,
  removeFromCart,
} from "./cartSlice";
import Checkout from "../../components/paymentButton/PaymentButton";
import emptyCartimg from "../../assets/EmptyCart.png"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // console.log("CART", cart)
  // console.log("CART", cart.cartTotalQuantity)
  // console.log("CART", cart.cartTotalAmount)
  // console.log("CART", cart.cartItems[0].name)

  return (
    <section id="cart" className="section-p1">
      {cart.cartItems.length === 0 ? (
        <>
          {/* {console.log(cart)} */}
          <section>
            <div id="empty-cart-img">
              <img src={emptyCartimg} alt="Empty Cart" />
            </div>
            <div id="cart-empty">
              <span>Your cart is currently empty</span>
              <Link to="/shop">
                <i>
                  <i class="bi bi-arrow-left"></i>
                </i>{" "}
                Start Shopping
              </Link>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* {console.log(cart)} */}
          <h1 className="cart-head"><i>Shopping-Cart</i></h1>
          <div className="cart-container">
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-pro">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p className="desc">{cartItem.description}</p>
                      <button className="remove-item" onClick={() => handleRemoveFromCart(cartItem)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-pro-price">₹{cartItem.price}</div>
                  <div className="cart-pro-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className="cart-pro-total">
                    <p>Total</p>
                    <span>₹{cartItem.price * cartItem.cartQuantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section id="cart-add" className="section-p1">
            <div>
              <button id="clear-cart" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>

            <div id="subtotal">
              <h3>Cart Total</h3>
              <table>
                <tr>
                  <td>Cart Subtotal</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>{cart.cartTotalAmount}</strong>
                  </td>
                </tr>
              </table>
              {/* <button className="checkout">Proceed to checkout </button>  */}
            </div>
          </section>
          <div className="payment-div">
            <div className="payment-container">
                <div className="payment">
                  <Checkout className="payment_btn" cartTotal={Number(cart.cartTotalAmount)}/>
                </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
