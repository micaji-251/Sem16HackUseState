import { Header } from "./components/Header";
import { TextSection } from "./components/TextSection";
import { Separator } from "./components/Separator";
import { OneImage } from "./components/ImageContainer/OneImage";
import { FourImage } from "./components/ImageContainer/FourImage";
import { TwoImage } from "./components/ImageContainer/TwoImage";

import firstSectionImage from "./components/img/story-img.jpg";
import square1 from "./components/img/square-1.jpg";
import square2 from "./components/img/square-2.jpg";
import square3 from "./components/img/square-3.jpg";
import square4 from "./components/img/square-4.jpg";
import bakersDelight1 from "./components/img/bakers-delight-1.jpg";
import bakersDelight2 from "./components/img/bakers-delight-2.jpg";
import separatorImage1 from "./components/img/tasteful-recipes.jpg";
import separatorImage2 from "./components/img/tasty.jpg";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />

      <section className="grid container">
        <TextSection
          title={"Discover"}
          SecondTitle={"OUR STORY"}
          linkText={"LEARN MORE"}
        />
        <OneImage firstImg={firstSectionImage} />
      </section>

      <Separator
        separatorImage={separatorImage1}
        title={"Always"}
        SubTitle={"FRESH"}
      />

      <section className="grid container">
        <FourImage
          firstImg={square1}
          secondImg={square2}
          ThirdImg={square3}
          FourthImg={square4}
        />
        <TextSection
          title={"Explore"}
          SecondTitle={"MENU"}
          linkText={"SEE FULL MENU"}
        />
      </section>

      <Separator
        separatorImage={separatorImage2}
        title={"Everything"}
        SubTitle={"TASTY"}
      />

      <section className="grid container">
        <TextSection
          title={"Baker's"}
          SecondTitle={"DELIGHT"}
          linkText={"MAKE A RESERVATION"}
        />
        <TwoImage firstImg={bakersDelight1} secondImg={bakersDelight2} />
      </section>

      <Footer/>
    </>
  );
};
