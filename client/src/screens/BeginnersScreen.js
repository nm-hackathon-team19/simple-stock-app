import React from 'react';
import HeaderInstructions from '../components/headers/HeaderInstructions';
import MostActiveStocks from '../components/MostActiveStocks';
import BeginnersHero from '../components/BeginnersHero';
import BeginnersInfo from '../components/BeginnersInfo';

const BeginnersScreen = () => {
  return (
    <div className="instructions-screen">
      <HeaderInstructions />
      <BeginnersHero />
      <BeginnersInfo />
      <MostActiveStocks />
    </div>
  );
};

export default BeginnersScreen;
