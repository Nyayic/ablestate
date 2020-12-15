import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

//import { Navbar, Nav, Button } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import './Navbar.css';

function BNavbar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="main-nav">
         <Container fluid>
            <Navbar.Brand href="/">Ablestate</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto navItems">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#developers">Developers</Nav.Link>
                <Nav.Link href="#employers">Employers</Nav.Link>
                <Nav.Link href="#premium">Premium</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>

              </Nav>
              <Nav>
                <Nav.Link className="login" href="/login">Login</Nav.Link>
                <Button eventKey={2} href="/signup" className="signup-btn">
                  <p>Get Started</p>
                </Button>
              </Nav>
            </Navbar.Collapse>
        </Containter>
      </Navbar>

    );
}
export default BNavbar;
