import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import Chart from './Chart'
import { getHoldings } from '../../crudHoldings'
import { withRouter } from 'react-router-dom';

const Portfolio = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    getHoldingsData();
  }, []);

  const getHoldingsData = () => {
    getHoldings()
      .then(holdingsData => setHoldings(holdingsData))
      .catch(err => console.error('error get holdings', err));
  }

  return (
    <div className="container">
      <UserInfo />
      <Chart />
      {holdings.map(holding =>
        <CurrentHoldings
          holding={holding}
          key={holding.holding_id}
        />)}
    </div>
  )
};

export default withRouter(Portfolio)

// export default Portfolio