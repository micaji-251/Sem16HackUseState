import React from "react";
import "./Footer.css";
// import stars from "../img/estrellas.png";
import { Reviews } from "./Reviews";

export const ClientReview = ({ objectReviews, deleteReview }) => {
  

  return (
    <div className="reviewsContainer grid-3">
      {objectReviews &&
        objectReviews.map((objectReview) => (
          <Reviews
            review={objectReview}
            key={objectReview.id}
            deleteReview={deleteReview}
          />
        ))}
    </div>
  );
};
