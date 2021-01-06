import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import RenderRecommendations from './RenderRecommendations'

const Recommendations = (props) => {
  const [recommendedHoldings, setRecommendedHoldings] = useState([]);

  const handleTrade = (symbol) => {
    props.handleSearchForHolding(symbol);
  }

  const getRecommendations = async () => {
    await axios.get('/api/stocks/recommendation')
      .then((res) => {
        setRecommendedHoldings(res.data)
      })
      .catch((err) => {
        console.log("error username response client side", err);
      });
  }

  useEffect(() => {
    getRecommendations();
  }, [])

  return (
    <Fragment>
      <div className="text-center mt-5 h4 font-weight-light">Recommended Stocks</div>
      {recommendedHoldings.map(recommendedHolding => (
        <RenderRecommendations
          recommendedHolding={recommendedHolding}
          key={recommendedHolding.marketCap}
          handleTrade={handleTrade}
        />
      ))}
    </Fragment>
  )
}

export default Recommendations