import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav_() {
  return (
    <>
      <Navbar expland="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">South_America</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link href="population"> Population </Nav.Link>
              <Nav.Link href="SA_age"> Age </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Nav_;
