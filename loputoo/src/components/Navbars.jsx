import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
    
  return (
    <div>
      <Navbar style={{ background: 'none' }} expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="/">Line Stuudio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/admin">admin</Nav.Link>
            <Nav.Link href="/contacts">Kontaktid</Nav.Link>
            <NavDropdown title="Ettevõttest" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Blogi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Uudised
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Tule tööle
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/locations" >
              Asukohad
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars