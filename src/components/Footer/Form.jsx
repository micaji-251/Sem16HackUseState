import { useState } from "react";
import "./Footer.css";
// let counter = 0;

export const Form = ({ AddReviews }) => {
  // const [extra, setExtra] = useState({
  //   name: "",
  //   review: "",
  // });
  const [inputName, setInputName] = useState("");
  const [inputReviews, setInputReviews] = useState("");

  // const handleChange = (e) => {
  //   setExtra({
  //     ...extra,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(e.target.name);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    const objectReview = {
      name: inputName,
      review: inputReviews,
      id: new Date().getMilliseconds(),
    };

    AddReviews(objectReview);

    setInputName("");
    setInputReviews("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Your name..."
          id="name"
          value={inputName || ""}
          name="user"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setInputReviews(e.target.value)}
          placeholder="Reviews..."
          id="reviewText"
          value={inputReviews || ""}
          name="review"
        />
      </div>
      <input type="submit" value={"SEND"} className="btnSubmit" />
    </form>
  );
};
