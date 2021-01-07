import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const CurrentHoldings = (props) => {
  const [holdingStyleColor, setHoldingStyleColor] = useState('');
  const [positiveSign, setPositiveSign] = useState(false);

  useEffect(() => {
    isHoldingNegativeOrPositive();
  }, []);

  const isHoldingNegativeOrPositive = () => {
    if (String(percent_change).charAt(0) === '-') {
      setHoldingStyleColor('red')
      setPositiveSign(false)
    } else {
      setHoldingStyleColor('green')
      setPositiveSign('+')
    }
  }

  const { name, symbol, price, percent_change, shares } = props.holding;
  return (
    <div className="selected-holding card mt-4">
      <div className="card-head">
        <h2> {name}: {symbol}</h2>
        <div className="card-buttons">
          <NavLink to={{
            pathname: "/main",
            search: `?symbol=${symbol}`
          }}>
            <button className="btn btn-primary">Trade</button>
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="Holding Value:">
          <strong>Holding Value</strong>
          <p className={holdingStyleColor}>${Number(price * shares).toFixed(2)}</p>
        </div>
        <div className="shares">
          <strong>Shares:</strong>
          <p>{shares}</p>
        </div>
        <div className="last-price">
          <strong>Last Price:</strong>
          <p className={holdingStyleColor}>${price}</p>
        </div>
        <div className="percent-change">
          <strong>Percent Change:</strong>
          <p className={holdingStyleColor}>{positiveSign}{percent_change}%</p>
        </div>
      </div>
    </div >
  )
}

export default CurrentHoldings