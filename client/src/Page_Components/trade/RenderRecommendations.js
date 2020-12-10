import React from 'react'

function RenderRecommendations(props) {
  const { companyName, latestPrice, changePercent, change, symbol } = props.holding;

  return (
    <div className="recommended-holding">
      <div className="selected-holding card mt-3">
        <div className="card-head">
          <h2> {companyName}: {symbol}</h2>
          <button className="btn btn-danger" onClick={() => props.handleTrade(symbol)}>Trade</button>
        </div>
        <hr />
        <div className="card-body">
          <div className="price">
            <strong>Current Price</strong>
            <p>{latestPrice}</p>
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
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RenderRecommendations