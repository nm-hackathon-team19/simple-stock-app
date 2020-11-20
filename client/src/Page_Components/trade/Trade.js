import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import StocksShowcase from './StocksShowcase.js'
import UserHoldings from './UserHoldings.js'
import UserFunds from './UserFunds.js'
import SearchStocks from './SearchStocks.js'
import { v4 as uuidv4 } from 'uuid';

export default function Trade() {
  const [showcases, setShowcases] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [funds, setFunds] = useState(10000);

  // Search for new stock
  function onSearchStockClick(value) {
    console.log(value);
    axios.get(`api/stocks/search/?symbol=${value}`)
      .then(res => {
        console.log(res.data)
        addNewStock(2, res.data.companyName, res.data.symbol)
        updateUserFunds(res.data.latestPrice)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function updateUserFunds(price) {
    const newFunds = funds - price
    // setFunds(newFunds);
    newFunds <= 0 ? alert('insufficient funds') : setFunds(newFunds);
  }

  function addNewStock(number, company, symbol) {
    const matchingHolding = holdings.find(
      (holding) => holding.symbol === symbol
    );
    if (matchingHolding) {
      const matchIndex = holdings.indexOf(matchingHolding);
      holdings[matchIndex].sharesNum += number;
    } else {
      const newShare = {
        symbol: symbol,
        companyName: company,
        sharesNum: number,
        id: uuidv4(),
      };
      holdings.push(newShare);
    }
    setHoldings([...holdings]);
  }

  //  console.log(holdings)

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
      updateUserFunds={updateUserFunds}
      addNewStock={addNewStock}
    />)

  const holdingList = holdings.map(holding =>
    <UserHoldings holding={holding} key={holding.id} />)

  return (
    <div className="trade-container">
      <div className="search-container">
        <SearchStocks onSearchStockClick={onSearchStockClick} />
      </div>
      <UserFunds funds={funds} />
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
