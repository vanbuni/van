import React, {useState} from 'react'
import axios from 'axios'
function GetWorkout() {
    const [workouts, setWorkouts] = useState([])
    
    const getWorkouts = () => {
        axios.get('http://localhost:3001/workouts').then((response) => {
          setWorkouts(response.data)
          console.log(response.data)
    
        })
      }
      getWorkouts()
  return (
    <div>

{/* <button onClick={() => getWorkouts()}>Get Workouts</button> */}
      {workouts.map((val,key)=>{
        const newDate = val.workout_date.slice(0,10)
        return <>
        
        <h4>{val.username} Workout on {newDate}</h4>
          <table>
            <tr>
              <th>Body Group</th>
              <th>Intensity</th>
              <th>Date</th>
              <th>Username</th>
            </tr>
            <td>{val.body_group}</td>
            <td>{val.intensity}</td>
            <td>{newDate}</td>
            <td>{val.username}</td>
          </table>
        
         </>
        
       })}
    </div>
  )
}

export default GetWorkout