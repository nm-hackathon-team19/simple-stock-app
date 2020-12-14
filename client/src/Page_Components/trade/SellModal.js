import React, { useState, Fragment } from "react";
import './Trade.css';
import { Button, Modal, Form, Alert } from 'react-bootstrap'

const SellModal = (props) => {
  const [show, setShow] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [sharesInput, setSharesInput] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true); setSharesInput(''); }
  const handleSubmit = () => {
    if (sharesInput > props.shares) {
      console.log('not enough shares');
      setIsShowAlert(true);
      // setTimeout(() => {
      //   console.log('inside timeout')
      //   setIsShowAlert(false);
      // }, 3000)
      setShow(true);
    } else {
      console.log('youre good')
      setIsShowAlert(false);
      props.handleSellShares(sharesInput);
    }
  }

  // debugger
  const { companyName, symbol, latestPrice, changePercent, change } = props.selectedHolding;
  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>Sell Stocks</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{companyName}: {symbol}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h5 className="text-center">Share value: ${latestPrice}</h5>
            <h5 className="text-center">Current Shares Held: {props.shares}</h5>
            <Form.Group controlId="formBasicEmail">
              {isShowAlert && (
                <Alert variant="danger" onClose={() => setIsShowAlert(false)} dismissible className="alert">
                  <p> Insufficient shares</p>
                </Alert>
              )}
              < Form.Label > Share quantity</Form.Label>
              <Form.Control type="number" placeholder="Shares" value={sharesInput} onChange={(e) => setSharesInput(e.target.value)} />
              <Form.Text className="total-price">
                {sharesInput ? '$' + sharesInput * latestPrice : 'Total amount'}
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Your Order is not complete yet. Review and confirm your order in the next step.
          <Button variant="secondary" onClick={handleClose}>Cancel Order</Button>
          <Button variant="primary" onClick={() => { handleClose(); handleSubmit(); }}>Sell Shares</Button>
        </Modal.Footer>
      </Modal>
    </Fragment >
  )
};

export default SellModal;