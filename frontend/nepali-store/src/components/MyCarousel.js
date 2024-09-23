import "../App.css";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/storeImg3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>.</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/storeImg2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>.</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/storeImg1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>.</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
