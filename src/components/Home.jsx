import React from "react";
import Products from "./Products";


const Home = () => {
  return <div>
    <h2 className="heading">Welcome to the redux toolkit store</h2>
    <section>
      <h3>Prodcuts</h3>
      <Products/>
    </section>
  </div>;
};

export default Home;
