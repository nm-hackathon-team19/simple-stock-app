import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Trade() {


  // function App() {
  //   const [text, setText] = useState('')
  //   console.log('heyo')
  //   useEffect(() => {
  //     // debugger
  //     axios.get('/api/home', {})
  //       .then((res) => {
  //         // debugger
  //         setText(res.data)
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         console.log("error username response client side", err);
  //       });

  //   }, [])

  return (
    <div>
      <h1>Hello from Trade component</h1>
    </div>
  )
}
