import stars from "../img/estrellas.png";
import "./Footer.css";

export const Reviews = ({ review, deleteReview }) => {
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
      <p className="reviewText">{review.review}</p>
      <p className="reviewUser">{review.name}</p>
    </article>
  );
};
