import React from 'react'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Navbar as Nb } from 'react-bootstrap';
import Link from 'next/link'
import NavLink  from './NavLink'

export default function Navbar() {
  return (
    <Nb expand="md" >
    <Container fluid>
      <Nb.Toggle aria-controls="navbarScroll" />
      <Nb.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-0 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >

          <Nav.Link href="#action1" className="active">Home</Nav.Link>
          <Nav.Link href="#action2" className="">Video</Nav.Link>
          <Nav.Link href="#action2" className="">Gameplay</Nav.Link>
          <Nav.Link href="#action2" className="">Ntfs items</Nav.Link>
          <Nav.Link href="#action2" className="">Metapool coin</Nav.Link>
          <Nav.Link href="#action2" className="">Team</Nav.Link>
          <Nav.Link href="#action2" className="">Roadmap</Nav.Link>

        </Nav>
    </Nb.Collapse>
  </Container>
</Nb>
  )
}
