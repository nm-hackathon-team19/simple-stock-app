import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import Chart from './Chart'
import { getHoldings } from '../../dbFunctions'

const Portfolio = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
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