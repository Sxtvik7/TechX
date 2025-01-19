import React from "react";
import "./about.css";
const img = require("../../assets/setup2.jpg");

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About us</h1>
          </div>
          <div className="content">
            <h3>TechX – Redefining the Tech Experience.</h3>
            <br />
            <p>
            Welcome to TechX, your ultimate destination for premium computer accessories. Whether 
            you’re a professional, a casual user, or an eSports athlete, we provide the perfect gear 
            to enhance your productivity, creativity, and performance.
            </p>

            <p>
            At TechX, we cater to a diverse audience by offering a wide range of high-quality products, from essential computer peripherals to advanced gaming accessories. For eSports athletes, we ensure you have access to the best tools designed for speed, precision, and durability to help you dominate the competition. For everyday users, we provide reliable, cutting-edge solutions to make your digital life seamless and efficient.
            </p>

            <p>
            Our platform offers a seamless shopping experience with a comprehensive product catalog, a user-friendly interface, and a secure checkout process powered by our advanced payment system.
            </p>
            
            <p>
            Discover the best in technology and performance with TechX – empowering everyone, from everyday users to elite gamers, to achieve more.
            </p>

          </div>
        </div>
        <div className="image-section">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
