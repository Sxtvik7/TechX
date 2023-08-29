import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (<>
  <section id="hero">
        <h2>Super value deals</h2>
        <h1>On all Computer Accessories </h1>
        <p>save more with coupons upto 70% off!</p>
        <button><Link to="/shop">Shop Now</Link></button>

    </section>
  </>
  )
}

export default Home