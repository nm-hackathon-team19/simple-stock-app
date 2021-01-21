import React, { useContext } from 'react'
import '../style/index.css'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { UserNameContext } from '../context/UserNameContext'
import { CgProfile } from 'react-icons/cg'

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
          <Nav.Link onClick={() => props.history.push('/instructions')}>instructions</Nav.Link>
          <Nav.Link onClick={() => props.history.push('/main')}>Trade</Nav.Link>
          <Nav.Link onClick={() => props.history.push('/portfolio')}>Portfolio</Nav.Link>
        </Nav>
        {
          JSON.parse(localStorage.getItem('data')) ?
            <Nav>
              <Nav.Link className="d-flex"><CgProfile size="1.5em" className="mr-1" /> {userName}</Nav.Link>
              <Nav.Link onClick={removeLS}>Logout</Nav.Link>
            </Nav>
            : null
        }
      </Navbar.Collapse>
    </Navbar >
  )
}

export default withRouter(Navigation)