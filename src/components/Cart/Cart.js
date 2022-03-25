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
    <div>
      <h2>Cart</h2>
      {allCart?.map((cart) => {
        return (
          <div className="cart-product">
            <span className="cart-img">
              <img src={cart.image} alt="" />
            </span>
            <span>{cart.name}</span>
            <button>
              <FontAwesomeIcon icon={faTrashRestore} />
            </button>
          </div>
        );
      })}
      <button onClick={props.randomeChoseBtn}>Choose 1 for me</button>
      <button onClick={props.deleteBtn}>Choose again</button>
    </div>
  );
};

export default Cart;
