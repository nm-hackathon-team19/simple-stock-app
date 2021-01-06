import React, { useState, useEffect } from 'react'
import './Static.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getUserName } from '../dbFunctions'

const Navigation = (props) => {
  const [userName, setUserName] = useState('');

  const removeLS = () => {
    localStorage.removeItem('user_id');
    props.history.push('/');
  }

  const retrieveUserName = () => {
    getUserName(localStorage.getItem('user_id'))
      .then(userName => setUserName(userName))
      .catch(err => console.error('error get user name', err));
  }

  useEffect(() => {
    retrieveUserName();
  }, []);

  return (
    <Navbar bg="dark" variant="dark" id="navbar" expand="sm">
      <Navbar.Brand href="/">TradingStocks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/main">Trade</Nav.Link>
          <Nav.Link href="/portfolio">Potrfolio</Nav.Link>
        </Nav>
        {
          localStorage.getItem('user_id') > 0 ?
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