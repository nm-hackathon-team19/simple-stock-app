import React, { useState, useEffect } from 'react'

function UserInformation({ holdings }) {
  const [funds, setFunds] = useState(100000);
  const [wallet, setWallet] = useState(0);

  const calculateFunds = () => {
    let funds = 0
    holdings.forEach(holding => {
      funds += holding.price * holding.shares
    });
    setFunds(prevState => prevState - funds);
    setWallet(funds);
  }

  useEffect(() => {
    calculateFunds();
  }, [holdings]);

  return (
    <div className="container user-information">
      <h1>Account Balance</h1>
      <h3>User: John Doe</h3>
      <h3>Total Holding Value: ${wallet} </h3>
      <h3>Wallet: ${funds} </h3>
    </div>
  )
}

export default UserInformation