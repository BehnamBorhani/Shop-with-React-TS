import React, { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const context = useContext(CartContext);

  return (
    <>
      {context.userCart.length ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={context.removeAllProduct}>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {context.userCart.map((product) => (
              <div className="card">
                <img src={product.image} alt={product.title} />
                <main>
                  <p>{product.title.slice(0, 20)}...</p>
                  <div className="card-details">
                    <div>
                      {Array(Math.ceil(product.rating.rate))
                        .fill(0)
                        .map(() => (
                          <AiFillStar
                            style={{ color: "orange" }}
                            key={crypto.randomUUID()}
                          />
                        ))}
                      {Array(5 - Math.ceil(product.rating.rate))
                        .fill(0)
                        .map(() => (
                          <AiOutlineStar
                            style={{ color: "orange" }}
                            key={crypto.randomUUID()}
                          />
                        ))}
                    </div>
                    <p>${product.price}</p>
                  </div>
                  <div className="product-count">
                    <p>Count: {product.count}</p>
                  </div>
                  <button onClick={() => context.removeProduct(product.id)}>
                    Remove From Basket
                  </button>
                </main>
              </div>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
