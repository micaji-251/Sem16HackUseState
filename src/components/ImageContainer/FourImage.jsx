import "./ImageContainer.css";

export const FourImage = ({ firstImg, secondImg, ThirdImg, FourthImg }) => {
  return (
    <div className="imgContainer ">
      <div className="grid grid-4">
        <img src={firstImg} alt="bakery image" />
        <img src={secondImg} alt="bakery image" />
        <img src={ThirdImg} alt="bakery image" />
        <img src={FourthImg} alt="bakery image" />
      </div>
    </div>
  );
};
