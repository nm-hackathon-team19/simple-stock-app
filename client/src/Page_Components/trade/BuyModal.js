import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import './Trade.css';

function BuyModal(props) {
  const [value, setValue] = useState('')

  const { name, symbol, price } = props.searchedStock

  function clearInputField() {
    setValue('');
  }

  function buySharesMiddleware() {
    // debugger
    props.buyNewStock(value);
  }
  // debugger
  if (!props.show) {
    return null
  } else {
    return (
      <div id="register-modal" className="modal">
        <div className="modal-buy">
          <div className="buy-content">
            <div className="buy-header">
              <h1>{symbol}: {name}</h1>
              <h1> Price: {price}$</h1>
            </div>
            <form className="buy-form">
              <h3>how many shares would you like to purchase ?</h3>
              <input
                type="number" autoFocus
                value={value}
                onChange={e => setValue(e.target.value)} />

            </form>
            <div className="buy-buttons">
              {/* <NavLink to={{
                pathname: '/confirm',
                aboutProps: {
                  searchedStock: props.searchedStock,
                  numberOfShares: value
                }

              }}> */}
              <button
                type="button"
                className="close-btn btn"
                onClick={props.toggleBuyStockModal}
              >Close</button>
              {/* </NavLink> */}
              <NavLink to={{
                pathname: '/confirm',
                aboutProps: {
                  searchedStock: props.searchedStock,
                  Middleware: buySharesMiddleware,
                  numberOfShares: value
                }
              }}>
                <button
                  type="button"
                  className="buy-btn btn"
                  onClick={() => {
                    props.toggleBuyStockModal();
                    clearInputField()
                  }}
                >Buy</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div >
    );
  }
};

export default BuyModal;