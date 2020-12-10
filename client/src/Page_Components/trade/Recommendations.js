import React, { Fragment } from 'react'
import RenderRecommendations from './RenderRecommendations'

const Recommendations = (props) => {

  const handleTrade = (symbol) => {
    props.searchForHolding(symbol);
  }

  return (
    <Fragment>
      <div className="text-center mt-5 h4 font-weight-light">Recommended Stocks</div>
      {props.recommendedHoldings.map(holding => (
        <RenderRecommendations
          holding={holding}
          key={holding.marketCap}
          handleTrade={handleTrade}
        />
      ))}
    </Fragment>
  )
}

export default Recommendations