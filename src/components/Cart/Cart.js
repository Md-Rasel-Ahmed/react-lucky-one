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
  const { allCart } = props;
  let price;
  let name;
  for (const cart of allCart) {
    price = cart.price;
    name = cart.name;
  }
  return (
    <div className="cart-wraper">
      <h2 align="center">All Carts</h2>
      {allCart?.map((cart) => {
        return (
          <div className="cart-product">
            <span className="cart-img">
              <img src={cart.image} alt="" />
            </span>
            <span>{cart.name}</span>
            <button style={{ backgroundColor: "red", color: "#fff" }}>
              <FontAwesomeIcon icon={faTrashRestore} />
            </button>
          </div>
        );
      })}
      <button
        style={{ backgroundColor: "green" }}
        onClick={props.randomeChoseBtn}
      >
        Choose 1 for me
      </button>
      <button
        style={{ backgroundColor: "red", margin: "5px" }}
        onClick={props.deleteBtn}
      >
        Choose again
      </button>
    </div>
  );
};

export default Cart;
