import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import useWindowDimensions from "./WindowDimension";
import reviewsWithStars from "../utils/reviewsWithStars.json";
import "../css/Reviews.css";
function mappingReviews() {
  return reviewsWithStars.map((item, i) => {
    return (
      <div key={i} className="reviews-cards">
        <div className="text-center reviews-content">
          <p className="text-center">
            {item.stars}
            <br />
            {item.comment}
          </p>
        </div>
      </div>
    );
  });
}

function Reviews() {
  const { width } = useWindowDimensions();

  return (
    <div className="Reviews">
      <div className="container">
        <hr className="reviews-line" />
        <h3 className="reviews-title">Opiniones...</h3>
        {width > 765 ? (
          <Carousel show={3} swiping={true} transition={3} responsive={true}>
            {mappingReviews()}
          </Carousel>
        ) : (
          <Carousel swiping={true} transition={2.5} responsive={true}>
            {mappingReviews()}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Reviews;
