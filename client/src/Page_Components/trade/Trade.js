import React, { useState, useEffect, useContext } from 'react';
import './Trade.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import RenderRecommendation from './RenderRecommendations'
import RenderSelectedHolding from './RenderSelectedHolding'
import Header from './Header'
import Form from './Form'
import { createHolding } from '../../dbFunctions.js'
import { HoldingContext } from '../../HoldingContext'

export default function Trade() {
  const [recommendedHoldings, setRecommendedHoldings] = useState([]);
  const [holdings, setHoldings] = useContext(HoldingContext);
  const [selectedHolding, setSelectedHolding] = useState(null);

  const searchForHolding = async (symbol) => {
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setSelectedHolding(response.data);
    } catch (err) {
      console.error(err.message)
    }
  }

  function buyNewHolding(shares) {
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
          companyName: selectedHolding.companyName,
          numberOfShares: shares,
          price: selectedHolding.latestPrice,
          change: selectedHolding.change,
          changePercent: selectedHolding.changePercent,
          id: uuidv4(),
        };
        prevHoldings.push(newShare);
        createHolding(newShare);
      }
      return prevHoldings
    })
    // setUserWallet(stockPrice);
    // setUserSharesAmount();
    // console.log(holdings)
  };

  const getRecommendations = async () => {
    await axios.get('/api/stocks/recommendation')
      .then((res) => {
        setRecommendedHoldings(res.data)
      })
      .catch((err) => {
        console.log("error username response client side", err);
      });
  }

  // Set showcases on page
  useEffect(() => {
    getRecommendations();
  }, [])

  return (
    <div className="container">
      <div className="trade-container">
        <Header />
        <Form searchForHolding={searchForHolding} />
        {selectedHolding ? <RenderSelectedHolding holding={selectedHolding} buyNewHolding={buyNewHolding} /> : null}
        <div className="text-center mt-5 h4 font-weight-light">Recommended Stocks</div>
        {recommendedHoldings.map(holding => (
          <RenderRecommendation
            holding={holding}
            key={holding.marketCap}
          />
        ))}
      </div>
    </div>
  )
}
