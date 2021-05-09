import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">James Armbrust</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="portfolio-link" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="about-link" href="#about">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">dsdfsdfsdf</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="icon-links">
            <Nav.Link href="https://github.com/jarmbrust"><AiFillGithub /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jamesarmbrust">
              <AiFillLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
