import React, { useState, useEffect, useContext } from 'react'
import { HoldingContext } from '../../HoldingContext'


function UserInformation() {
  const [wallet, setWallet] = useState(1000);
  const [totalHoldingAmount, setTotalHoldingAmount] = useState(0);
  const [holdings, setHoldings] = useContext(HoldingContext);


  const calculateFunds = () => {
    console.log('beggining calculatorFunds');
    let tempCalc = 0
    holdings.forEach(holding => {
      // console.log(holding);
      tempCalc += holding.price * holding.shares
    });
    console.log('end calculatorFunds', holdings);
    setWallet(prevState => prevState - tempCalc);
    setTotalHoldingAmount(tempCalc);
  };

  useEffect(() => {
    console.log('inside useEffect', holdings);
    calculateFunds();
    // return () => {
    //   console.log('clean up', holdings);
    // }
  }, [holdings]); // [] ==> 2 shares on facebook ...

  return (
    <div className="container user-information">
      <h1>Account Balance</h1>
      <h3>User: John Doe</h3>
      <h3>Wallet: ${wallet.toFixed(1)} </h3>
      <h3>Total Holding Value: ${totalHoldingAmount.toFixed(1)} </h3>
    </div>
  )
}

export default UserInformation