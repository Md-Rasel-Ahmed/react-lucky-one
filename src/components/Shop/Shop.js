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
  const addToCart = (product, id) => {
    let cartExitPd = cart.find((cartId) => cartId.id === id);
    if (cartExitPd) {
      alert("Already this item added!");
      return false;
    }
    if (cart.length > 3) {
      alert("Already fouth items added!");
      return false;
    }
    setCarts([...cart, product]);
  };
  //   delete items
  const deleteCart = () => {
    console.log("done");
    setCarts([]);
    setProducts([...products]);
  };
  //   randome selected products
  const randomeSelect = () => {
    let emty = [];
    if (cart.length > 1) {
      let randome = cart[Math.floor(Math.random() * cart.length)];
      alert(randome.name + " is much better for your health");
      emty.push(randome);
    }
    setCarts(emty);
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
        deleteBtn={deleteCart}
        randomeChoseBtn={randomeSelect}
      ></Cart>
    </div>
  );
};

export default Shop;
