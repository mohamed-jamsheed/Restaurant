import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt="logo"
          src="https://w7.pngwing.com/pngs/126/52/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        &nbsp; Tasty Bites
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header