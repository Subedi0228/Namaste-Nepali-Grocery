import { useState } from "react";
import "../App.css";

const imgArr = [
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
  "https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff",
];

export const Carousel = () => {
  const [img, setImg] = useState(0);

  const prevImg = () => {
    setImg((prevImg) => (prevImg === 0 ? imgArr.length - 1 : prevImg - 1));
  };

  const nextImg = () => {
    setImg((prevImg) => (prevImg === imgArr.length - 1 ? 0 : prevImg + 1));
  };

  return (
    <div className="slider">
      <button onClick={prevImg} className="left-arrow">
        &lt; {/* Use HTML entity for < */}
      </button>
      <div className="slide">
        {imgArr.map((image, index) => (
          <img
            className={`carouselImg ${img === index ? "active" : ""}`}
            src={image}
            alt={image}
            key={index}
          />
        ))}
      </div>
      <button onClick={nextImg} className="right-arrow">
        &gt; {/* Use HTML entity for > */}
      </button>
    </div>
  );
};

export default Carousel;
