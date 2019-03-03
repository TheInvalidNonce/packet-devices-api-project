import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Packet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/devices">Index</Nav.Link>
            <Nav.Link href="/devices/new">Add Device</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
