
import "./Separator.css";
export const Separator = ({separatorImage,title,SubTitle}) => {
  const myBackground = {
    backgroundImage: `url(${separatorImage})`,
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="Separator" style={myBackground}>
      <div className="separatorText container flex">
        <h2 className="sectionTitle">{title}</h2>
        <h3 className="sectionSubTitle">{SubTitle}</h3>
      </div>
    </div>
  );
};
