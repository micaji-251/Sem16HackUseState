import "./Footer.css";
import { useState } from "react";
// import stars from "../img/estrellas.png";
import { Form } from "./Form";
import { ClientReview } from "./ClientReview";

// let counter = 0;

export const Footer = () => {
  const [objectReviews, setObjectReviews] = useState([]);

  const AddReviews = (comment) => {
    setObjectReviews([...objectReviews, comment]);
    
  };

  const deleteReview = (ItemDelete) => {
    const FilteredObjects = objectReviews.filter(
      (objectReview) => objectReview.id !== ItemDelete
    );

    setObjectReviews(FilteredObjects);
  };

  return (
    <footer className="Footer">
      <div className="container">
        <h2 className="footerTitle">Custommer Reviews</h2>
        <div className="grid">
          <Form AddReviews={AddReviews} />
          <ClientReview
            objectReviews={objectReviews}
            deleteReview={deleteReview}
          />
        </div>
      </div>
    </footer>
  );
};
