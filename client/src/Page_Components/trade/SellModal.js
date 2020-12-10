import React, { useState, Fragment } from "react";
import './Trade.css';
import { Button, Modal, Form } from 'react-bootstrap'

const SellModal = (props) => {
  const [show, setShow] = useState(false);
  const [sharesValue, setSharesValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => props.passPropsData(sharesValue);

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>Sell Stocks</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.companyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="row">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Share quantity</Form.Label>
              <Form.Control type="number" placeholder="Shares" value={sharesValue} onChange={(e) => setSharesValue(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Total</Form.Label>
              <Form.Control name="price" type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Your Order is not complete yet. Review and confirm your order in the next step.
          <Button variant="secondary" onClick={handleClose}>Cancel Order</Button>
          <Button variant="primary" onClick={() => { handleClose(); handleSubmit(); }}>Buy Shares</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
};

export default SellModal;