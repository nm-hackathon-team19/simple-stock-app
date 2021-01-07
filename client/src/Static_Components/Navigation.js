import React, { useState, useEffect, useContext } from 'react'
import './Static.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getUserName } from '../crudHoldings'
import { UserNameContext } from '../UserNameContext'

const Navigation = (props) => {
  // const [userName, setUserName] = useState('');
  const [userName, setUserName] = useContext(UserNameContext)

  console.log(userName);
  // console.log(JSON.parse(localStorage.getItem('data')).name);

  // useEffect(() => {
  //   console.log('inside useEffect')
  //   if (localStorage.getItem('user_id')) {
  //     retrieveUserName();
  //   }
  // }, []);

  console.log('inside Navigation')

  // const retrieveUserName = () => {
  //   console.log('inside retrieveUserName')
  //   getUserName(localStorage.getItem('user_id'))
  //     .then(userName => setUserName(userName))
  //     .catch(err => console.error('error get user name', err));
  // }

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
          <h1 style={{ color: "green" }}>{userName}</h1>
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