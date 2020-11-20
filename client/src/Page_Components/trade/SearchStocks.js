import { React, useState } from 'react'

export default function SearchStocks(props) {
  const [value, setValue] = useState('')
  // debugger

  function handleSubmit(e) {
    e.preventDefault()
    props.onSearchStockClick(value)
    props.toggleBuyStockModal();
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}
          placeholder="Search for Stocks (symbol)" />
        <input type="submit" className="btn" value="Click Me!" />
      </form>
    </div>
  )
}
