import React, { useState, useEffect } from 'react';
import './Trade.css'
import axios from 'axios'
import StocksShowcase from './StocksShowcase.js'
import UserHoldings from './UserHoldings.js'

export default function Trade() {
  const [showcases, setShowcases] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [funds, setFunds] = useState(1000);

  function purchaseStock(price, sharesNumber, company, symbol) {
    updateUserShares(sharesNumber, company, symbol)
    updateUserFunds(price)
  }

  function updateUserShares(number, company, symbol) {

    const newShare = {
      symbol: symbol,
      companyName: company,
      sharesNum: number
    }

    setHoldings(
      holdings.map(item =>
        //  debugger
        item.symbol === newShare.symbol
          ? { ...item, [item.sharesNum]: item.sharesNum + newShare.sharesNum }
          : null
        //  debugger
      ))


    setHoldings([...holdings, newShare])
    // for (const holding of holdings) {
    //   if (holding.symbol == newShare.symbol) {
    //     for (let i = 0; holdings.length > i; i++) {
    //       if (holdings[i].symbol == holding.symbol) {

    // setHoldings(holdings.map(item => ))
    //     prevState => ({
    //     holdings: prevState.map(hold => {
    //       if (hold.companyName === newShare.companyName) {
    //         hold.sharesNum += newShare.sharesNum
    //       }
    //     })
    //     [holdings]
    //   }))
    //   // debugger
  }

  // setHoldings(prevState => ({
  //   holdings: prevState.holdings.map(
  //     holding => holding.symbol === newShare.symbol ? { ...holding, sharesNum: holding.sharesNum + newShare.sharesNum } : el
  //   )
  // }))

  // setHoldings(...holdings, holdings[i].sharesNum = holdings[i].sharesNum + newShare.sharesNum)


  // holdings[i].sharesNum += newShare.sharesNum
  // setHoldings(holdings => [...holdings, holdings[i].sharesNum += newShare.sharesNum])
  //       }
  //     }
  //   }
  // }



  console.log(holdings)

  function updateUserFunds(price) {
    // console.log('price:', price)
  }
  // console.log(holdings)

  useEffect(() => {
    axios.get('/api/stocks/showcase', {})
      .then((res) => {
        setShowcases(res.data)
      })
      .catch((err) => {
        console.log("error username response client side", err);
      });
  }, [])

  const showcaseList = showcases.map(showcase =>
    <StocksShowcase
      showcase={showcase}
      key={showcase.marketCap}
      purchaseStock={purchaseStock}
    // updateUserFunds={updateUserFunds}
    />)

  const holdingList = holdings.map(holding =>
    <UserHoldings holding={holding} />)

  return (
    <div className="trade-container">
      <div className="holdings-container">
        <h1 className="showcase-header">Your current holdings</h1>
        {holdingList}
      </div>
      <div className="stocks-showcase">
        <h1 className="showcase-header">Showcase of popular stocks</h1>
        <div className="stocks-list">
          {showcaseList}
        </div>
      </div>
    </div>
  )
}
