import React, { useState, useEffect } from "react";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  const getMethod = () => {
    fetch("http://localhost:19999/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGroceryItems(data.products || []); // Use an empty array if data.products is undefined
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getMethod();
  }, []);

  const loadGroceryItems = () => {
    return groceryItems.map((item) => (
      <div key={item.Name}>
        <h3>{item.Name}</h3>
        {item.Price !== undefined && <p>Price: ${item.Price.toFixed(2)}</p>}
        <p>{item.Description}</p>
        <img
          src={item.Image}
          alt={item.Name}
          style={{ width: "200px", height: "200px" }}
        />
        <br />
        <br />
      </div>
    ));
  };

  return (
    <div>
      <h1>Nepali Grocery Store</h1>
      <button onClick={getMethod}>Fetch Grocery Items</button>
      <h1>Output:</h1>
      <div>{loadGroceryItems()}</div>
    </div>
  );
};

export default GroceryList;
