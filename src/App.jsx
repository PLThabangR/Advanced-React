import { useState } from 'react'
import Dessert from './Rendering/Dessert'
import './App.css'
import Map from './Rendering/Map'
import Hooks from './hooks/Hooks'
import Bookings from './forms/Bookings'
import Goal from './hooks/Goal'
//import UserProvider from './ContextApi/UserProvider'




function App() {
  const [count, setCount] = useState(0)

  return (

   <>
     <Map/>
     <Dessert/>
     <Bookings/>
     <Hooks/>
     <Goal/>
      
    </>
    
  )
}

export default App
