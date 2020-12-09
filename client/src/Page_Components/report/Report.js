import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import { HoldingContext } from '../../HoldingContext'
import { getHoldings } from '../../dbFunctions'

const Report = () => {
  const [holdings, setHoldings] = useContext(HoldingContext);

  useEffect(() => {
    getHoldings(setHoldings);
  }, [])

  return (
    <div className="container">
      <UserInfo />
      {holdings.map(holding => <CurrentHoldings holding={holding}
        key={holding.holding_id} />)}
    </div>
  )
}

export default Report