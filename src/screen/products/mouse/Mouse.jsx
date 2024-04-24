import React, { useEffect, useState } from "react";
import "./mouse.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import image from "../../../assets/mouse/mouse3.png";

const Mouse = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data[2].image);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loading-spinner">
          <ClipLoader color={"#123abc"} loading={true} size={50} />
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="pro_head">Best Selling Mouse</h2>
      <section className="product1">
        {products.map((product) => (
          <div className="pro-container" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="pro">
                <img src={product.image} alt={product.name} />
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
