import React, { useEffect, useState } from 'react'
import HeaderInstructions from '../components/headers/HeaderInstructions'
import Recommendations from '../components/Recommendations'
import MostActiveStocks from '../components/MostActiveStocks'
// import qa from 'qs';

const InstructionsScreen = (props) => {

  // useEffect(() => {

  //   const renderSearchedHoldingFromPortfolio = () => {
  //     const queryStrings = qa.parse(
  //       props.location.search,
  //       { ignoreQueryPrefix: true });
  //     if (queryStrings.symbol) {
  //       handleSearchForHolding(queryStrings.symbol)
  //     }
  //   }

  //   renderSearchedHoldingFromPortfolio();
  // }, []);

  // const handleSearchForHolding = (symbol) => {
  //   searchForHolding(symbol)
  //     .then(selectedHolding => setSelectedHolding(selectedHolding))
  //     .catch(err => console.error('error get holdings', err));
  // };

  return (
    <div>
      <HeaderInstructions />
      <MostActiveStocks />
    </div>
  )
}

export default InstructionsScreen
