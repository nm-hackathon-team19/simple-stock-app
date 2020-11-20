import React from 'react'

export default function StocksShowcase(props) {
  const { companyName, latestPrice, symbol } = props.showcase

  return (

    <div className="stock-box">
      <h1>{companyName}</h1>
      <p>Stock value: {latestPrice}$</p>
      <div className="stock-buttons">
        <button
          className="buy-stock-btn btn"
          onClick={() => {
            props.updateUserFunds(latestPrice);
            props.addNewStock(5, companyName, symbol);
          }}>Buy
          </button>
        <button className="details-stock-btn btn">Info</button>
      </div>
    </div>

  )
}
