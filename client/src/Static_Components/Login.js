import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap'

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/login/${email}`);
      console.log(response.data);
    } catch (err) {
      console.error('error in loginUser', err.message)
    }
  };

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
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default Login