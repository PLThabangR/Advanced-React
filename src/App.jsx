import { useState } from 'react'
import Dessert from './Rendering/Dessert'
import './App.css'
import Map from './Rendering/Map'
import Bookings from './forms/Bookings'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Map/>
     <Dessert/>
     <Bookings/>
      
    </>
  )
}

export default App
