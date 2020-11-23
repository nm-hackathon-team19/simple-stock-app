import { React, useState } from 'react'

export default function FormStocks(props) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    props.onSearchStockClick(value)
  }

  return (
    <div className="search-container" id="search-form-container">
      <form className="flexbox-center" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}
          placeholder="Search by company symbol" />
        <input type="submit" className="btn" value="Click Me!" />
      </form>
    </div>
  )
}
