import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Card from "../../components/Card/Card";

const Home = () => {
  const context = useContext(CartContext);
  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        {context.shop.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </main>
    </>
  );
};

export default Home;
