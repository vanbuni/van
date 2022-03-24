import React, {useState} from 'react'
import axios from 'axios'

function GetUserWorkouts() {
const [username, setUsername] = useState([]);
const [userWorkouts, setUserWorkouts] = useState([])
// const [workout_id, setWorkout_id] = useState('')
const [edit, setEdit] = useState(false)


const getUsersWorkouts = (username) => {
    axios.get(`http://localhost:3001/userWorkouts/${username}`).then((response) => {
      setUserWorkouts(response.data)
      console.log(response.data)
      setEdit(!edit)  
    })
  }
  const deleteWorkout = (workout_id) =>{
    axios.delete(`http://localhost:3001/deleteWorkout/${workout_id}`).then(()=>{
      // setUserWorkouts(response.data)
      
      setUsername(username)
    })
    getUsersWorkouts(username)
  }
      
      
      



  const sessions = userWorkouts.map((session)=>{
      
      const newDate = session.workout_date.slice(0,10)
      return(
        <>
          <h3>User: {session.username} Workout's</h3>
          <table>
        <tr>
          <th>Body Group</th>
          <th>Intensity</th>
          <th>Date</th>
          </tr>
          <tr>
          <td>{session.body_group}</td>
          <td>{session.intensity}</td>
          <td>{newDate}</td>
          </tr>
          </table>
          <button onClick={() => deleteWorkout(session.workout_id)}>Delete Workout</button>
          </>
      )
  })

  return (
    <div>
          <label>Username:</label>
      <input
        type="text"
        placeholder='Username'
        onChange={(event)=>{
          setUsername(event.target.value)
        }}/>
        <button onClick={() => getUsersWorkouts(username)}>Get Workout By User</button>
        {edit ? (
            <div>{sessions}</div>
        ):(
            <>
            
            </>
        )
        
        
        }




      
        
    </div>
  )
}

export default GetUserWorkouts