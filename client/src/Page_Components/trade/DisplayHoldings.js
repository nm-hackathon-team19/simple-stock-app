import React from 'react'

export default function DisplayHoldings(props) {
  const { name, numberOfStocks, symbol, price } = props.holding
  // debugger
  return (
    <div className="holding-box">
      <h2>Company: {name}: {symbol}</h2>
      <h2>{numberOfStocks} shares</h2>
      <h2>Price: {price}</h2>
    </div>
  )
}
