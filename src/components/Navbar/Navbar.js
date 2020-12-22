import * as React from 'react';
// import Routes from '../../routes/Routes';
// pages 
// import About from '../../pages/About/About';
// import Employers from '../../pages/Employers/Employers';


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Logo from '../../images/logo.png';

import './Navbar.css'

function BNavbar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
         <Container  className="main-nav">
            <Navbar.Brand href="/">
              <img src={Logo} alt="Logo" className="nav-logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto navItems">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/developers">Developers</Nav.Link>
                <Nav.Link href="/employers">Employers</Nav.Link>
                <Nav.Link href="/premium">Premium</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link className="login" href="/login">Login</Nav.Link>
                <Button eventKey={2} href="/sign-up" className="signup-btn">Get Started</Button>
              </Nav>

            </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default BNavbar;
