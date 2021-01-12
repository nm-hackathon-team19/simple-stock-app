import React, { useState, useEffect } from 'react'
import UserInfo from '../components/UserInfo'
import CurrentHoldings from '../components/CurrentHoldings'
// import HeaderPortfolio from '../components/HeaderPortfolio'
import Chart from '../components/Chart'
import { getHoldings } from '../http-utilities/tradeUtilities'
import { withRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'

const PortfolioScreen = () => {
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

export default withRouter(PortfolioScreen)