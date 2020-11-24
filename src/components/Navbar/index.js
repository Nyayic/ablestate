import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo, 
  MobileIcon, 
  NavItems,
  NavMenu,
  NavLinks, 
  NavBtn, NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to="/">Ablestate</NavLogo>
          
          <MobileIcon>
            <FaBars/>
          </MobileIcon>

          <NavMenu>

            <NavItems>
            <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="developers">Developers</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="employers">Employers</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="contact-us">Contact Us</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="news">News</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="login">Login</NavLinks>
            </NavItems>
            
          </NavMenu>

          <NavBtnLink to="/get-started">Get Started</NavBtnLink>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;