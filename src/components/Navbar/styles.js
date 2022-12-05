import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";

export const Nav = styled.nav`
  background-color: #1c2833;
  width: 100%;
  height: 4.5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20em 0 12vw;

  @media screen and (max-width: 768px) {
    padding: 0 63vw 0 0;
  }
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

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 7vh;
    right: 0;
    width: 50%;
    height: 93vh;
    background-color: #1c2833;
    flex-direction: column;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s;
  }
`;

export const NavLink = styled(Link)`
  color: #616a6b;
  margin: 0 2em 0 0;
  font-size: 1.1em;
  font-weight: bold;

  &.active {
    color: #ecf0f1;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;

export const NavToggler = styled(BsList)`
  color: #fff;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

export const NavTogglerClose = styled(BsXLg)`
  color: #fff;
  height: 1.4rem;
  width: 1.4rem;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-170%, 125%);
    cursor: pointer;
  }
`;
