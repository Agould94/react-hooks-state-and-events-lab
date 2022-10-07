import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  function handleClick(){
    setCart(!cart)
  }
  const className = cart ? "in-cart" : " "
  const addButtonText = cart ? "Remove From Cart" : "Add to Cart"
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addButtonText}</button>
    </li>
  );
}

export default Item;
