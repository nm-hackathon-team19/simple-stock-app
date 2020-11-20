import React from 'react'

export default function UserFunds(props) {
  const { funds } = props
  return (
    <div>
      <h1>User's Current Funds: {funds} </h1>
    </div>
  )
}
