import React from "react";

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
          <div>
            <span>{cart.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
