import React, { useState, useEffect, createContext } from 'react';
// import { getUserName } from '../../crudHoldings'

export const UserNameContext = createContext();

export const UserNameProvider = (props) => {
  const [userName, setUserName] = useState('')

  console.log(JSON.parse(localStorage.getItem('data')).name);

  // const retrieveUserName = () => {
  //   getUserName(JSON.parse(localStorage.getItem('data')).id)
  //     .then(userName => setUserName(userName))
  //     .catch(err => console.error('error get user name', err));
  // }

  const retrieveUserName = () => {
    setUserName(JSON.parse(localStorage.getItem('data')).name);
  }

  useEffect(() => {
    retrieveUserName();
  }, [])

  return (
    <UserNameContext.Provider value={[userName, setUserName]}>
      {props.children}
    </UserNameContext.Provider>
  )
}





