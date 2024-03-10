import "./Footer.css";

import { useState } from "react";
import stars from "../img/estrellas.png";

let counter = 0;

export const Footer = () => {
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const reviewText = event.target.elements.reviewText.value;
    counter = counter + 1;

    setReviews([
      ...reviews,
      { name: name, reviewText: reviewText, id: counter },
    ]);

    event.target.elements.name.value = "";
    event.target.elements.reviewText.value = "";
  };

  const deleteReview = (ItemDelete) => {
    console.log(ItemDelete);
    setReviews(
      reviews.filter((reviewToFilter) => reviewToFilter.id !== ItemDelete)
    );
  };

  return (
    <footer className="Footer">
      <div className="container">
        <h2 className="footerTitle">Custommer Reviews</h2>
        <div className="grid">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Your name..." id="name" />
            </div>
            <div>
              <input type="text" placeholder="Reviews..." id="reviewText" />
            </div>
            <input type="submit" value={"SEND"} className="btnSubmit" />
          </form>


          <div className="reviewsContainer grid-3">
            {reviews &&
              reviews.map((review) => (
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

                // <ClientReview
                //   reviews={reviews}
                //   key={review.id}
                //   review={review}
                //   setReviews={setReviews}
                // />
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
