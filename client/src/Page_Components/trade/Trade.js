import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import qa from 'qs';
import './Trade.css'
import { HoldingContext } from '../../HoldingContext'
import { createHolding, deleteHolding, getHoldings, updateHolding } from '../../dbFunctions.js'
import Recommendations from './Recommendations'
import SelectedHolding from './SelectedHolding'
import Header from './Header'
import Form from './Form'
import Alert from './Alert'

const Trade = (props) => {
  const [recommendedHoldings, setRecommendedHoldings] = useState([]);
  const [holdings, setHoldings] = useContext(HoldingContext);
  const [selectedHolding, setSelectedHolding] = useState(null);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [sharesPurchased, setSharesPurchased] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  const updateShares = (shares) => {
    setSharesPurchased(shares);
  }

  const toggleAlertState = () => {
    setIsShowAlert(prevState => !prevState);
  }

  const searchForHolding = async (symbol) => {
    try {
      const response = await axios.get(`api/stocks/search/?symbol=${symbol}`);
      setSelectedHolding(response.data);
    } catch (err) {
      console.error('error in search for holding', err.message);
    };
  };

  useEffect(() => {
    const queryStrings = qa.parse(
      props.location.search,
      { ignoreQueryPrefix: true });
    if (queryStrings.symbol) {
      searchForHolding(queryStrings.symbol);
    }
  }, []);

  const sellShares = (shares) => {
    const holding = holdings.find(holding => holding.symbol == selectedHolding.symbol);
    updateHolding(holding.holding_id, holding.shares - shares);
    setAlertMessage('sold');
    toggleAlertState()
    shares == holding.shares &&
      deleteHolding(holding.holding_id);
  }

  const buyNewHolding = (shares) => {
    setHoldings(prevHoldings => {
      const matchingHolding = prevHoldings.find(
        (holding) => holding.symbol === selectedHolding.symbol);
      if (matchingHolding) {
        const matchIndex = prevHoldings.indexOf(matchingHolding);
        prevHoldings[matchIndex].shares = parseInt(prevHoldings[matchIndex].shares) + parseInt(shares);
        updateHolding(matchingHolding.holding_id, matchingHolding.shares);
        setAlertMessage('purchased');
        toggleAlertState();
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
        setAlertMessage('purchased');
        toggleAlertState()
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

  return (
    <div className="container">
      <div className="trade-container">
        <Header />
        {isShowAlert &&
          <Alert
            toggleAlertState={toggleAlertState}
            isShowAlert={isShowAlert}
            selectedHolding={selectedHolding}
            sharesPurchased={sharesPurchased}
            alertMessage={alertMessage}
          />}
        <Form searchForHolding={searchForHolding} />
        {selectedHolding ?
          <SelectedHolding
            selectedHolding={selectedHolding}
            buyNewHolding={buyNewHolding}
            sellShares={sellShares}
            updateShares={updateShares}
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

export default Trade