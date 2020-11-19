import React from 'react'

export default function UserHoldings(props) {
  const { companyName, sharesNum, symbol } = props.holding
  return (
    <div className="holding-list">
      <div className="holding-box">
        <h2>Company: {companyName}</h2>
        <h2>Share: {sharesNum}</h2>
        <h2>Share: {symbol}</h2>
      </div>
    </div>
  )
}
