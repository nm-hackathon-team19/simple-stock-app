import React from 'react'
import HeaderInstructions from '../components/headers/HeaderInstructions'
import MostActiveStocks from '../components/MostActiveStocks'
import InstructionsGuide from '../components/InstructionsGuide'
import BeginnersInfo from '../components/BeginnersInfo'
import '../style/instructions.css'
import '../style/mobile.css'

const InstructionsScreen = () => {
  return (
    <div className="instructions-screen">
      <HeaderInstructions />
      <InstructionsGuide />
      <BeginnersInfo />
      <MostActiveStocks />
    </div>
  )
}

export default InstructionsScreen
