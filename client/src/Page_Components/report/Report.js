import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import { HoldingContext } from '../../HoldingContext'
import { getHoldings, createHolding } from '../../dbFunctions'


export default function Report() {
  const [holdings, setHoldings] = useContext(HoldingContext);

  const getHoldings = async (res, req) => {
    try {
      const response = await axios.get('/trade');
      setHoldings(response.data);
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getHoldings();
    // setUserSharesAmount();
  }, [])
  // console.log(holdings);

  // debugger
  return (
    <div className="container">
      <UserInfo />
      {holdings.map(holding => <CurrentHoldings holding={holding} key={holding.id} />)}
    </div>
  )
}
