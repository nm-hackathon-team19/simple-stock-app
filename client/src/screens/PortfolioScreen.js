import React, { useState, useEffect } from 'react'
import UserInfo from '../components/UserInfo'
import CurrentHoldings from '../components/CurrentHoldings'
import NoCurrentHoldings from '../components/NoCurrentHoldings'
import HeaderPortfolio from '../components/headers/HeaderPortfolio'
import Chart from '../components/charts/Chart'
import { getHoldings } from '../http-helpers/tradeUtilities'
import { Spinner, Row, Col } from 'react-bootstrap'

const PortfolioScreen = () => {
  const [holdings, setHoldings] = useState([]);
  const [isSpinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchHoldingsData = () => {
      getHoldings()
        .then(holdingsData => {
          setHoldings(holdingsData);
          setSpinner(false)
        })
        .catch(err => console.error('error get holdings', err));
    }
    fetchHoldingsData();
  }, []);

  return (
    <section className="portfolio-container text-size container">
      <HeaderPortfolio />
      <div className="portfolio-top-wrapper d-flex align-items-start">
        <UserInfo />
        {/* {isSpinner ?
          <Spinner animation="border" className="spinner mt-5" />
          :
          <> */}
        <Chart />
      </div>
      <div className="user-holdings-list container">
        {holdings.length > 0 ?
          holdings.map(holding =>
            <CurrentHoldings
              holding={holding}
              key={holding.holding_id}
            />)
          : <NoCurrentHoldings />
        }
      </div>
      {/* </> */}
      {/* } */}
    </section >
  )
};

export default PortfolioScreen