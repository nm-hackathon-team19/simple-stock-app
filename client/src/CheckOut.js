import React from 'react';
import { withRouter } from 'react-router-dom';

function CheckOut() {
  return (
    <div>
      <h1>
        I am inside the Checkout Component
      </h1>
    </div>
  )
}

export default withRouter(CheckOut)