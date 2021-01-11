import React, { useState, useEffect, Fragment } from "react";
import './Trade.css';
import { Button, Modal, Form } from 'react-bootstrap'
import { getWallet } from '../../crudHoldings.js'
import Alert from 'react-bootstrap/Alert'

const BuyModal = (props) => {
  const [show, setShow] = useState(false);
  const [sharesValue, setSharesValue] = useState('');
  const [wallet, setWallet] = useState(0);
  const [isShowAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getUserWallet();
  }, []);

  const getUserWallet = () => {
    getWallet()
      .then(wallet => setWallet(wallet))
      .catch(err => console.error('error get wallet', err));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (wallet > sharesValue * props.selectedHolding.latestPrice) {
      handleClose();
      props.handleBuyShares(sharesValue);
    } else {
      setShowAlert(true);
    }
  };

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
                {sharesValue ? '$' + (sharesValue * latestPrice).toFixed(2) : 'Total amount'}
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        {isShowAlert &&
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            You currently have only ${wallet.toFixed(2)}. Either sell some shares or buy less in order to complete the transaction.
        </Alert>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel Order</Button>
          <Button variant="primary" onClick={handleSubmit}>Buy Shares</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
};

export default BuyModal;