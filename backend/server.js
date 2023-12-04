const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = "19999";
const host = "localhost";

// Enable CORS manually
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const url = "mongodb://127.0.0.1:27017";
const dbName = "Namaste-Nepali-Grocery";
const client = new MongoClient(url, { useUnifiedTopology: true });
let db;

client
  .connect()
  .then(() => {
    console.log("Node connected successfully to MongoDB");
    db = client.db(dbName);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});

app.get("/api/products", async (req, res) => {
  try {
    const query = {};
    const results = await db
      .collection("Products") // Adjust based on your actual collection name
      .find(query)
      .limit(100)
      .toArray();

    console.log(results);

    res.status(200).json({ success: true, products: results });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
