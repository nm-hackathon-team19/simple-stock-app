import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
// import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'

const Form = (props) => {
  const [symbol, setSymbol] = useState('');
  const [companyName, setCompanyName] = useState(null);
  const [isCanSearch, setCanSearch] = useState(true);
  const timeoutRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault()
    props.searchForHolding(symbol)
  }

  const onSearchSymbol = (e) => {
    setCanSearch(prevState => prevState = false);
    setSymbol(e.target.value);
  }

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    if (isCanSearch) performApiCall();

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setCanSearch(true);
    }, 1000);
  }, [isCanSearch]);

  const performApiCall = async () => {
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setCompanyName(response.data.companyName);
      console.log(response.data.companyName)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <form className="form-inline justify-content-center mt-3" onSubmit={handleSubmit}>
      <input
        type="symbol"
        value={symbol}
        autoFocus
        onChange={(e) => onSearchSymbol(e)}
        className="form-control col-sm-5 text-uppercase"
      />
      <button type="submit" className="btn btn-primary col-sm-2">Submit</button>
      {/* {companyName ? <FiThumbsUp /> : <FiThumbsDown />} */}
      <h6 className="w-100 text-center text-success" style={{ display: symbol === '' ? 'none' : 'block' }}>{companyName}</h6>
    </form >
  )
}


export default Form