import React, { useState, createContext } from 'react';

export const HoldingContext = createContext();

export const HoldingProvider = (props) => {
  const [holdings, setHoldings] = useState([])

  return (
    <HoldingContext.Provider value={[holdings, setHoldings]}>
      {props.children}
    </HoldingContext.Provider>
  )
}





