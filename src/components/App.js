import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setLDMode] = useState(false);
  const appClass = isLight ? "App dark" : "App light";
  function clickHandler(e) {
    console.log("clickHandler called");
    setLDMode(!isLight);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickHandler}>
          {isLight ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
