import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import Header from './Header'
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
    <section>
      {/* <Header /> */}
      <div className="container">
        <UserInfo />
        <Chart />
        {holdings.map(holding =>
          <CurrentHoldings
            holding={holding}
            key={holding.holding_id}
          />)}
      </div>
    </section>
  )
};

export default withRouter(Portfolio)

// export default Portfolio