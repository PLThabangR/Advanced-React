import { useState } from "react"; 
 import React from 'react'
 
 const hooks = () => {
    const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
    console.log(greeting, setGreeting); 
  
    const [greetingString, setGreetingString] = useState(""); 
    console.log(greetingString, setGreetingString); 
   
    function updateGreetingObject() { 
      setGreeting({ greet: "Hello, World-Wide Web" }); 
    } 
    function updateGreetingString() { 
        setGreetingString("Hello, World-Wide Web from string" ); 
    } 
  
   
    return ( 
      <div> 
        <h1>{greeting.greet}</h1> 
        <button onClick={updateGreetingObject}>Update greeting Object</button> 
          <h></h>
        <h1>{greetingString}</h1> 
        <button onClick={updateGreetingString}>Update greeting String</button> 
      </div> 
    ); 
 }
 
 export default hooks