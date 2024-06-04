import { useState } from 'react'
import Dessert from './Rendering/Dessert'
import './App.css'
import Map from './Rendering/Map'
import Bookings from './forms/Bookings'
import UserProvider from './ContextApi/UserProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
   <UserProvider>
   <>
     <Map/>
     <Dessert/>
     <Bookings/>
      
    </>
    </UserProvider>
  )
}

export default App
