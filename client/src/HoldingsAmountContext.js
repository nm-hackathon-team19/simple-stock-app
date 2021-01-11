// import React, { useState, useEffect, createContext } from 'react';
// import { getHoldings } from './crudHoldings'

// export const HoldingsAmountContext = createContext();

// export const HoldingsAmountProvider = (props) => {
//   const [holdings, setHoldings] = useState([]);
//   const [holdingsTotalValue, setHoldingsTotalValue] = useState('');
//   const [wallet, setWallet] = useState(1000); // 900

//   const getHoldingsData = () => {
//     getHoldings()
//       .then(holdingsData => setHoldings(holdingsData))
//       .catch(err => console.error('error get holdings', err));
//   }


//   useEffect(() => {
//     getHoldingsData();
//   }, []);

//   useEffect(() => {
//     setHoldingsTotalValue(holdings.reduce((total, holding) => {
//       return total + (holding.shares * holding.price);
//     }, 0));
//     setWallet(wallet - holdingsTotalValue);
//   }, [holdings])

//   console.log('wallet', wallet);
//   console.log('holdingsTotalValue', holdingsTotalValue);

//   return (
//     <HoldingsAmountContext.Provider value={[wallet, setWallet]}>
//       {props.children}
//     </HoldingsAmountContext.Provider>
//   )
// }
