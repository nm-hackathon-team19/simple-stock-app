import React, { useState } from 'react'
import Register from '../../Static_Components/Register'
import Login from '../../Static_Components/Login'
import './Home.css'

export default function Home() {
  const [isModalRegisterShow, setModalRegisterShow] = useState(false)
  const [isModalLoginShow, setModalLoginShow] = useState(false)

  function toggleRegisterModal() {
    setModalRegisterShow(!isModalRegisterShow);
  }

  function toggleLoginModal() {
    setModalLoginShow(!isModalLoginShow);
  }

  return (
    <div id="home">
      <div className="home-content">
        <h1>Fantazy Trading Stocks</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, omnis? Porro repudiandae id iusto voluptate voluptates esse dignissimos placeat, molestias tempora itaque nam nesciunt nulla facere, numquam ipsum aliquid sint.</p>
        <div className="home-buttons-wrapper">
          <Register />
          <button onClick={toggleLoginModal} className="btn btn-info">Login</button>
        </div>
      </div>

      <Login show={isModalLoginShow} toggleModal={toggleLoginModal} />
    </div>
  )
}
