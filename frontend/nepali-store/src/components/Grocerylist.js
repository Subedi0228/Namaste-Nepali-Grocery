import React, { useState, useEffect } from "react";
import axios from "axios";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API endpoint
    axios
      .get("http://localhost:19999/api/products")
      .then((response) => {
        setGroceryItems(response.data.products || []); // Use an empty array if response.data.products is undefined
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Nepali Grocery Store</h1>
      <ul>
        {groceryItems &&
          groceryItems.map((item) => (
            <li key={item.Name}>
              <img
                src={item.Image}
                alt={item.Name}
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{item.Name}</h3>
              <p>Price: ${item.Price.toFixed(2)}</p>
              <p>{item.Description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GroceryList;
