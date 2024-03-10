import React from "react";

export const ClientReview = ({reviews,review,setReviews}) => {

    const deleteReview = (ItemDelete) => {
        console.log(ItemDelete);
      };

  return (
    <article className="clientReview" key={review.id}>
      <div className="flex">
        <img src={stars} alt="stars" className="stars" />
        <button
          className="btnX"
          onClick={() => {
            deleteReview(review.id);
          }}
        >
          X
        </button>
      </div>
      <p className="reviewText">{review.reviewText}</p>
      <p className="reviewUser">{review.name}</p>
    </article>
  );
};
