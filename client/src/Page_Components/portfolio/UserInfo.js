import React, { useState, useEffect, useContext } from 'react'
import { UserNameContext } from '../../UserNameContext'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { HoldingsAmountContext } from '../../HoldingsAmountContext';

function UserInformation() {
  const [userName, setUserName] = useContext(UserNameContext)
  const [holdingsTotalValue, setHoldingsTotalValue] = useContext(HoldingsAmountContext)
  const [wallet, setWallet] = useContext(HoldingsAmountContext)

  console.log(wallet);
  console.log(holdingsTotalValue);

  return (
    <Card style={{ width: '100%' }} align="center">
      <Card.Header className="h4">Account Information</Card.Header>
      <ListGroup variant="flush" className="h5">
        <ListGroup.Item>User: {userName}</ListGroup.Item>
        <ListGroup.Item>Account Balance: ${(1000 - holdingsTotalValue).toFixed(1)}</ListGroup.Item>
        <ListGroup.Item>Total Holding Value: ${holdingsTotalValue}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
};


export default UserInformation