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
          <NavLink to="/sign-in" activeStyle>
            Sign In
          </NavLink>
          <NavLink to="/travelessentials" activeStyle>
            Travel Essentials
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
