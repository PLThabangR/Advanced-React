import {useReducer} from 'react'

const reducer =(state,action) =>{
    //Two actions
    if(action.type === 'buy_ingredients') return {money :state.money -10};
    if(action.type === 'sell_meal') return {money :state.money +10}
    if(action.type === 'celebrity_visit') return {money :state.money +500}
    return state;
}

const UseReducer = () => {

    const initialState ={money:100}
    const [state,dispatch] = useReducer(reducer,initialState)


  return (
     <>
     <h1>Basic Reducer example</h1>
     <h2>Wallet: {state.money}</h2>
    <div>
        <button onClick={()=>dispatch({type:'buy_ingredients'})}>Shopping for veggies</button>
        <button onClick={()=>dispatch({type:'buy_ingredients'})}>Serve customer a meal</button>
        <button onClick={()=>dispatch({type:'celebrity_visit'})}>celebrity visit</button>


    </div>
     
     </>
  )
 }

export default UseReducer   