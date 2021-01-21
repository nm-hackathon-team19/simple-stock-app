import React, { useContext } from 'react'
import { Jumbotron, Button, ListGroup } from 'react-bootstrap'
import { UserNameContext } from '../context/UserNameContext'
import { BiRightArrow } from 'react-icons/bi'

const InstructionsGuide = () => {
  const [userName, setUserName] = useContext(UserNameContext)

  return (
    <Jumbotron>
      <h3>Hi {userName}, welcome to the beginners guide to the world of stocks exchange.</h3>
      <ListGroup variant="flush">
        <ListGroup.Item><BiRightArrow className="text-success" />Cras justo odio</ListGroup.Item>
        <ListGroup.Item><BiRightArrow className="text-success" />Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item><BiRightArrow className="text-success" />Morbi leo risus</ListGroup.Item>
        <ListGroup.Item><BiRightArrow className="text-success" />Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
      <p>
        You don't need to be rich, famous or have a maths PhD to buy shares
  </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default InstructionsGuide
