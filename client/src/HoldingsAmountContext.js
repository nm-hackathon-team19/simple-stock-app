import React, { useState, useEffect, createContext } from 'react';
import { getHoldings } from './crudHoldings'

export const HoldingsAmountContext = createContext();

export const HoldingsAmountProvider = (props) => {
  const [holdings, setHoldings] = useState([]);
  const [holdingsTotalValue, setHoldingsTotalValue] = useState('');
  const [wallet, setWallet] = useState(1000);

  const getHoldingsData = () => {
    getHoldings()
      .then(holdingsData => setHoldings(holdingsData))
      .catch(err => console.error('error get holdings', err));
  }

  useEffect(() => {
    getHoldingsData();
  }, []);

  useEffect(() => {
    setHoldingsTotalValue(holdings.reduce((total, holding) => {
      return total + (holding.shares * holding.price);
    }, 0));
    setWallet(prevState => prevState - holdingsTotalValue);
  }, [holdings])

  return (
    <HoldingsAmountContext.Provider value={[holdingsTotalValue, setHoldingsTotalValue]}>
      {props.children}
    </HoldingsAmountContext.Provider>
  )
}





