import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import CurrentHoldings from './CurrentHoldings'
import Header from './Header'
import Chart from './Chart'
import { getHoldings } from '../../utilities/tradeUtility'
import { withRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'

const Portfolio = () => {
  const [holdings, setHoldings] = useState([]);
  const [isSpinner, setSpinner] = useState(true);

  useEffect(() => {
    getHoldingsData();
  }, []);

  const getHoldingsData = () => {
    getHoldings()
      .then(holdingsData => {
        setHoldings(holdingsData);
        setSpinner(false)
      })
      .catch(err => console.error('error get holdings', err));
  }

  return (
    <section>
      {/* <Header /> */}
      <div className="container">
        <UserInfo />
        {isSpinner ?
          <Spinner animation="border" className="spinner mt-5" />
          :
          <>
            <Chart />
            {holdings.map(holding => (
              <CurrentHoldings
                holding={holding}
                key={holding.holding_id}
              />))
            }
          </>
        }
      </div>
    </section>
  )
};

export default withRouter(Portfolio)