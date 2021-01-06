import React, { useState, useEffect, useContext } from 'react'
// import { HoldingContext } from '../../HoldingContext'
import { getHoldings, getUserName } from '../../crudHoldings'


function UserInformation() {
  const [holdings, setHoldings] = useState([]);
  const [userName, setUserName] = useState('');

  const getHoldingsData = () => {
    getHoldings()
      .then(holdingsData => setHoldings(holdingsData))
      .catch(err => console.error('error get holdings', err));
  }

  const retrieveUserName = () => {
    getUserName(localStorage.getItem('user_id'))
      .then(userName => setUserName(userName))
      .catch(err => console.error('error get user name', err));
  }

  useEffect(() => {
    getHoldingsData();
    retrieveUserName();
  }, []);

  const holdingValue = holdings.reduce((total, holding) => {
    return total + (holding.shares * holding.price);
  }, 0);


  return (
    <div className="container user-information">
      <h1>Account Balance</h1>
      <h3>User: {userName}</h3>
      <h3>Wallet: ${(1000 - holdingValue).toFixed(1)}</h3>
      <h3>Total Holding Value: ${holdingValue.toFixed(1)} </h3>
    </div>
  )
}

export default UserInformation