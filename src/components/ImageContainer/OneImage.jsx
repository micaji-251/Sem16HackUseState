import './ImageContainer.css'
export const OneImage = ({ firstImg }) => {
  return (
    <div className="imgContainer">
      <img src={firstImg} alt="bakery image" />
    </div>
  );
};
