import React from 'react'
import BuyModal from './BuyModal'

export default function UserInformation(props) {
  const { funds } = props

  // const handleProps = (symbol, shares) => {
  //   console.log(symbol);
  //   console.log(shares);

  // function handleClick() {
  //   console.log(props)
  //   props.show()
  // }

  return (
    <div className="container user-information">
      <h1>User Information</h1>
      <h3>User: John Doe</h3>
      <h3>Wallet: ${funds} </h3>
      <h3>Holdings: $50 </h3>
      <BuyModal />
    </div>
  )
}

