import React from 'react'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Navbar as Nb } from 'react-bootstrap';
import Link from 'next/link'
import NavLink  from './NavLink'

export default function Navbar() {
  return (
    <Nb expand="md" {...{glass:""}}>
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

          <Nav.Link href="#Home" className="active">Home</Nav.Link>
          <Nav.Link href="#GamePlay" className="">GamePlay</Nav.Link>
          <Nav.Link href="#Section3" className="">Section3</Nav.Link>
          <Nav.Link href="#Tokenomics" className="">Tokenomics</Nav.Link>
          <Nav.Link href="#NTF" className="">Metapool coin</Nav.Link>
          <Nav.Link href="#roadmap" className="">Road map</Nav.Link>
        </Nav>
    </Nb.Collapse>
  </Container>
</Nb>
  )
}
