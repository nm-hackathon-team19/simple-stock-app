import React, { useState } from 'react'
import BuyModal from './BuyModal';
import SellModal from './SellModal';

function SelectedHolding(props) {
  const [isModalBuyStock, setIsModalBuyStock] = useState(false)

  function toggleBuyStockModal() {
    setIsModalBuyStock(!isModalBuyStock);
  }

  const passPropsData = (shares) => {
    props.buyNewHolding(shares);
  }
  const { companyName, symbol, latestPrice, changePercent, change } = props.selectedHolding;
  // debugger
  return (
    <div className="selected-holding card mt-4">
      <div className="card-head">
        <h2> {companyName}: {symbol}</h2>
        <div className="card-buttons">
          <BuyModal
            show={isModalBuyStock}
            toggleBuyStockModal={toggleBuyStockModal}
            passPropsData={passPropsData}
            selectedHolding={props.selectedHolding}
          />
          <SellModal
            show={isModalBuyStock}
            toggleBuyStockModal={toggleBuyStockModal}
            passPropsData={passPropsData}
            selectedHolding={props.selectedHolding}
          />
          {/* <button className="btn btn-danger"><BuyModal /></button> */}
          {/* <button className="btn btn-danger">Sell</button> */}
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="price">
          <strong>Current Price</strong>
          <p>${latestPrice}</p>
        </div>
        <div className="percent">
          <strong>Percent Change</strong>
          <p>%{changePercent}</p>
        </div>
        <div className="change">
          <strong>Daily Gain/Loss</strong>
          <p>${change}</p>
        </div>
        <div className="shares-held">
          <strong>Shares Held</strong>
          <p>10</p>
        </div>
      </div>
    </div>
  )
}

export default SelectedHolding