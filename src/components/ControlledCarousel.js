import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import aboutMe1 from "../img/aboutMe1.PNG";
import aboutMe2 from "../img/aboutMe2.PNG";
import aboutMe3 from "../img/aboutMe3.PNG";

import "../css/CookiesAndPages.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
      <Carousel.Item>
        <img className="d-block w-100" src={aboutMe1} alt="First slide" />
        <Carousel.Caption>
          <h3>Nulla vitae</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={aboutMe2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Nulla vitae</h3>
          <p className="ms-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={aboutMe3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Nulla vitae</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
