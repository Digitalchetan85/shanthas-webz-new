import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../images/slider/new/image-2.jpg";
import Slide2 from "../images/slider/new/image-1.jpg";
import Slide3 from "../images/slider/new/image-4.jpg";
import Slide4 from "../images/slider/new/image-3.jpg";
import Slide5 from "../images/slider/new/image-5.jpg";

const MainSlider = () => {
  const slides = [
    { id: 1, src: Slide1, alt: "" },
    { id: 2, src: Slide2, alt: "" },
    { id: 3, src: Slide3, alt: "" },
    { id: 4, src: Slide4, alt: "" },
    { id: 5, src: Slide5, alt: "" },
  ];

  return (
    <div>
      <Carousel>
        {slides.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;
