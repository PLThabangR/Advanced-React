import {useState} from 'react'

function GoalForm(props){
const [formData,setFormData] = useState({goal:"",by:""})

function changeHandler(e){
    setFormData({...formData,[e.target.name]:e.target.value})
}

function submitHandler(e){
    e.preventDefault();
props.onAdd(formData)
setFormData({goal:"",by:""})
}

return (
    <>
    <h1>My Little Lemon Goals</h1>
    <form onSubmit={submitHandler}>
    <input type="text" name="goal" placeholder='Goal' value={formData.goal} onChange={changeHandler} />
    <input type="text" name="by" placeholder='By' value={formData.by} onChange={changeHandler} />
    <button>Submit goal</button>
    </form>
    </>
)

}//End of Goal form

//List of Goal function
function ListOfGoals(props){


    return(
        <>
        <div>
        <ul>
         
        {props.allGoals.map( (g)=>
        <li>
        <span>My goal is to {g.goal}, by {g.by}</span>
        </li>

        )}

        </ul>

        </div>
        </>
    )
}



const Goal = () => {
    const [allGoals,updateGoals]= useState([])
    function addGoal(goal){
        updateGoals([...allGoals,goal])
    }
  return (
    <>
    <GoalForm onAdd={addGoal}/>
    <ListOfGoals allGoals={allGoals}/>
    
    </>
  )
}

export default Goal