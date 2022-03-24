import React, {useState} from 'react'
import axios from 'axios'
function AddWorkouts() {
    const [userList, setUserList] = useState([]);
    const [username, setUsername] = useState('');
    const [bodyGroup, setBodyGroup] = useState('');
    const [intensity, setIntensity] = useState('');
    const [edit, setEdit] = useState(false)

    const clearInputs = () =>{
      window.location.reload(false);
    }
    


    const addWorkout = () => {
        console.log(userList)
        axios.post('http://localhost:3001/createWorkout', {
          body_group: bodyGroup,
          intensity: intensity,
          username: username
        }).then ((err) =>{
          
          console.log(err)
          setEdit(!edit)
          
          
          setTimeout(() => setEdit(false), 5000)
          setTimeout(() => clearInputs(), 5000)
          
          
          
        })
      }
  return (
      <>
    
      {edit ? (
        <>
        <h5>Worked out has been logged</h5>
        </>
      ):(
        <>
        <div id='addUserWorkouts'>
    <h5>Add A Workout</h5>
    
    <input
      type="text"
      placeholder='Body Group'
      onChange={(event)=>{
        setBodyGroup(event.target.value)
      }}/>
    
    <input
      type="number"
      placeholder='Intensity'
      onChange={(event)=>{
        setIntensity(event.target.value)
      }}/>
    
    <input
      type="text"
      placeholder='Username'
      onChange={(event)=>{
        setUsername(event.target.value)
      }}/>
    <button onClick={addWorkout}>Add A Workout</button>
      </div>
        
        </>
      )}

      </>
  )
}

export default AddWorkouts