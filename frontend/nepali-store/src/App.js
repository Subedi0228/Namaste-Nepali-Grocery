import React, { useState } from "react";
import GroceryList from "./components/Grocerylist.js";
import Header from "./components/header.jsx";
import MyCarousel from "./components/MyCarousel.js";
import Footer from "./components/Footer.js";
import Inventory from "./components/Inventory.js";
import Home from "./components/Home.js";

function App() {
  const [isEditingInventory, setIsEditingInventory] = useState(false);

  const toggleEditInventory = () => {
    setIsEditingInventory(!isEditingInventory);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(https://www.state.gov/wp-content/uploads/2019/04/Nepal-2123x1406.jpg)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Add the gradient overlay */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.8) 30%, transparent)",
          pointerEvents: "none", // Allow clicks to go through the overlay
        }}
      ></div>

      <div
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <Header />
        {isEditingInventory ? null : <Home />}
        {isEditingInventory ? null : <MyCarousel />}
        {isEditingInventory ? null : <GroceryList />}
        {isEditingInventory ? <Inventory /> : null}
        <Footer
          toggleEditInventory={toggleEditInventory}
          isEditingInventory={isEditingInventory}
        />
      </div>
    </div>
  );
}

export default App;
