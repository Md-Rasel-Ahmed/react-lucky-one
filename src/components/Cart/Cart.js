import {
  faTrash,
  faTrashCan,
  faTrashRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./cart.css";

const Cart = (props) => {
  //   console.log(props);
  const { allCart, randomeChoseBtn, chooseAgianBtn, removeSingleItem } = props;
  let price;
  let name;
  for (const cart of allCart) {
    price = cart.price;
    name = cart.name;
  }
  return (
    <div className="cart">
      <h2 align="center">All Carts</h2>
      {allCart?.map((cart) => {
        return (
          <div key={cart.id} className="cart-product">
            <span className="cart-img">
              <img src={cart.image} alt="" />
            </span>
            <span>{cart.name}</span>
            <button
              onClick={() => removeSingleItem(cart.id)}
              style={{ backgroundColor: "red", color: "#fff" }}
            >
              <FontAwesomeIcon icon={faTrashRestore} />
            </button>
          </div>
        );
      })}
      <button style={{ backgroundColor: "green" }} onClick={randomeChoseBtn}>
        Choose 1 for me
      </button>
      <button
        style={{ backgroundColor: "red", margin: "5px" }}
        onClick={chooseAgianBtn}
      >
        Choose again
      </button>
    </div>
  );
};

export default Cart;
