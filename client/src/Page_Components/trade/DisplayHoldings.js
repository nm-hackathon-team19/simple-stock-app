import React from 'react'

export default function DisplayHoldings(props) {
  // debugger
  const { name, numberOfStocks, symbol, price } = props.holding
  // debugger
  return (
    <div className="holding-box">
      <h2>Company: {name}: {symbol}</h2>
      <h2>{numberOfStocks} shares</h2>
      <h2>One share value: {price}$</h2>
      <h2>Total shares value: {price * parseInt(numberOfStocks)}$</h2>
      <div className="shares-buttons">
        <button className="btn">Buy More</button>
        <button className="btn">Sell Shares </button>
      </div>
    </div>
  )
}
