import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="content" id="homeID">
      <div className="left-side">
        <h1>Namaste Nepali Store</h1>
        <p>
          At Namaste Nepali Store, we take pride in offering a curated selection
          of premium spices, lentils, teas, and other essential ingredients that
          are the backbone of Nepali cuisine. Each product on our shelves
          reflects the dedication to quality and authenticity that defines the
          rich culinary heritage of Nepal.
        </p>
      </div>
      <div className="right-side">
        <h2>Website built by:</h2>
        <ul>
          <li>
            <a href="csubedi1@iastate.edu">Chiran Subedi</a>
          </li>
          <li>
            <a href="husseinbaderdine55@gmail.com">Hussein Badderine</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
