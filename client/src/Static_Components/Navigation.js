import React, { useState, useEffect, useContext } from 'react'
import './Static.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getUserName } from '../crudHoldings'
import { UserNameContext } from '../UserNameContext'

const Navigation = (props) => {
  const [userName, setUserName] = useContext(UserNameContext)

  const removeLS = () => {
    localStorage.removeItem('data');
    props.history.push('/');
  }

  return (
    <Navbar bg="dark" variant="dark" id="navbar" expand="sm">
      <Navbar.Brand href="/">TradingStocks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => props.history.push('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => props.history.push('/main')}>Trade</Nav.Link>
          <Nav.Link onClick={() => props.history.push('/portfolio')}>Potrfolio</Nav.Link>
        </Nav>
        {
          JSON.parse(localStorage.getItem('data')) ?
            <Nav>
              <Nav.Link>Hello {userName}</Nav.Link>
              <Nav.Link onClick={removeLS}>Logout</Nav.Link>
            </Nav>
            : null
        }
      </Navbar.Collapse>
    </Navbar >
  )
}

export default withRouter(Navigation)