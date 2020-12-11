import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const Form = (props) => {
  const [symbol, setSymbol] = useState('');
  const [companyName, setCompanyName] = useState(null);

  function handleSubmit(e) {
    e.preventDefault()
    props.searchForHolding(symbol)
  }

  const performApiCall = async () => {
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setCompanyName(response.data.companyName);
      console.log(response.data.companyName)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    performApiCall()
  }, [symbol]);



  // const [symbol, setSymbol] = useState('');
  // const [shares, setShare] = useState('');
  // const [companyName, setCompanyName] = useState('');

  // const [isCanSearch, setCanSearch] = useState(true);
  // const timeoutRef = useRef(null);

  // function onSearchSymbol(e) {
  //   setCanSearch(prevState => prevState = false);
  //   setSymbol(e.target.symbol);
  // }

  // useEffect(() => {
  //   if (timeoutRef.current !== null) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   if (isCanSearch) performApiCall();

  //   timeoutRef.current = setTimeout(() => {
  //     timeoutRef.current = null;
  //     setCanSearch(true);
  //   }, 1000);
  // }, [isCanSearch]);


  // const performApiCall = async () => {
  //   try {
  //     const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
  //     setCompanyName(response.data.companyName);
  //     console.log(response.data.companyName)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  return (
    <form className="form-inline justify-content-center mt-3" onSubmit={handleSubmit}>
      <input
        type="symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="form-control col-sm-5 text-uppercase"
      />
      <button type="submit" className="btn btn-primary col-sm-2">Submit</button>
      <p className="position-absolute">{companyName ? companyName : ''}</p>
    </form>
  )
}


export default Form