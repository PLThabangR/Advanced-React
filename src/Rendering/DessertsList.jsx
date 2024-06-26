import React from 'react'

const DessertsList = (props) => {
    //Filter first and sort using method chaining
    const lowCaloriesDesserts = props.data 
    .filter((dessert) => { 
      return dessert.calories < 500; 
    }).sort((a, b) => { 
        return a.calories - b.calories; 
      })
      .map((dessert) => { 
        return ( 
          <li> 
            {dessert.name} - {dessert.calories} cal 
          </li> 
        ); 
      }); 
    //


    return (
    <div>
        <ul>{lowCaloriesDesserts}</ul>
    </div>
  )
}

export default DessertsList