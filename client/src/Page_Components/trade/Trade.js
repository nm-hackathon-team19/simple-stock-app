import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import RenderRecommendation from './RenderRecommendations'
import RenderSelectedHolding from './RenderSelectedHolding'
// import UserInformation from './UserInformation.js'
// import FormStocks from './FormStocks.js'
// import BuyModal from './BuyModal.js'
import DisplaySearchedStock from './DisplaySearchedStock.js'
import Header from './Header'
import Form from './Form'
import { getHoldings, createHolding } from './dbFunctions.js'

export default function Trade() {
  const [recommendedHoldings, setRecommendedHoldings] = useState([]);
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
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setSelectedHolding(response.data);
    } catch (err) {
      console.error(err.message)
    }
  }

  function buyNewHolding(shares) {
    debugger
    setHoldings(prevHoldings => {
      const matchingHolding = prevHoldings.find(
        (holding) => holding.symbol === selectedHolding.symbol
      );
      if (matchingHolding) {
        const matchIndex = prevHoldings.indexOf(matchingHolding);
        prevHoldings[matchIndex].numberOfShares = parseInt(prevHoldings[matchIndex].numberOfShares) + parseInt(shares);
      } else {
        const newShare = {
          symbol: selectedHolding.symbol,
          name: selectedHolding.companyName,
          numberOfShares: shares,
          price: selectedHolding.latestPrice,
          id: uuidv4(),
        };
        debugger
        prevHoldings.push(newShare);
        createHolding(newShare);
      }
      return prevHoldings
    })
    // setUserWallet(stockPrice);
    // setUserSharesAmount();
    console.log(holdings)
  };



  useEffect(() => {
    // getHoldings(setHoldings);
    // setUserSharesAmount();
  }, [])

  // Set showcases on page
  useEffect(async () => {
    // debugger
    await axios.get('/api/stocks/recommendation', {})
      .then((res) => {
        setRecommendedHoldings(res.data)
      })
      .catch((err) => {
        console.log("error username response client side", err);
      });
  }, [])

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
        {selectedHolding ? <RenderSelectedHolding holding={selectedHolding} buyNewHolding={buyNewHolding} /> : null}
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
        <div className="text-center mt-5 h4 font-weight-light">Recommended Stocks</div>
        {recommendedHoldings.map(holding => (
          <RenderRecommendation
            holding={holding}
            key={holding.marketCap}
          // onSearchStockClick={onSearchStockClick}
          />
        ))}
      </div>
    </div>
  )
}
