import { useState } from "react";
import {
  Nav,
  NavMenu,
  NavLink,
  LogoImg,
  NavToggler,
  NavTogglerClose,
} from "./styles";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const showActive = () => setActive(!active);

  return (
    <Nav>
      <LogoImg src={require("../../assets/warner.png")} alt="logo" />
      <NavMenu show={active}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/films">Filmes</NavLink>
        <NavLink to="/series">Séries</NavLink>
        <NavLink to="/people">Pessoas</NavLink>
      </NavMenu>
      {!active ? (
        <NavToggler onClick={showActive} />
      ) : (
        <NavTogglerClose onClick={showActive} />
      )}
    </Nav>
  );
}
