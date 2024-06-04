import React,{useRef,useState} from 'react'

function Bookings() {
   // const inputRef = useRef(null); 
   const [value, setValue] = useState(""); 

    const handleChange = (e) => { 
     // const inputValue = inputRef.current.value; 
      // Do something with the value 
      e.preventDefault()
      setValue(e.target.value) 
      console.log(value)
    } 


  return (
    <>
     <form> 
     <input  type="text" value={value}  onChange={handleChange} placeholder='Enter name'/> 
   </form>
    
    
    </>
  )
}

export default Bookings