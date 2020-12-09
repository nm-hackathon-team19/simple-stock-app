import React from 'react';

const CurrentHoldings = (props) => {
  console.log(props)
  const { companyName, symbol, price, change, changePercent, numberOfShares } = props.holding;
  return (
    <div className="selected-holding card mt-4">
      <div className="card-head">
        <h2> {companyName}: {symbol}</h2>
        <div className="card-buttons">
          <button className="btn btn-primary">Trade</button>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="price">
          <strong>Current Price</strong>
          <p>{price}</p>
        </div>
        <div className="percent">
          <strong>Percent Change</strong>
          <p>{changePercent}</p>
        </div>
        <div className="change">
          <strong>Daily Gain/Loss</strong>
          <p>{change}</p>
        </div>
        <div className="shares-held">
          <strong>Shares Held</strong>
          <p>{numberOfShares}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentHoldings