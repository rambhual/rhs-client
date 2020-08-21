import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Cotecna Inspection</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
