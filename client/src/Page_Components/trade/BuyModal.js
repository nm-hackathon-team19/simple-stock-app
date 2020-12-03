import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import './Trade.css';
import { Button, Modal, Form } from 'react-bootstrap'

// Search for new stock
// function searchSymbolInput(symbol, shares) {
//   axios.get(`api/stocks/search/?symbol=${symbol}`)
//     .then(res => {
//       // console.log(res.data)
//       setSearchedStock(
//         {
//           shares: shares,
//           name: res.data.companyName,
//           symbol: res.data.symbol,
//           price: res.data.latestPrice
//         })
//       toggleBuyStockModal()
//     })
//     .catch(err => {
//       console.log(err)
//     });
// }

function BuyModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [symbol, setSymbol] = useState('');
  const [shares, setShare] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [isCanSearch, setCanSearch] = useState(true);
  const timeoutRef = useRef(null);


  function onSearchSymbol(e) {
    setCanSearch(false);
    setSymbol(e.target.value);
  }

  useEffect(() => {
    console.log(timeoutRef)
    if (timeoutRef.current !== null) {
      debugger
      clearTimeout(timeoutRef.current);
    }

    if (isCanSearch) performApiCall();

    timeoutRef.current = setTimeout(() => {
      console.log(timeoutRef)
      timeoutRef.current = null;
      setCanSearch(true);
    }, 1000);
    console.log(timeoutRef)
  }, [isCanSearch]);

  const performApiCall = async () => {
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setCompanyName(response.data.companyName);
      console.log(response.data.companyName)
    } catch (err) {
      console.error(err.message)
    }
  }




  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>Buy Stocks</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search by company symbol</Form.Label>
              <Form.Control type="name" placeholder="Enter Symbol" value={symbol}
                onChange={(e) => { onSearchSymbol(e); }} />
              <Form.Text className="text-muted">{companyName}</Form.Text>
              <Form.Label>Share quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter number" value={shares} onChange={(e) => setShare(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel Order</Button>
          <Button variant="primary" onClick={() => { handleClose(); }}>Review Order</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
  // const [value, setValue] = useState('')

  // const { name, symbol, price } = props.searchedStock

  // function clearInputField() {
  //   setValue('');
  // }

  // function buySharesMiddleware() {
  //   // debugger
  //   props.buyNewStock(value);
  // }
  // // debugger
  // if (!props.show) {
  //   return null
  // } else {
  //   return (
  //     <div id="register-modal" className="modal">
  //       <div className="modal-buy">
  //         <div className="buy-content">
  //           <div className="buy-header">
  //             <h1>{symbol}: {name}</h1>
  //             <h1> Price: {price}$</h1>
  //           </div>
  //           <form className="buy-form">
  //             <h3>how many shares would you like to purchase ?</h3>
  //             <input
  //               type="number" autoFocus
  //               value={value}
  //               onChange={e => setValue(e.target.value)} />

  //           </form>
  //           <div className="buy-buttons">
  //             <button
  //               type="button"
  //               className="close-btn btn"
  //               onClick={props.toggleBuyStockModal}
  //             >Close</button>
  //             {/* <NavLink to={{
  //               pathname: '/confirm',
  //               aboutProps: {
  //                 searchedStock: props.searchedStock,
  //                 Middleware: buySharesMiddleware,
  //                 numberOfShares: value
  //               }
  //             }}> */}
  //             <button
  //               type="button"
  //               className="buy-btn btn"
  //               onClick={() => {
  //                 buySharesMiddleware()
  //                 props.toggleBuyStockModal();
  //                 clearInputField()
  //               }}
  //             >Buy</button>
  //             {/* </NavLink> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div >
  //   );
  // }
};

export default BuyModal;