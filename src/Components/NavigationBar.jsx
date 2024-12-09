import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/BrightCrestSolutions_Logo_Main.png';

const NavigationBar = () => {
  return (
    <>
      <div>
        <Navbar expand="lg" className="py-3 fixed-top">
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Brightcrestlogo"
              width="150" // Adjust width as needed
              height="auto"
              style={{ marginLeft: "15px" }}
            />

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="/solution" className="text-dark">Solution</Nav.Link>
              <Nav.Link href="/services" className="text-dark">Services</Nav.Link>
              <Nav.Link href="/about" className="text-dark">About</Nav.Link>
              <Nav.Link href="/client" className="text-dark">Clients</Nav.Link>

              <Nav.Link style={{ marginRight: "12px" }} href="/contact" className="text-dark">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>

  );
};

export default NavigationBar;