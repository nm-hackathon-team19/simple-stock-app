import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import StocksShowcase from './StocksShowcase.js'
import UserHoldings from './UserHoldings.js'

export default function Trade() {
  const [showcases, setShowcases] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [funds, setFunds] = useState(1000);

  function purchaseStock(price, sharesNumber, company, symbol) {
    updateUserShares(sharesNumber, company, symbol)
    updateUserFunds(price)
  }

  function updateUserShares(number, company, symbol) {
    // loop through the holdings array and see if the symbol of newShare exists
    // if it exists -> update the current holding with the newShare.number
    // if it doens't exist -> add newShare as a new object to holdings array

    const newShare = {
      symbol: symbol,
      companyName: company,
      sharesNum: number
    }
    
    if (holdings.length == 0) {
      setHoldings(holdings.concat(newShare))
    }

    holdings.map(hold => {
      if (hold.symbol === symbol) {
        hold.sharesNum += number
        return;
      } else {
        setHoldings(holdings => [...holdings, newShare])
      }
    })
  }

  console.log(holdings)

  function updateUserFunds(price) {
    // console.log('price:', price)
  }
  // console.log(holdings)

  useEffect(() => {
    axios.get('/api/stocks/showcase', {})
      .then((res) => {
        setShowcases(res.data)
      })
      .catch((err) => {
        console.log("error username response client side", err);
      });
  }, [])

  const showcaseList = showcases.map(showcase =>
    <StocksShowcase
      showcase={showcase}
      key={showcase.marketCap}
      purchaseStock={purchaseStock}
    // updateUserFunds={updateUserFunds}
    />)

  const holdingList = holdings.map(holding =>
    <UserHoldings holding={holding} />)

  return (
    <div className="trade-container">
      <div className="holdings-container">
        <h1 className="showcase-header">Your current holdings</h1>
        {holdingList}
      </div>
      <div className="stocks-showcase">
        <h1 className="showcase-header">Showcase of popular stocks</h1>
        <div className="stocks-list">
          {showcaseList}
        </div>
      </div>
    </div>
  )
}
