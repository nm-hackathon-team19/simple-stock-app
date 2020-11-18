import React, { useState } from 'react'
import Register from '../../Static_Components/Register'
import Login from '../../Static_Components/Login'
import './Home.css'

export default function Home() {
  const [isModalShow, setModalShow] = useState(false)

  function toggleModal() {

    console.log(isModalShow);
    setModalShow(!isModalShow);
    console.log(isModalShow);

    // e.target.firstElementChild.setAttribute('style', 'display: block')
  }

  return (
    <div id="home">
      <div className="home-content">
        <h1>Fantazy Trading Stocks</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, omnis? Porro repudiandae id iusto voluptate voluptates esse dignissimos placeat, molestias tempora itaque nam nesciunt nulla facere, numquam ipsum aliquid sint.</p>
        <div className="home-buttons-wrapper">
          <button onClick={toggleModal} className="btn">Sign-up</button>
          <button className="btn">Log-in</button>
        </div>
      </div>
      <Register show={isModalShow} toggleModal={toggleModal} />
      <Login />
    </div>
  )
}
