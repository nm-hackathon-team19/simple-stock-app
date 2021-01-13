import React, { useState, useEffect, useContext } from 'react'
import { getHoldings } from '../http-utilities/tradeUtilities'
import { UserNameContext } from '../context/UserNameContext'
import { getWallet } from '../http-utilities/portfolioUtilities'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserInformation() {
  const [holdings, setHoldings] = useState([]);
  const [userName, setUserName] = useContext(UserNameContext)
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
    const fetchHoldingsData = () => {
      getHoldings()
        .then(holdingsData => setHoldings(holdingsData))
        .catch(err => console.error('error get holdings', err));
    }

    const fetchWalletData = () => {
      getWallet()
        .then(wallet => setWallet(wallet))
        .catch(err => console.error('error get wallet', err));
    }

    fetchHoldingsData();
    fetchWalletData();
  }, []);

  const holdingValue = holdings.reduce((total, holding) => {
    return total + (holding.shares * holding.price);
  }, 0);

  return (
    <Card className="m-auto w-50" align="center" border="dark">
      <Card.Header className="h4">Account Information</Card.Header>
      <ListGroup variant="flush" className="h5">
        <ListGroup.Item>User: {userName}</ListGroup.Item>
        <ListGroup.Item>Account Balance: ${wallet.toFixed(1)}</ListGroup.Item>
        <ListGroup.Item>Total Holding Value: ${holdingValue.toFixed(1)}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default UserInformation