import React, { useContext } from "react";
import '../style/Home.css'
import { UserNameContext } from '../context/UserNameContext'

const Welcome = () => {
  const [userName, setUserName] = useContext(UserNameContext)

  return (
    <div id="home">
      <div className="home-content">
        <h1>Welcome {userName}!</h1>
        <p>Experience the thrill of the stock market by utilizing fake money to purchase real stocks and buy or sell shares.</p>
        <p>Search stock symbols and use fake money to trade and test your skills</p>
      </div>
    </div>
  );
};

export default Welcome;
