import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Title,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Title>Wanderer.</Title>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/tours" activeStyle>
            Tours
          </NavLink>
          <NavLink to="/guides" activeStyle>
            Guides
          </NavLink>
          <NavLink to="/hotels" activeStyle>
            Hotels
          </NavLink>

          <NavLink to="/travelessentials" activeStyle>
            Travel Essentials
          </NavLink>
          <NavLink to="/login" activeStyle>
            Sign In
          </NavLink>
          <NavLink to="/smart" activeStyle>
            Tour Recomendation
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/register">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
