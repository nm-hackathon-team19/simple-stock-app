import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import Showcases from './Showcases.js'
import DisplayHoldings from './DisplayHoldings.js'
import UserFunds from './UserFunds.js'
import SearchStocks from './SearchStocks.js'
import BuyModal from './BuyModal.js'
import DisplaySearchedStock from './DisplaySearchedStock.js'

export default function Trade() {
  const [showcases, setShowcases] = useState([]);
  const [funds, setFunds] = useState(10000);
  const [isModalBuyStock, setIsModalBuyStock] = useState(false)
  const [holdings, setHoldings] = useState([]);
  const [searchedStock, setSearchedStock] = useState([])

  function toggleBuyStockModal() {
    setIsModalBuyStock(!isModalBuyStock);
  }

  // Search for new stock
  function onSearchStockClick(value) {
    axios.get(`api/stocks/search/?symbol=${value}`)
      .then(res => {
        console.log(res.data)
        setSearchedStock(
          {
            number: 2,
            name: res.data.companyName,
            symbol: res.data.symbol,
            price: res.data.latestPrice
          })
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

  function buyNewStock() {
    const stocksNumber = searchedStock.number
    const stockName = searchedStock.name
    const stockSymbol = searchedStock.symbol
    const stockPrice = searchedStock.price
    // debugger
    const matchingHolding = holdings.find(
      (holding) => holding.symbol === stockSymbol
    );
    if (matchingHolding) {
      const matchIndex = holdings.indexOf(matchingHolding);
      debugger
      holdings[matchIndex].numberOfStocks += stocksNumber;
    } else {
      const newShare = {
        symbol: stockSymbol,
        name: stockName,
        numberOfStocks: stocksNumber,
        price: stockPrice,
        id: uuidv4(),
      };
      holdings.push(newShare);
    }
    setHoldings([...holdings]);
    updateUserFunds(stockPrice);
  }

  // Set showcases on page
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
    <Showcases
      showcase={showcase}
      key={showcase.marketCap}
      onSearchStockClick={onSearchStockClick}
    />)

  const holdingList = holdings.map(holding =>
    <DisplayHoldings holding={holding} key={holding.id} />)

  return (
    <div className="trade-container">
      <BuyModal
        show={isModalBuyStock}
        buyNewStock={buyNewStock}
        toggleBuyStockModal={toggleBuyStockModal}
      />
      <div className="search-container">
        <SearchStocks
          onSearchStockClick={onSearchStockClick}
        />
      </div>
      <DisplaySearchedStock
        searchedStock={searchedStock}
        buyNewStock={buyNewStock}
        toggleBuyStockModal={toggleBuyStockModal}
      />
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
