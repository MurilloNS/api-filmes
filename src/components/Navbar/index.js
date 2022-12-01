import { Nav, NavMenu, NavLink, LogoImg } from "./styles";

export default function Navbar() {
  return (
    <>
      <Nav>
        <LogoImg src={require("../../assets/warner.png")} alt="logo" />
        <NavMenu>
          <NavLink to="/films">Filmes</NavLink>
          <NavLink to="/series">Séries</NavLink>
          <NavLink to="/people">Pessoas</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
