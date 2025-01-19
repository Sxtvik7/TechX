import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { clearCart } from "../../screen/Cart/cartSlice";
import "./paymentButton.css";
import toast from "react-hot-toast";

// public key
const stripePromise = loadStripe("pk_test_51QijwrHth9QdVzBq0QfCPULpMWxtC3PoT0it6MIPPSkALSzB2ijlddrqePo26qRqmmCJFNyZubWHJnEFCfyCVQp000aCVgovfp");

function Payment({ cartTotal }) {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Step 1: Call the backend to create a PaymentIntent
    try {
      const response = await fetch("http://localhost:4000/api/v1/order/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: cartTotal * 100 }),
      });

      const { clientSecret } = await response.json();

      // Step 2: Confirm the payment using the clientSecret
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        setError(error.message);
        console.error("Payment error:", error);
      } else {
        toast.success("Payment Successful! 🎉");
        dispatch(clearCart()); 
        console.log("Payment Intent:", paymentIntent);

        navigate("/thank-you"); 
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardElement className="pay-element" />
      <button className="pay-btn" type="submit" disabled={!stripe || loading || cartTotal <= 0}>
        {loading ? "Processing..." : `Pay ₹${cartTotal}`}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default function Checkout({ cartTotal }) {
  console.log("Total", cartTotal);
  return (
    <Elements stripe={stripePromise}>
      <Payment cartTotal={cartTotal} />
    </Elements>
  );
}
