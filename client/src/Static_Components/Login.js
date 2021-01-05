import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form, NavLink } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const Login = (props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userIdLS, setUserIdLS] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/login", {
        params: {
          email: email,
          password: password,
        },
      });
      localStorage.setItem("user_id", response.data);
      if (localStorage.getItem('user_id') > 0) {
        return <Redirect to='/main' />
      }
    } catch (err) {
      console.error("error in loginUser", err.message);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user_id');
    setUserIdLS(user);
  }, [userIdLS]);

  return (
    <>
      <Button onClick={handleShow} className="btn btn-primary">Login</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Form onSubmit={loginUser}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>Submit</Button>
        </Form>
      </Modal>
    </>
  );
}

// export default Login
export default withRouter(Login)
