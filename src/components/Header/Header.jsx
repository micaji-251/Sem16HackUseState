import { NavBar } from "./NavBar";
import "../Header";

export const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <NavBar />
        <div className="flex-column">
          <h1 className="headerMainTitle">LET'S TASTE PERFECTION</h1>
          <button className="btnOrder">ORDER NOW</button>
        </div>
      </div>
    </header>
  );
};
