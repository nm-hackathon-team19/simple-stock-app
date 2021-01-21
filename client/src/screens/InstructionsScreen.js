import React, { useEffect, useState } from 'react'
import HeaderInstructions from '../components/headers/HeaderInstructions'
import MostActiveStocks from '../components/MostActiveStocks'
import InstructionsGuide from '../components/InstructionsGuide'
import { UserNameContext } from '../context/UserNameContext'

const InstructionsScreen = () => {

  return (
    <div className="instructions-screen">
      <HeaderInstructions />
      <section className="instructions-guide mt-3 container">
        <InstructionsGuide />
      </section>
      <MostActiveStocks />
    </div>
  )
}

export default InstructionsScreen
