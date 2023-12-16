import React, { useEffect, useState } from 'react'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Navbar as Nb } from 'react-bootstrap';
import Link from 'next/link'
import NavLink from './NavLink'
import AppContext from '../../AppContext'

export default function Navbar() {
  const { header, setheader , show } = React.useContext(AppContext);

  return (
    <Nb expand="md" {...{ glass: "" }} className={`active ${show && 'hidden'}`}>
      <Container fluid>
        <Nb.Toggle aria-controls="navbarScroll" />
        <Nb.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Link href="#Home" className={header==0?"active":""}>Home</Nav.Link>
            <Nav.Link href="#GamePlay" className={header==1?"active":""}>GamePlay</Nav.Link>
            <Nav.Link href="#Section3" className={header==2?"active":""}>Section3</Nav.Link>
            <Nav.Link href="#Tokenomics" className={header==3?"active":""}>Tokenomics</Nav.Link>
            <Nav.Link href="#NTF" className={header==4?"active":""}>Metapool coin</Nav.Link>
            <Nav.Link href="#roadmap" className={header==5?"active":""}>Road map</Nav.Link>
          </Nav>
        </Nb.Collapse>
      </Container>
    </Nb>
  )
}
