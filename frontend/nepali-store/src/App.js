import React from "react";
import GroceryList from "./components/Grocerylist.js";
import Header from "./components/header.jsx";
import Carousel from "./components/Carousel.js";

function App() {
  const backgroundStyles = {
    backgroundImage: 'url("Himalayas.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(/images/Himalayas.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Carousel />
      <GroceryList />
    </div>
  );
}

export default App;
