import React from 'react';

const CurrentHoldings = (props) => {
  const { name, symbol, price, percent_change, shares } = props.holding;
  return (
    <div className="selected-holding card mt-4">
      <div className="card-head">
        <h2> {name}: {symbol}</h2>
        <div className="card-buttons">
          <button className="btn btn-primary">Trade</button>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="Holding Value:">
          <strong>Holding Value</strong>
          <p>${price * shares}</p>
        </div>
        <div className="shares">
          <strong>Shares:</strong>
          <p>{shares}</p>
        </div>
        <div className="last-price">
          <strong>Last Price:</strong>
          <p>${price}</p>
        </div>
        <div className="percent-change">
          <strong>Percent Change:</strong>
          <p>{percent_change}%</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentHoldings