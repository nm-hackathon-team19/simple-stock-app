import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import Chart from './Chart'
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
      <Chart holdings={holdings} />
      {holdings.map(holding =>
        <CurrentHoldings
          holding={holding}
          key={holding.holding_id}
        />)}
    </div>
  )
}

export default Portfolio