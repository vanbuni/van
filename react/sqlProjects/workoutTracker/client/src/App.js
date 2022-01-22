

import './App.css';
import React, { useState } from 'react';
import axios from 'axios'

function App() {

const [name, setName] = useState('');
const [userList, setUserList] = useState([]);
const [workouts, setWorkouts] = useState([])

const addUser = () => {
  axios.post('http://localhost:3001/createUsers', {
    name: name
  }).then (() =>{
    setUserList([...userList],{
      name: name
    })
  })
}

  const getUsers = () => {
    axios.get('http://localhost:3001/users').then((response) => {
      setUserList(response.data)
      console.log(response.data)

    })
  }

  const getWorkouts = () => {
    axios.get('http://localhost:3001/workouts').then((response) => {
      setWorkouts(response.data)
      console.log(response.data)

    })
  }

// const addWorkout = () => {
//   axios.post('http://localhost:3001/createWorkout',{
//     body_group: body_group,
//     intensity: intensity,
//     user_id: user_id

//   }). then (() =>{
    
//   })
// }


  return (
    
     <div>
     <button onClick={() => getUsers()}>Get Users</button>
      {userList.map((val,key)=>{
        return <h1>{val.name}</h1>
        
       })}
     <button onClick={() => getWorkouts()}>Get Workouts</button>
      {workouts.map((val,key)=>{
        return <> <p>{val.body_group}</p> <p>{val.intensity}</p> <p>{val.user_id}</p></>
        
       })}
      <h5>Add A User</h5>
      <label>Name:</label>
      <input
        type="text"
        onChange={(event)=>{
          setName(event.target.value)
        }}/>
      <button onClick={addUser}>Add User</button>
     </div>
    
  );
}

export default App;
