import React, { useState, Fragment } from "react";
import './Trade.css';
import { Button, Modal, Form } from 'react-bootstrap'

const BuyModal = (props) => {
  const [show, setShow] = useState(false);
  const [sharesValue, setSharesValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => props.handleBuyShares(sharesValue);

  // debugger
  const { companyName, symbol, latestPrice, changePercent, change } = props.selectedHolding;
  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>Buy Stocks</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{companyName}: {symbol}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h5 className="text-center">Share value: ${latestPrice}</h5>
            <h5 className="text-center">Current Shares Held: {props.shares}</h5>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Share quantity</Form.Label>
              <Form.Control type="number" placeholder="Shares" value={sharesValue} onChange={(e) => setSharesValue(e.target.value)} />
              <Form.Text className="total-price">
                {sharesValue ? '$' + sharesValue * latestPrice : 'Total amount'}
              </Form.Text>
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

export default BuyModal;