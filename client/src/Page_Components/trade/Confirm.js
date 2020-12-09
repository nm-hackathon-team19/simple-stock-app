import React from 'react'
import { NavLink } from 'react-router-dom'

function Confirm(props) {
  if (!props.location.aboutProps) {
    return null
  } else {
    const { name, symbol, price } = props.location.aboutProps.searchedStock
    const { numberOfShares } = props.location.aboutProps

    return (
      <div id="confirm" className="confirm-container">
        <div className="confirm-header">
          <h1>Thank you for choosing TradeFantazy</h1>
        </div>
        <div className="confirm-content">
          <div className="stock-info">
            <h3>{name} ( {symbol} )</h3>
            <h3>Quantity: {numberOfShares}</h3>
            <h3>Price: {price}</h3>
          </div>
          <div className="order-summary">
            <h1>Order Summary</h1>
            <h2><strong>Subtotal: </strong>{price}$ x {numberOfShares}(shares)</h2>
          </div>
          <hr />
          <div className="order-total">
            <h1><strong>Total: </strong>{price * parseInt(numberOfShares)}$</h1>
          </div>
          <div className="confirm-buttons">
            <NavLink to={{
              pathname: '/trade'
            }}>
              <button
                type="button"
                className="btn-confirm"
                onClick={() => {
                  props.location.aboutProps.Middleware()
                }}
              >Confirm</button>
            </NavLink>

            <NavLink to={{
              pathname: '/trade'
            }}>
              <button
                type="button"
                className="btn-cancel"
              >Cancel</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Confirm