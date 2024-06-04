import React from 'react'
import useUser from '../ContextApi/UserProvider'
const desertList = [
    {
        id:'1',
        title:"Lemon Ice cream",
        description:"Mind blowing taste",
        price:"$4.50" },
    {
        id:'2',
        title:"Chocolate mouse",
        description:"Mind blowing taste",
        price:"$15.50" },

    {
        id:'3',
        title:"Top deck",
        description:"Taste for years",
        price:"$6.50" },
            
    {
        id:'4',
        title:"Tiramusic",
        description:"Unexplored flavour",
        price:"$10.50" },]
//Importing the context hook
const {user} = useUser();



 const results = user.map((data,index) =>(
    <h2 key={index}>{data}</h2>
 ))

const Map = () => {
    const listItems = desertList.map(dessert =>{
        const itemText = `${dessert.title} - ${dessert.price}`
        return <li key={dessert.id}>{itemText}</li>
    })
  return (
    <div >
        <ul>
            {listItems}
            {results}

        </ul>

    </div>
  )
}

export default Map