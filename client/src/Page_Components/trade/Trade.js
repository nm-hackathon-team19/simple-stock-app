import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
// import Showcases from './Showcases.js'
import RenderSelectedHolding from './RenderSelectedHolding'
// import UserInformation from './UserInformation.js'
// import FormStocks from './FormStocks.js'
// import BuyModal from './BuyModal.js'
import DisplaySearchedStock from './DisplaySearchedStock.js'
import Header from './Header'
import Form from './Form'
import { getHoldings, createHolding } from './dbFunctions.js'

export default function Trade() {
  // const [showcases, setShowcases] = useState([]);
  const [funds, setFunds] = useState(10000);
  const [isModalBuyStock, setIsModalBuyStock] = useState(false)
  const [holdings, setHoldings] = useState([]);
  const [searchedStock, setSearchedStock] = useState([])
  const [selectedHolding, setSelectedHolding] = useState(null);

  function toggleBuyStockModal() {
    setIsModalBuyStock(!isModalBuyStock);
    // debugger
  }

  function setUserWallet(price) {
    const newFunds = funds - price
    newFunds <= 0 ? alert('insufficient funds') : setFunds(newFunds);
  }

  // function setUserSharesAmount() {
  // console.log(holdings);
  // }

  const searchForHolding = async (symbol) => {
    // debugger
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      // const { companyName, latestPrice, changePercent, change } = response.data;
      setSelectedHolding(response.data);
      // debugger
    } catch (err) {
      // debugger
      console.error(err.message)
    }
  }
  // console.log(selectedHolding);

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
        createHolding(newShare);
      }
      return prevHoldings
    })
    setUserWallet(stockPrice);
    // setUserSharesAmount();
  };


  useEffect(() => {
    getHoldings(setHoldings);
    // setUserSharesAmount();
  }, [])

  // Set showcases on page
  // useEffect(async () => {
  //   //    debugger
  //   await axios.get('/api/stocks/showcase', {})
  //     .then((res) => {
  //       setShowcases(res.data)
  //     })
  //     .catch((err) => {
  //       console.log("error username response client side", err);
  //     });
  // }, [])

  return (
    <div className="container">
      <div className="trade-container">
        <Header />
        <Form searchForHolding={searchForHolding} />
        {/* <UserInformation funds={funds} holdings={holdings} /> */}
        {/* <BuyModal
          show={isModalBuyStock}
          buyNewStock={buyNewStock}
          toggleBuyStockModal={toggleBuyStockModal}
          searchedStock={searchedStock}
        /> */}
        {/* <FormStocks
          onSearchStockClick={onSearchStockClick}
        /> */}
        {selectedHolding ? <RenderSelectedHolding holding={selectedHolding} /> : null}
        {/* buyNewStock={buyNewStock} */}
        {/* toggleBuyStockModal={toggleBuyStockModal} */}


        {/* <div className="holdings-container">
          <h1 className="showcase-header">Current holdings</h1>
          <div className="holding-list">
            {holdings.map(holding => (
              <DisplayHoldings
                holding={holding}
                key={holding.id}
                searchedStock={searchedStock}
              />
            ))}
          </div>
        </div> */}
        {/* <div className="stocks-showcase">
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
        </div> */}
      </div>
    </div>
  )
}
