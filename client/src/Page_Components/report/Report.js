import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import { HoldingContext } from '../../HoldingContext'
import { getHoldings } from '../../dbFunctions'

const Report = () => {
  const [holdings, setHoldings] = useContext(HoldingContext);
  // const [holdings, setHoldings] = useContext(HoldingContext);
  // const [funds, setFunds] = useState(100000)

  const calculateFunds = () => {
    console.log('calculateFunds start')
    // holdings.forEach(element => {
    //   console.log('calculateFunds inside foreach')
    //   console.log(element);
    // });
    console.log('calculateFunds end')
  }

  // console.log(holdings);
  useEffect(() => {
    console.log('inside useEffect')
    getHoldings(setHoldings);
    calculateFunds();
  }, []);

  // console.log(holdings)
  return (
    <div className="container">
      <UserInfo holdings={holdings} />
      {holdings.map(holding =>
        <CurrentHoldings
          holding={holding}
          key={holding.holding_id}
        />)}
    </div>
  )
}

export default Report