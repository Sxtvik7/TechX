import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./prdtdetails.css";
import { addToCart } from "./Cart/cartSlice";
// const img = require("../assets/mouse/mouse1.png")


const PrdtDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
    navigate("/cart")
  };

  // console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section id="prodetails" className="section-p1">
      <div className="single-pro-img">
        <img src={product.image} alt="" />
      </div>

      <div className="single-pro-details">
        <h6>Home / mouse</h6>
        <h4>{product.name}</h4>
        <h2>₹{product.price}</h2>
        <input type="number" value="1" />
        <button onClick={()=> handleAddToCart(product)}>Add To Cart</button>
        <h4>Details</h4>
        <span>{product.details}</span>
      </div>
    </section>
  );
};

export default PrdtDetails;
