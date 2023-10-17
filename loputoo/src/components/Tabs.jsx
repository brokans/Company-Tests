import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Tabs() {
  return (
    <div>
        <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/arhitektuur">Arhitektuur</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/sisearhitektuur" eventKey="link-1">Sisearhitektuur</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/store" eventKey="disabled">
          Pood
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cart" eventKey="disabled">
          Ostukorv
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Tabs