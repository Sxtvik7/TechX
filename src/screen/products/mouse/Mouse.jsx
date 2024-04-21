import React, { useEffect, useState } from "react";
import "./mouse.css";
import axios from "axios";
import { Link } from "react-router-dom";
const img = require("../../../assets/mouse/mouse1.png")

const Mouse = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://techx-backend.onrender.com/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <h2 className="pro_head">Best Selling Mouse</h2>
      <section className="product1">
        {products.map((product) => (
          <div className="pro-container" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="pro">
                <img src={img} alt={product.name} />
                <div className="des">
                  <span>{product.name}</span>
                  <h5>{product.description}</h5>
                  <h4>₹ {product.price}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Mouse;
