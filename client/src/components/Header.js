import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink
} from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Habitual</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
            <NavLink to="/habits">Habits</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to="/signin">Login</NavLink>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Header;
