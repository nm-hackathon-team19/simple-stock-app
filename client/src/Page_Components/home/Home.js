import React from 'react'
import Register from '../../Static_Components/Register'
import Login from '../../Static_Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { Jumbotron, Button } from 'react-bootstrap'



export default function Home() {
  return (
    <div id="home">
      <div className="home-content">
        
      <h1>Welcome to the Fantazy Trading Stocks</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, omnis? Porro repudiandae id iusto voluptate voluptates esse dignissimos placeat, molestias tempora itaque nam nesciunt nulla facere, numquam ipsum aliquid sint.</p>
      <div>

        <Register />
        <Login />
      </div>
      </div>

    </div>
  )
}
