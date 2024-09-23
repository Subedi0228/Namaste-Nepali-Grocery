// Footer.js
import React from "react";
import "../App.css";

const Footer = ({ toggleEditInventory, isEditingInventory }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Namaste Nepali Grocery. All rights reserved.</p>
        <p className="editInvBtn" onClick={toggleEditInventory}>
          {isEditingInventory ? "Back to Main Page" : "Edit Inventory"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
