import React from 'react'
import Nav from 'react-bootstrap/Nav';



function Tabs() {

  return (
    <div>
        <Nav variant="tabs" defaultActiveKey="/home" className='justify-content-center bg-body-tertiary '>
      <Nav.Item>
        <Nav.Link className='text-secondary' href="/arhitektuur">Arhitektuur</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-secondary' href="/sisearhitektuur" eventKey="link-1">Sisearhitektuur</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link href="/store" eventKey="disabled">
          Pood
        </Nav.Link>
      </Nav.Item> */}
      {/* <Nav.Item>
        <Nav.Link href="/cart" eventKey="disabled">
          Ostukorv {" "}
          {cartSum + "€"}
        </Nav.Link>
        
        
      </Nav.Item> */}
    </Nav>
    </div>
  )
}

export default Tabs