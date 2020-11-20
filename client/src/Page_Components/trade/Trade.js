import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import StocksShowcase from './StocksShowcase.js'
import UserHoldings from './UserHoldings.js'
import { v4 as uuidv4 } from 'uuid';


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
      sharesNum: number,
      id: uuidv4()
    }

    if (holdings.length == 0) {
      setHoldings(holdings.concat(newShare))
    }

    holdings.map(hold => {
      // debugger
      if (hold.symbol === symbol) {
        // debugger
        hold.sharesNum += number
        return;
      } else {
        // debugger
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
    <UserHoldings holding={holding} key={holding.id} />)

  return (
    <div className="trade-container">
      <div className="holdings-container">
        <h1 className="showcase-header">Your current holdings</h1>
        <div className="holding-list">
          {holdingList}
        </div>
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
