import React, { useState, createContext } from 'react';

export const UserNameContext = createContext();

export const UserNameProvider = (props) => {
  const [userName, setUserName] = useState('')


  return (
    <UserNameContext.Provider value={[userName, setUserName]}>
      {props.children}
    </UserNameContext.Provider>
  )
}





