import React, { useContext } from "react";
import '../Page_Components/home/Home.css'
import { UserNameContext } from '../UserNameContext'

const Welcome = () => {
  const [userName, setUserName] = useContext(UserNameContext)

  return (
    <div id="home">
      <div className="home-content">
        <h1>Welcome {userName}!</h1>
        <h4>Experience the thrill of the stock market by utilizing fake money to purchase real stocks and buy or sell shares.</h4>
        <h4>Search stock symbols and use fake money to trade and test your skills</h4>
      </div>
    </div>
  );
};

export default Welcome;
