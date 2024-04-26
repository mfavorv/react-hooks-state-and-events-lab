import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  const className = isInCart ? "in-cart" : " ";
  const toggle = () => {setIsInCart((isInCart) => !isInCart)}

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggle}>
        { isInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
