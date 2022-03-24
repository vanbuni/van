import React, { useState } from 'react';
import axios from 'axios'

function AddUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [userList, setUserList] = useState([]);
    const [edit, setEdit] = useState(false)
    const addUser = () => {
        console.log(userList)
        axios.post('http://localhost:3001/createUsers', {
          name: name,
          username: username
        }).then ((err) =>{
          setEdit(!edit)  
          
          setTimeout(() => setEdit(false), 5000)
          setTimeout(() => setName(''), 5000)
          setTimeout(() => setUsername(''), 5000)
          console.log(err)
          setUserList([...userList],{
            name: name,
            username: username
          })
          
          console.log(userList)
        })
      }

  return (
    <>
    <div id='addUser'>
        <h3 id='userHeader'>Add A User</h3>
      <input
      id='userInput'
        type="text"
        placeholder='Name'
        value={name}
        onChange={(event)=>{
          setName(event.target.value)
        }}/>
      <input
      id='usernameInput'
        type="text"
        placeholder='User Name'
        value={username}
        onChange={(event)=>{
          setUsername(event.target.value)
        }}/>
      <button id='userButton' onClick={() => addUser()}>Add A User</button>
      <h5 className='newMember'></h5>
     
      </div>
      {!edit ? (
        <>
        
        </>
      ):(
        <>
        <h5>{name} has been added! Save your Username: {username}</h5>
        
        </>
      )}
      </>
      
      
  )
}

export default AddUser