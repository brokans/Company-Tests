import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
    
  return (
    <div>
      
      <Navbar style={{ background: 'none' }} expand="lg" className="bg-body-tertiary navigation" >
      <Container fluid>
        <Navbar.Brand href="/">Arhitektuuribüroo Perspektiiv</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/admin">admin</Nav.Link>
            {/* <Nav.Link href="/locations" >
              Asukohad
            </Nav.Link> */}
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfoolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services">Teenused</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contacts">Kontaktid</Nav.Link>
        </Nav.Item>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Navbars