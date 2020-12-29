import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap'

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // axios.post('comments', { comment: this.comment, id: this.postId })
      // const response = await axios.get(`/login/${email}`);
      const response = await axios.get('/login', {
        params: {
          email: email,
          password: password
        }
      });
      // store user id in local storage and send client to home page / holding page
      // store local storage unique id
      // redirect user to homepage / holding page. when they land on the page useEffect send a request to grab holding 
      // get all the holdings which has that user id with a SELECT * FROM holdings where user_id = response.data (server send a request to db)
      // db bring the data back to the server
      // server send back the data to the client who renders the holdings
      // console.log(response.data);
      storeIdLocalStorage(response.data);
    } catch (err) {
      console.error('error in loginUser', err.message);
    }
  }

  const storeIdLocalStorage = (user_id) => {
    console.log(user_id);
  }

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
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default Login