import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const chooseCategory = (e)=> {
    setSelectedCategory(e.target.value);
  }
  
    const wantedItems = items.filter((item) => 
      (selectedCategory === "All") ? true : item.category === selectedCategory
    );
  
    
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={chooseCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {wantedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
