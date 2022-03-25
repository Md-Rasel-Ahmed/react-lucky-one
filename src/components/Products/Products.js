import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./products.css";
const Products = (props) => {
  const { name, id, price, image } = props.product;
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-title">
        <h4>Name :{name}</h4>
        <h4>Price :{price}</h4>
        <button onClick={props.handleClick}>
          Add to Cart
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Products;
