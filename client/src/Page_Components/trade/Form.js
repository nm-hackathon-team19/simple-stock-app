import React from 'react'

function Form() {

  const handleSubmit = () => {

  }

  return (
    <form className="form-inline" action="/action_page.php">
      <input type="symbol" className="form-control col-sm-10" placeholder="Enter Symbol" id="symbol" />
      <button type="submit" className="btn btn-primary col-sm-2">Submit</button>
    </form>
  )
}

export default Form