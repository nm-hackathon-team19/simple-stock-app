import React, { useState, useEffect, createContext } from 'react';
import { getHoldings } from './crudHoldings'
export const HoldingsAmountContext = createContext();

export const HoldingsAmountProvider = (props) => {
  const [holdings, setHoldings] = useState([]);
  const [holdingsAmount, setHoldingsAmount] = useState('');

  const getHoldingsData = () => {
    getHoldings()
      .then(holdingsData => setHoldings(holdingsData))
      .catch(err => console.error('error get holdings', err));
  }

  useEffect(() => {
    getHoldingsData();
  }, []);

  useEffect(() => {
    setHoldingsAmount(holdings.reduce((total, holding) => {
      return total + (holding.shares * holding.price);
    }, 0))
  }, [holdings])

  return (
    <HoldingsAmountContext.Provider value={[holdingsAmount, setHoldingsAmount]}>
      {props.children}
    </HoldingsAmountContext.Provider>
  )
}





