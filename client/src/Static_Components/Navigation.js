import React from 'react'
import './Static.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {

  const removeLS = () => {
    localStorage.removeItem('user_id');
    props.history.push('/');
  }

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
              <Nav.Link>Hello UserName</Nav.Link>
              <Nav.Link onClick={removeLS}>Logout</Nav.Link>
            </Nav>
            : null
        }
      </Navbar.Collapse>
    </Navbar >
  )
}

export default withRouter(Navigation)

// export default Navigation