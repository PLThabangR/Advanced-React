import { useState } from 'react'
import Dessert from './Rendering/Dessert'
import './App.css'
import Map from './Rendering/Map'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Map/>
     <Dessert/>
      
    </>
  )
}

export default App
