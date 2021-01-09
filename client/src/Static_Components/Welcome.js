import React, { useContext } from "react";
import '../Page_Components/home/Home.css'
import { UserNameContext } from '../UserNameContext'

const Welcome = () => {
  const [userName, setUserName] = useContext(UserNameContext)

  return (
    <div id="home">
      <div className="home-content">
        <h1>Welcome {userName}!</h1>
        <p>Experience the thrill of the stock market by utilizing fake money to purchase real stocks and buy or sell shares.</p>
      </div>
    </div>
  );
};

export default Welcome;
