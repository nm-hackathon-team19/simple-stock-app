import React, { useState, useEffect } from 'react'

function UserInformation({ holdings }) {
  const [wallet, setWallet] = useState(1000);
  const [totalHoldingAmount, setTotalHoldingAmount] = useState(0);

  const calculateFunds = () => {
    let tempCalc = 0
    holdings.forEach(holding => {
      tempCalc += holding.price * holding.shares
    });
    setWallet(prevState => prevState - tempCalc);
    setTotalHoldingAmount(tempCalc);
  };

  useEffect(() => {
    console.log(wallet);
    console.log(totalHoldingAmount);
    // debugger
  }, [wallet])

  useEffect(() => {
    calculateFunds();
  }, [holdings]);

  return (
    <div className="container user-information">
      <h1>Account Balance</h1>
      <h3>User: John Doe</h3>
      <h3>Total Holding Value: ${totalHoldingAmount.toFixed(1)} </h3>
      <h3>Wallet: ${wallet.toFixed(1)} </h3>
    </div>
  )
}

export default UserInformation