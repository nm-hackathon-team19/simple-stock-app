import React, { useState, useEffect, useContext } from 'react'
// import { HoldingContext } from '../../HoldingContext'
import { getHoldings, getUserName } from '../../dbFunctions'


function UserInformation() {
  // const [wallet, setWallet] = useState(1000);
  // const [totalHoldingAmount, setTotalHoldingAmount] = useState(0);
  // const [holdings, setHoldings] = useContext(HoldingContext);
  const [holdings, setHoldings] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getHoldings()
      .then(holdingsData => setHoldings(holdingsData))
      .catch(function (err) { console.error('error get holdings', err) });
    getUserName(localStorage.getItem('user_id'))
      .then(userName => setUserName(userName))
      .catch(function (err) { console.error('error get user name', err) });
  }, []);

  // const calculateFunds = () => {
  //   console.log('beggining calculatorFunds');
  //   let tempCalc = 0
  //   holdings.forEach(holding => {
  //     // console.log(holding);
  //     tempCalc += holding.price * holding.shares // 127 * 2 = 255
  //   });
  //   console.log('end calculatorFunds', holdings);
  //   setWallet(prevState => prevState - tempCalc); // 1000 - 255 = 744.6 2 time: 744.6 - 255 = 
  //   setTotalHoldingAmount(tempCalc);
  // };

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