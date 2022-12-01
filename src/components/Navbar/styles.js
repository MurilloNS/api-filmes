import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #1c2833;
  width: 100%;
  height: 4.5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20em 0 20em;
`;

export const LogoImg = styled.img`
    height: 4em;
    width: 4em;
`;

export const NavMenu = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color:   #616a6b;
  margin: 0 2em 0 0;
  font-size: 1.1em;
  font-weight: bold;

  &.active{
    color: #ecf0f1;
  }
`;
