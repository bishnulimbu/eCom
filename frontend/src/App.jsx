import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const getWeatherData = () => {
    axios.get("http://api.weatherapi.com/v1/current.json?key=88e528f1ad62402897a80054242512&q=Kathmandu&aqi=no")
      .then(function (response) {
        console.log(response)
      })
  }
  // 88e528f1ad62402897a80054242512

  return (
    <>
      <h1>hello! This is the index page.</h1>
      <p>{getWeatherData()}</p>



    </>
  )
}

export default App
