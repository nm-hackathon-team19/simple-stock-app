import React from 'react'

export default function DisplayHoldings(props) {
  // debugger
  const { company, share_number, symbol, share_price } = props.holding
  // debugger
  return (
    <div className="card text-white"
      style={{ maxWidth: '18rem' }}>
      <div className="card text-white bg-dark" style={{ maxWidth: '18rem' }}>
        <div className="card-header">{company}: {symbol}</div>
        <div className="card-body">
          <h5 className="card-title">{share_number} shares</h5>
          <h5 className="card-title">${share_number * share_price} shares</h5>
        </div>
        <div className="button-body">
          <button type="button" className="btn btn-primary">Buy</button>
          <button type="button" className="btn btn-info">Sell</button>
        </div>
      </div>
    </div>
  )
}
