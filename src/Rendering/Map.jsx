import React from 'react'

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
const Map = () => {
    const listItems = desertList.map(dessert =>{
        const itemText = `${dessert.title} - ${dessert.price}`
        return <li key={dessert.id}>{itemText}</li>
    })
  return (
    <div >
        <ul>
            {listItems}
        </ul>

    </div>
  )
}

export default Map