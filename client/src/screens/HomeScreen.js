import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import WelcomePage from '../components/WelcomePage'

const HomeScreen = () => {
  if (!localStorage.getItem('data')) {
    return (
      <div id="home">
        <div className="home-content mt-5 h2 font-weight-light">
          <h1 className="display-4 mb-5 home-header">Welcome to Fantasy Stocks Trading!</h1>
          <p>Experience the thrill of the stock market by utilizing fake money to purchase real stocks and buy or sell shares.
          Search stock symbols and use fake money to trade and test your skills.</p>
          <p>Before you start, you must first register so the system can identify who you are.</p>
          <div className="home-buttons-wrapper">
            <Register />
            <Login />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <WelcomePage />
    )
  }
}

export default HomeScreen
