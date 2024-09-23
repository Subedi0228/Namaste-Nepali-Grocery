import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";

const Inventory = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newPrices, setNewPrices] = useState({});
  const [newItem, setNewItem] = useState({
    id: "",
    Name: "",
    price: "",
    image: "",
    description: "",
    Inventory: "",
  });

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

  useEffect(() => {
    getMethod();
  }, []);

  function handleSetPrice(itemId) {
    const parsedPrice = parseFloat(newPrices[itemId]);
    if (isNaN(parsedPrice)) {
      console.error("Invalid price format");
      return;
    }

    fetch("http://localhost:8081/put", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: itemId, Price: parsedPrice }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Price update completed for ${itemId}`);
        console.log(data);
        getMethod();
      })
      .catch((error) => {
        console.error("Error updating price:", error);
      });
  }

  function handleDeleteItem(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:8081/delete/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        getMethod();
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
      });
  }

  const handleAddItem = () => {
    fetch("http://localhost:8081/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Product added successfully: ${newItem.Name}`);
        console.log(data);
        getMethod();
        setNewItem({
          id: "",
          Name: "",
          price: "",
          image: "",
          description: "",
          Inventory: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div>
      <h1 className="edit-inventory-header">Edit Inventory</h1>
      <div className="grocery-list-edit">
        {groceryItems.map((item) => (
          <Card key={item.id} className="grocery-card">
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
              {/* Input for setting the price */}
              <input
                type="text"
                placeholder="New Price"
                value={newPrices[item.id] || ""}
                onChange={(e) =>
                  setNewPrices({
                    ...newPrices,
                    [item.id]: e.target.value,
                  })
                }
              />
              {/* Set Price button */}
              <Button variant="primary" onClick={() => handleSetPrice(item.id)}>
                Set Price
              </Button>
              {/* Delete button */}
              <Button
                variant="danger"
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="add-item-form">
        <h2>Add New Item</h2>
        <input
          type="text"
          placeholder="ID"
          value={newItem.id}
          onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newItem.Name}
          onChange={(e) => setNewItem({ ...newItem, Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Inventory"
          value={newItem.Inventory}
          onChange={(e) =>
            setNewItem({ ...newItem, Inventory: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <Button variant="success" onClick={handleAddItem}>
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default Inventory;
