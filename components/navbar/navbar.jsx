import React, { useEffect, useState } from 'react'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Navbar as Nb } from 'react-bootstrap';
import Link from 'next/link'
import NavLink  from './NavLink'

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Nb expand="md" {...{glass:""}} className={`active ${show && 'hidden'}`}>
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
