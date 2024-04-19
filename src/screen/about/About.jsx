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
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              possimus ad odit voluptatem reprehenderit molestias? Ullam id,
              optio iure libero repellat dolorem, a repellendus possimus quos
              hic aliquam ut ad eligendi facilis repudiandae corrupti nihil
              deserunt? Est, quae aperiam magnam eius dignissimos ullam non
              recusandae eveniet unde nobis provident explicabo?
            </p>
            {/* <div className="button">
                    <button id="read-more">Read More</button>
                </div> */}
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
