import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, setFilter] = useState("");

  const filteredItems = filter
    ? items.filter((item) => {
        return item.category === filter;
      })
    : items;
  console.log(filteredItems);

  const changeHandler = (e) => {
    console.log("filter changed", e.target.value);
    setFilter(e.target.value);
  };
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={filter} onChange={changeHandler} name="filter">
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
