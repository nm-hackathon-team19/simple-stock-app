import React from 'react'
import './Static.css'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>Stocks Fantazy</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <LinkContainer exact to="/" >
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/trade">
            <Nav.Link to="/trade">Trade</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/report">
            <Nav.Link href="/report" >Reports</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Register/Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
