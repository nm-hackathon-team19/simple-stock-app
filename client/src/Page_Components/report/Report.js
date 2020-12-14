import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import { HoldingContext } from '../../HoldingContext'
import { getHoldings } from '../../dbFunctions'

const Report = () => {
  const [holdings, setHoldings] = useContext(HoldingContext);
  // const [holdings, setHoldings] = useContext(HoldingContext);


  // console.log(funds);


  // console.log(holdings);

  useEffect(() => {
    // console.log('inside useEffect')
    getHoldings(setHoldings)
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