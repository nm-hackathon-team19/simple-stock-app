import React from 'react'

export default function Showcases(props) {
  const { companyName, latestPrice, symbol } = props.showcase

  return (

    <div className="stock-box">
      <h1>{companyName}</h1>
      <p>Stock value: {latestPrice}$</p>
      <div className="stock-buttons">
        <button
          className="buy-stock-btn btn"
          onClick={() => {
            props.onSearchStockClick(symbol);
          }}>More Info
          </button>
      </div>
    </div>
  )
}
