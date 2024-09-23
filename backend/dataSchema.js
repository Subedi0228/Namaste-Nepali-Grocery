const mongoose = require("mongoose");
const ReactFromDataSchema = new mongoose.Schema(
  {
    id: { type: Number },
    Name: { type: String },
    Price: { type: Number },
    Image: { type: String },
    Description: { type: String },
    Inventory: { type: Number },
  },
  { collection: "Products" }
);

const Product = mongoose.model("Product", ReactFromDataSchema);
module.exports = Product;
