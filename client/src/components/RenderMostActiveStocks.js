import React, { useEffect, useState } from 'react'
// import { getHoldings } from '../http-utilities/instructionsUtilities'
import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function RenderMostActiveStocks(props) {
  const [shares, setShares] = useState(0);
  const [holdings, setHoldings] = useState([]);
  const [holdingStyleColor, setHoldingStyleColor] = useState('');
  const [positiveSign, setPositiveSign] = useState(false);

  useEffect(() => {

    // getHoldings()
    //   .then(holdingsData => setHoldings(holdingsData))
    //   .catch(err => console.error('error get holdings', err));

    const isHoldingNegativeOrPositive = () => {
      if (String(changePercent).charAt(0) === '-') {
        setHoldingStyleColor('red');
        setPositiveSign(false)
      } else {
        setHoldingStyleColor('green')
        setPositiveSign('+')
      }
    }

    isHoldingNegativeOrPositive();
  }, []);

  // useEffect(() => {
  //   const compareSelectedHoldingToExistingList = () => {
  //     const holdingExist = holdings.find(holding => holding.symbol == props.recommendedHolding.symbol);
  //     if (holdingExist) {
  //       setShares(holdingExist.shares);
  //     }
  //   }

  //   compareSelectedHoldingToExistingList();
  // }, [holdings]);

  const { companyName, latestPrice, changePercent, change, symbol } = props.mostActiveStock;

  return (

    <div className="recommended-holding">
      <div className="selected-holding card mt-3">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        {/* <div className="card-head">
          <h2> {companyName}: {symbol}</h2>
          <Link to={{
            pathname: "/main",
            search: `?symbol=${symbol}`
          }}>
            <button className="btn btn-info">Trade</button>
          </Link>
        </div>
        <hr />
        <div className="card-body">
          <div className="price">
            <strong>Current Price</strong>
            <p className={holdingStyleColor}>${latestPrice.toFixed(2)}</p>
          </div>
          <div className="percent">
            <strong>Percent Change</strong>
            <p className={holdingStyleColor}>{positiveSign}{changePercent.toFixed(3)}%</p>
          </div>
          <div className="change">
            <strong>Daily Gain/Loss</strong>
            <p className={holdingStyleColor}>{positiveSign}${change}</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}


export default RenderMostActiveStocks
