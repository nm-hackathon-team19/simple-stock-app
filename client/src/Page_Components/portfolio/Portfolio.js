import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import Graph from './Graph'
import { HoldingContext } from '../../HoldingContext'
import { getHoldings } from '../../dbFunctions'

const Portfolio = () => {
  // const [holdings, setHoldings] = useContext(HoldingContext);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    // getHoldings(setHoldings)
    getHoldings().then(holdingsData => setHoldings(holdingsData))
  }, []);

  return (
    <div className="container">
      <UserInfo />
      {/* <Graph /> */}
      {holdings.map(holding =>
        <CurrentHoldings
          holding={holding}
          key={holding.holding_id}
        />)}
    </div>
  )
}

export default Portfolio