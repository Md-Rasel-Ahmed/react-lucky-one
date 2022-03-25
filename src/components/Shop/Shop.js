import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const addToCart = () => {
    console.log("done");
  };
  return (
    <div className="wraper">
      <div className="card-wraper">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            handleClick={addToCart}
          ></Products>
        ))}
      </div>
      <Cart></Cart>
    </div>
  );
};

export default Shop;
