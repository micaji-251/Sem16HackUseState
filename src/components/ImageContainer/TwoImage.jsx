import "./ImageContainer.css";

export const TwoImage = ({ firstImg, secondImg }) => {
  return (
    <div className="imgContainer">
      <div className="grid grid-2">
        <img src={firstImg} alt="bakery image" />
        <img src={secondImg} alt="bakery image" />
      </div>
    </div>
  );
};
