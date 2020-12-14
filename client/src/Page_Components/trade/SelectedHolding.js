import React, { useState, useContext, useEffect } from 'react'
import { HoldingContext } from '../../HoldingContext'
import BuyModal from './BuyModal';
import SellModal from './SellModal';

function SelectedHolding({ selectedHolding, buyNewHolding, sellShares }) {
  // debugger
  const [isModalBuyStock, setIsModalBuyStock] = useState(false)
  const [shares, setShares] = useState(0);
  const [holdings, setHoldings] = useContext(HoldingContext);

  function toggleBuyStockModal() {
    setIsModalBuyStock(!isModalBuyStock);
  }

  const handleBuyShares = (shares) => {
    buyNewHolding(shares);
    setShares(prevState => prevState + parseInt(shares));
  }

  const handleSellShares = (shares) => {
    sellShares(shares);
    setShares(prevState => prevState - parseInt(shares));
  }

  const compareSelectedHoldingToExisting = () => {
    if (selectedHolding) {
      const holdingExist = holdings.find(holding => holding.symbol == selectedHolding.symbol);
      holdingExist ? setShares(holdingExist.shares) : null;
    }
  }

  useEffect(() => {
    compareSelectedHoldingToExisting();
  }, [selectedHolding]);

  const { companyName, symbol, latestPrice, previousClose, changePercent, change } = selectedHolding;
  return (
    <div className="selected-holding card mt-4">
      <div className="card-head">
        <h2> {companyName}: {symbol}</h2>
        <div className="card-buttons">
          <BuyModal
            show={isModalBuyStock}
            toggleBuyStockModal={toggleBuyStockModal}
            handleBuyShares={handleBuyShares}
            selectedHolding={selectedHolding}
            shares={shares}
          />
          <SellModal
            show={isModalBuyStock}
            toggleBuyStockModal={toggleBuyStockModal}
            handleSellShares={handleSellShares}
            selectedHolding={selectedHolding}
            shares={shares}
          />
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="price">
          <strong>Current Price</strong>
          <p className="mb-0">${latestPrice}</p>
          <small>Previous Closed: ${previousClose} </small>
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
          <p>{shares}</p>
        </div>
      </div>
    </div>
  )
}

export default SelectedHolding