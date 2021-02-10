import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CurrentHoldings = ({ holding }) => {
  const [holdingStyleColor, setHoldingStyleColor] = useState('');
  const [positiveSign, setPositiveSign] = useState(false);

  useEffect(() => {
    const isHoldingNegativeOrPositive = () => {
      if (String(percent_change).charAt(0) === '-') {
        setHoldingStyleColor('red');
        setPositiveSign(false);
      } else {
        setHoldingStyleColor('green');
        setPositiveSign('+');
      }
    };
    isHoldingNegativeOrPositive();
  }, []);

  const { name, symbol, price, percent_change, shares, created_at } = holding;

  return (
    <div className="selected-holding card mt-4">
      <div className="card-head">
        <h3>
          {name}: {symbol}
        </h3>
        <div className="card-buttons">
          <Link to={{ pathname: '/main', search: `?symbol=${symbol}` }}>
            <Button variant="primary" size="md">
              Trade
            </Button>
          </Link>
        </div>
      </div>
      <h6 className="ml-2">Date purchased: {created_at}</h6>
      <hr />
      <div className="card-body">
        <div className="Holding Value:">
          <strong>Shares Total Value:</strong>
          <p className={holdingStyleColor}>
            ${Number(price * shares).toFixed(2)}
          </p>
        </div>
        <div className="shares">
          <strong>Number Of Shares:</strong>
          <p>{shares}</p>
        </div>
        <div className="last-price">
          <strong>Current Stock Value:</strong>
          <p className={holdingStyleColor}>${price}</p>
        </div>
        <div className="percent-change">
          <strong>Percent Change:</strong>
          <p className={holdingStyleColor}>
            {positiveSign}
            {percent_change}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentHoldings;
