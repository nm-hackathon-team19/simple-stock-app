import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import Showcases from './Showcases.js'
import DisplayHoldings from './DisplayHoldings.js'
import UserFunds from './UserFunds.js'
import FormStocks from './FormStocks.js'
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
    // debugger
  }

  // Search for new stock
  function onSearchStockClick(value) {
    axios.get(`api/stocks/search/?symbol=${value}`)
      .then(res => {
        console.log(res.data)
        setSearchedStock(
          {
            number: '',
            name: res.data.companyName,
            symbol: res.data.symbol,
            price: res.data.latestPrice
          })
        toggleBuyStockModal()
      })
      .catch(err => {
        console.log(err)
      })
  }

  function updateUserFunds(price) {
    const newFunds = funds - price
    newFunds <= 0 ? alert('insufficient funds') : setFunds(newFunds);
  }

  function buyNewStock(numberShares) {
    // debugger
    const stocksNumber = searchedStock.number + numberShares
    const stockName = searchedStock.name
    const stockSymbol = searchedStock.symbol
    const stockPrice = searchedStock.price

    setHoldings(prevHoldings => {
      const matchingHolding = prevHoldings.find(
        (holding) => holding.symbol === stockSymbol
      );
      if (matchingHolding) {
        const matchIndex = prevHoldings.indexOf(matchingHolding);
        prevHoldings[matchIndex].numberOfStocks = parseInt(prevHoldings[matchIndex].numberOfStocks) + parseInt(stocksNumber);
      } else {
        const newShare = {
          symbol: stockSymbol,
          name: stockName,
          numberOfStocks: stocksNumber,
          price: stockPrice,
          id: uuidv4(),
        };
        prevHoldings.push(newShare);
      }
      return prevHoldings
    })
    updateUserFunds(stockPrice);
  }

  // Set showcases on page
  useEffect(async () => {
    //    debugger
    await axios.get('/api/stocks/showcase', {})
      .then((res) => {
        setShowcases(res.data)
      })
      .catch((err) => {
        console.log("error username response client side", err);
      });
  }, [])

  return (
    <div className="trade-container">
      <UserFunds funds={funds} />
      <BuyModal
        show={isModalBuyStock}
        buyNewStock={buyNewStock}
        toggleBuyStockModal={toggleBuyStockModal}
        searchedStock={searchedStock}
      />
      <FormStocks
        onSearchStockClick={onSearchStockClick}
      />
      <DisplaySearchedStock
        searchedStock={searchedStock}
        buyNewStock={buyNewStock}
        toggleBuyStockModal={toggleBuyStockModal}
      />
      <div className="holdings-container">
        <h1 className="showcase-header">Your current holdings</h1>
        <div className="holding-list">
          {holdings.map(holding => (
            <DisplayHoldings
              holding={holding}
              key={holding.id}
              searchedStock={searchedStock}
            />
          ))}
        </div>
      </div>
      <div className="stocks-showcase">
        <h1 className="showcase-header">Showcase of popular stocks</h1>
        <div className="stocks-list">
          {showcases.map(showcase => (
            <Showcases
              showcase={showcase}
              key={showcase.marketCap}
              onSearchStockClick={onSearchStockClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
