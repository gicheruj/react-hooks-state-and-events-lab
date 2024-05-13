import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Function to toggle item in cart
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove from Cart" : "Add Item to Cart"}
      </button>
    </li>
  );
}

export default Item;

