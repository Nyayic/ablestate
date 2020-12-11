import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavImage,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
            <NavImage/>
              Ablestate
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>

              <NavItem>
                <NavLinks to='/about' onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/developers' onClick={closeMobileMenu}>
                  Developers
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/employers' onClick={closeMobileMenu}>
                  Employers
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/premium' onClick={closeMobileMenu}>
                  Premium
                </NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks to='/contact-us' onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/news' onClick={closeMobileMenu}>
                  News
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/login' onClick={closeMobileMenu}>
                  Login
                </NavLinks>
              </NavItem>
              
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>GET STARTED</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      GET STARTED
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
