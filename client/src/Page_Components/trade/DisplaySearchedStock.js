import React from 'react'

export default function DisplaySearchedStock(props) {
  const { number, name, symbol } = props.searchedStock
  // debugger

  if (props.searchedStock.length <= 0) {
    return null
  } else {
    return (
      <div>
        <div className="searched-info-container flexbox-center" style={{ gap: '2rem', border: '3px solid blue' }}>
          <h1>Shares: {number}</h1>
          <h1>Company: {name}: {symbol}</h1>
          <button className="btn" onClick={props.buyNewStock}>Buy Stock!</button>
        </div>
      </div>
    )
  }
}
