import React, { useState, useEffect, useContext } from 'react'
import { getHoldings } from '../../crudHoldings'
import { UserNameContext } from '../../UserNameContext'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { HoldingsAmountContext } from '../../HoldingsAmountContext';

function UserInformation() {
  const [holdings, setHoldings] = useState([]);
  const [userName, setUserName] = useContext(UserNameContext)
  const [holdingsAmount, setHoldingsAmount] = useContext(HoldingsAmountContext)

  console.log(holdingsAmount)

  // const getHoldingsData = () => {
  //   getHoldings()
  //     .then(holdingsData => setHoldings(holdingsData))
  //     .catch(err => console.error('error get holdings', err));
  // }

  // useEffect(() => {
  //   getHoldingsData();
  // }, []);

  // const holdingValue = holdings.reduce((total, holding) => {
  //   return total + (holding.shares * holding.price);
  // }, 0);


  return (
    <Card style={{ width: '100%' }} align="center">
      <Card.Header className="h4">Account Information</Card.Header>
      <ListGroup variant="flush" className="h5">
        <ListGroup.Item>User: {userName}</ListGroup.Item>
        <ListGroup.Item>Account Balance: ${1000 - holdingsAmount}</ListGroup.Item>
        <ListGroup.Item>Total Holding Value: ${holdingsAmount}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default UserInformation