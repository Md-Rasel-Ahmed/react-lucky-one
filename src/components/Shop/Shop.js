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
  const addToCart = (product) => {
    setCarts([...cart, product]);
  };
  return (
    <div className="wraper">
      <div className="card-wraper">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            handleClick={() => addToCart(product)}
          ></Products>
        ))}
      </div>
      <Cart allCart={cart}></Cart>
    </div>
  );
};

export default Shop;
