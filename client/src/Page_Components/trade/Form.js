import React, { useState } from 'react'

function Form(props) {
  const [value, setValue] = useState('')

  return (
    <form className="form-inline" onSubmit={() => props.searchForHolding(value)}>
      <input type="symbol" value={value} onChange={(e) => setValue(e.target.value)} className="form-control col-sm-10" placeholder="Enter Symbol" />
      <button type="submit" className="btn btn-primary col-sm-2">Submit</button>
    </form>
  )
}

export default Form