import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCarts] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  //   Added product button
  const addToCart = (product, id) => {
    let cartExitPd = cart.find((cartId) => cartId.id === id);
    if (cartExitPd) {
      alert("Already this item added!");
      return false;
    }
    if (cart.length > 3) {
      alert("Sorry!! Already fouth items added!");
      return false;
    }
    setCarts([...cart, product]);
  };
  //   Remove full item from the cart component
  const removeFullCart = () => {
    setCarts([]);
  };
  //   randome selected products
  const randomeSelect = () => {
    let emty = [];
    if (cart.length > 1) {
      let randome = cart[Math.floor(Math.random() * cart.length)];
      alert(randome.name + " is much better for your health");
      emty.push(randome);
      setCarts(emty);
    }
  };
  //   remove single item from the cart
  const removeSingleItem = (id) => {
    let filterItem = cart.filter((cart) => cart.id !== id);
    setCarts(filterItem);
  };
  return (
    <div className="wraper">
      <div className="card-wraper">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            handleClick={() => addToCart(product, product.id)}
          ></Products>
        ))}
      </div>
      <Cart
        className="cart-component"
        allCart={cart}
        chooseAgianBtn={removeFullCart}
        randomeChoseBtn={randomeSelect}
        removeSingleItem={removeSingleItem}
      ></Cart>
    </div>
  );
};

export default Shop;
