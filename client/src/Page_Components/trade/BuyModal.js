import React from "react";
import './Trade.css';

function BuyModal(props) {
  // debugger
  if (!props.show) {
    return null
  } else {
    return (
      <div id="register-modal" className="modal">
        <div className="modal-buy">
          <div className="buy-contant">
            <div className="buy-header">
              <h1>Symbol- Price: 100$</h1>
            </div>
            <form className="buy-form">
              <h3>how many shares would you like to purchase ?</h3>
              <input type="number" />
            </form>
            <div className="buy-buttons">
              <button type="button btn" className="cancelbtn" onClick={props.toggleBuyStockModal}>Close</button>
              <button type="button btn" className="cancelbtn" onClick={props.toggleBuyStockModal}>Buy</button>
            </div>

          </div>






        </div>
      </div >
    );
  }
};

export default BuyModal;