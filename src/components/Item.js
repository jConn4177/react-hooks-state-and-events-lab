import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);
  const appClass = isInCart ? "in-cart" : "";
  const cartBtnHandler = (e) => {
    console.log("cartBtnHandler called", e);
    setInCart(!isInCart);
  };

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartBtnHandler} className="add">
        {isInCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
