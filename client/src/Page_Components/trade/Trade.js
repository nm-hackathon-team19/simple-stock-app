import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import './Trade.css'
import { HoldingContext } from '../../HoldingContext'
import { createHolding, getHoldings, updateHolding } from '../../dbFunctions.js'
import Recommendations from './Recommendations'
import SelectedHolding from './SelectedHolding'
import Header from './Header'
import Form from './Form'

export default function Trade() {
  const [recommendedHoldings, setRecommendedHoldings] = useState([]);
  const [holdings, setHoldings] = useContext(HoldingContext);
  const [selectedHolding, setSelectedHolding] = useState(null);

  const searchForHolding = async (symbol) => {
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setSelectedHolding(response.data);
      // compareSelectedHoldingToExisting();
    } catch (err) {
      console.error(err.message)
    }
  }

  const compareSelectedHoldingToExisting = () => {
    if (selectedHolding) {
      const holdingExist = holdings.find(holding => holding.symbol == selectedHolding.symbol);
      console.log(holdingExist)
    } else {
      console.log('holding doesnt exist');
    }

  }

  useEffect(() => {
    compareSelectedHoldingToExisting();
  }, [selectedHolding]);

  const buyNewHolding = (shares) => {
    setHoldings(prevHoldings => {
      const matchingHolding = prevHoldings.find(
        (holding) => holding.symbol === selectedHolding.symbol
      );
      if (matchingHolding) {
        const matchIndex = prevHoldings.indexOf(matchingHolding);
        prevHoldings[matchIndex].shares = parseInt(prevHoldings[matchIndex].shares) + parseInt(shares);
        updateHolding(matchingHolding.holding_id, matchingHolding.shares);
      } else {
        const newShare = {
          symbol: selectedHolding.symbol,
          companyName: selectedHolding.companyName,
          shares: shares,
          price: selectedHolding.latestPrice,
          change: selectedHolding.change,
          changePercent: selectedHolding.changePercent,
        };
        prevHoldings.push(newShare);
        createHolding(newShare);
      }
      return prevHoldings
    })
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

  useEffect(() => {
    getRecommendations();
    getHoldings(setHoldings);
  }, [])

  // console.log(holdings)
  return (
    <div className="container">
      <div className="trade-container">
        <Header />
        <Form searchForHolding={searchForHolding} />
        {selectedHolding ?
          <SelectedHolding
            selectedHolding={selectedHolding}
            buyNewHolding={buyNewHolding}
          />
          : null}
        <Recommendations
          recommendedHoldings={recommendedHoldings}
          searchForHolding={searchForHolding}
        />
      </div>
    </div>
  )
}


// Auto complete the name of the company if it exists

  // const [symbol, setSymbol] = useState('');
  // const [shares, setShare] = useState('');
  // const [companyName, setCompanyName] = useState('');

  // const [isCanSearch, setCanSearch] = useState(true);
  // const timeoutRef = useRef(null);

  // function onSearchSymbol(e) {
  //   setCanSearch(prevState => prevState = false);
  //   setSymbol(e.target.value);
  // }

  // useEffect(() => {
  //   if (timeoutRef.current !== null) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   if (isCanSearch) performApiCall();

  //   timeoutRef.current = setTimeout(() => {
  //     timeoutRef.current = null;
  //     setCanSearch(true);
  //   }, 1000);
  // }, [isCanSearch]);


  // const performApiCall = async () => {
  //   try {
  //     const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
  //     setCompanyName(response.data.companyName);
  //     console.log(response.data.companyName)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }