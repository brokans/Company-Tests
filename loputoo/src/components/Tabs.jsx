import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Tabs() {
  return (
    <div>
        <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Tooted</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Teenused</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
          Uudised
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Tabs