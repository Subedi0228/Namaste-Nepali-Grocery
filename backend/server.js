// Importing Dependencies, Data Schema, and Creating an Express app
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./dataSchema.js");
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Static file serving from the backend
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/Namaste-Nepali-Grocery", {
  dbName: "Namaste-Nepali-Grocery",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Backend Server config
const port = process.env.PORT || 8081;
const host = "localhost";

app.listen(port, () => {
  // backend server URL: http://localhost:8081
  console.log(`App listening at http://%s:%s`, host, port);
});

// How to handle a GET request http://localhost:8081/
app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await Product.find(query);
  console.log(allProducts);
  resp.send(allProducts); // to send to frontend
});

// How to handle a DELETE request http://localhost:8081/delete
app.delete("/delete", async (req, res) => {
  console.log("Delete: ", req.body);
  try {
    const query = { id: req.body.id };
    await Product.deleteOne(query);
    const messageResponse = {
      message: `Product ${req.body.id} deleted correctly`,
    };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while deleting :" + id + " " + err);
  }
});

// to insert a new price http://localhost:8081/put
/*
{
  id: 2, 
  Price: 10.99,
}
*/
app.put("/put", async (req, resp) => {
  try {
    await Product.updateOne({ id: req.body.id }, { $set: req.body });
    const messageResponse = {
      message: `Product ${req.body.id} price updated correctly`,
    };
    resp.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while updating :", req.body.id, err);
    resp.status(500).send({ error: "Internal Server Error" });
  }
});

// To add a new item:
app.post("/insert", async (req, res) => {
  console.log(req.body);
  const p_id = req.body.id;
  const p_name = req.body.Name;
  const p_price = req.body.price;
  const p_image = req.body.image;
  const p_description = req.body.description;
  const p_inventory = req.body.Inventory;
  const formData = new Product({
    id: p_id,
    Name: p_name,
    Price: p_price,
    Image: p_image,
    description: p_description,
    Inventory: p_inventory,
  });
  try {
    await Product.create(formData);
    const messageResponse = { message: `Product ${p_name} added correctly` };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while adding a new product:" + err);
  }
});
