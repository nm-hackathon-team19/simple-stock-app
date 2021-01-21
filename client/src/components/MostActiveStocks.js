import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import RenderMostActiveStocks from './RenderMostActiveStocks'
import { Spinner } from 'react-bootstrap'

const MostActiveStocks = (props) => {
  const [mostActiveStocks, setMostActiveStocks] = useState([]);
  const [isSpinner, setSpinner] = useState(true);

  useEffect(() => {
    const getRecommendations = () => {
      axios.get('/api/stocks/mostactive')
        .then((res) => {
          setMostActiveStocks(res.data)
          setSpinner(false)
        })
        .catch((err) => {
          console.log("error mostactive stocks client side", err);
        });
    }

    getRecommendations();
  }, [])

  const handleTrade = (symbol) => {
    props.handleSearchForHolding(symbol);
  }

  return (
    <Fragment>
      <div className="text-center mt-5 h5 font-weight-light">Most Active Stocks </div>
      <div className="most-active-list d-flex flex-wrap">
        {
          isSpinner ?
            <Spinner animation="border" className="spinner" />
            :
            mostActiveStocks.map(mostActiveStock => (
              <RenderMostActiveStocks
                mostActiveStock={mostActiveStock}
                key={mostActiveStock.marketCap}
              />
            ))
        }
      </div>
    </Fragment>
  )
}

export default MostActiveStocks