export const NavBar = () => {
  return (
    <nav className="flex flex--between navBar NavBarlogo">
      <p>Bakery</p>
      <ul className="flex flex--around NavBarList ">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>RESERVA</li>
        <li>PANADERIA</li>
      </ul>
    </nav>
  );
};
