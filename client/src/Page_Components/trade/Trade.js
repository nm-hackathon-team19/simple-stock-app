import React, { useState, useEffect, useContext } from 'react';
import qa from 'qs';
import './Trade.css'
import { HoldingContext } from '../../HoldingContext'
import { searchForHolding, createHolding, deleteHolding, getHoldings, updateHolding } from '../../crudHoldings.js'
import Recommendations from './Recommendations'
import SelectedHolding from './SelectedHolding'
import Header from './Header'
import Form from './Form'
import Alert from './Alert'
import { withRouter } from 'react-router-dom';

const Trade = (props) => {
  const [holdings, setHoldings] = useState([]);
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

  const handleSearchForHolding = (symbol) => {
    searchForHolding(symbol)
      .then(selectedHolding => setSelectedHolding(selectedHolding))
      .catch(err => console.error('error get holdings', err));
  };

  const renderSearchedHoldingFromPortfolio = () => {
    const queryStrings = qa.parse(
      props.location.search,
      { ignoreQueryPrefix: true });
    if (queryStrings.symbol) {
      handleSearchForHolding(queryStrings.symbol)
    }
  }

  const getHoldingsData = () => {
    getHoldings()
      .then(holdingsData => setHoldings(holdingsData))
      .catch(err => console.error('error get holdings', err));
  }

  useEffect(() => {
    renderSearchedHoldingFromPortfolio();
    getHoldingsData();
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
        <Form handleSearchForHolding={handleSearchForHolding} />
        {selectedHolding ?
          <SelectedHolding
            selectedHolding={selectedHolding}
            buyNewHolding={buyNewHolding}
            sellShares={sellShares}
            updateShares={updateShares}
          />
          : null}
        <Recommendations
          handleSearchForHolding={handleSearchForHolding}
        />
      </div>
    </div>
  )
}

export default withRouter(Trade)