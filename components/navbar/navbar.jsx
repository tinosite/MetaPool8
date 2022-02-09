import React from 'react'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Navbar as Nb } from 'react-bootstrap';
import Link from 'next/link'
import NavLink  from './NavLink'

export default function Navbar() {
  return (
    <Nb expand="lg" >
    <Container fluid>
      <Nb.Toggle aria-controls="navbarScroll" />
      <Nb.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >

          <Nav.Link href="#action1" className="px-2 mx-4 active">Home</Nav.Link>
          <Nav.Link href="#action2" className="px-2 mx-4">Video</Nav.Link>
          <Nav.Link href="#action2" className="px-2 mx-4">Gameplay</Nav.Link>
          <Nav.Link href="#action2" className="px-2 mx-4">Ntfs items</Nav.Link>
          <Nav.Link href="#action2" className="px-2 mx-4">Metapool coin</Nav.Link>
          <Nav.Link href="#action2" className="px-2 mx-4">Team</Nav.Link>
          <Nav.Link href="#action2" className="px-2 mx-4">Roadmap</Nav.Link>

        </Nav>
    </Nb.Collapse>
  </Container>
</Nb>
  )
}
