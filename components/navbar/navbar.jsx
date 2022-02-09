import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import NavLink from './NavLink'

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg">
  <div className="container-xl">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">

        <NavLink href="/articles" title="Home" active={true}/>
        <NavLink href="/articles" title="Video"/>
        <NavLink href="/articles" title="Gameplay"/>
        <NavLink href="/articles" title="Nfts item"/>
        <NavLink href="/articles" title="Metapool coin"/>
        <NavLink href="/articles" title="Team"/>
        <NavLink href="/articles" title="Roadmap"/>




      </ul>

    </div>
  </div>
</Nav>
  )
}
