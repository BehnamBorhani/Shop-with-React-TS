import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../Products.types";
import { CartContext } from "../../context/cartContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image, price, rating }: Product) => {
   const navigate = useNavigate();
  const context = useContext(CartContext);

  const addToBasketHandler = () => {
    context.addProduct(id);
    swal({
      title: "Add product successfully",
      icon: "success",
      buttons: ["Ok", "Go to Basket"],
      timer: 3000,
    }).then((result) => {
      if (result) {
        navigate("/cart");
      }
    });
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <main>
        <p>{title.slice(0, 20)}...</p>
        <div className="card-details">
          <div>
            {Array(Math.ceil(rating.rate))
              .fill(0)
              .map(() => (
                <AiFillStar
                  style={{ color: "orange" }}
                  key={crypto.randomUUID()}
                />
              ))}
            {Array(5 - Math.ceil(rating.rate))
              .fill(0)
              .map(() => (
                <AiOutlineStar
                  style={{ color: "orange" }}
                  key={crypto.randomUUID()}
                />
              ))}
          </div>
          <p>${price}</p>
        </div>
        <button onClick={addToBasketHandler}>Add to Basket</button>
      </main>
    </div>
  );
};

export default Card;
