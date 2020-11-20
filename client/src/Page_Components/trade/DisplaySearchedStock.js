import React from 'react'

export default function DisplaySearchedStock(props) {
  const { number, name, symbol } = props.searchedStock
  // const { searchedStock } = props
  return (
    <div>
      <h1>Number of shares: {number}</h1>
      <h1>Number of shares: {name}</h1>
      <h1>Number of shares: {symbol}</h1>
    </div>
  )
}
