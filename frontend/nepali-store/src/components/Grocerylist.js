import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  const getMethod = () => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGroceryItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div id="groceryList">
      <div className="invButton" onClick={getMethod}>
        View Inventory
      </div>
      <div className="grocery-list">
        {groceryItems.map((item) => (
          <Card key={item.Name} className="grocery-card">
            <Card.Img
              className="cardImg"
              variant="top"
              src={item.Image}
              alt={item.Name}
            />
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              {item.Price !== undefined && (
                <Card.Text>Price: ${item.Price.toFixed(2)}</Card.Text>
              )}
              <Card.Text>{item.Description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
