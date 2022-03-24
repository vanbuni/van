import React, {useState} from 'react'
import axios from 'axios'

function GetUsers() {
    const [userList, setUserList] = useState([]);
    

    const getUsers = () => {
        axios.get('http://localhost:3001/users').then((response) => {
          setUserList(response.data)
          console.log(response.data)
          
    
        })
      }
      getUsers()
      

    const user_list =  userList.map((val,key)=>{
        const newDate = val.user_creation.slice(0,10)
      return <table> 
          <tr>
              <th>Name</th>
              <th>Creation Date</th>
              <th>Username</th>
          </tr>
          <tr>
              <td>{val.name}</td>
              <td>{newDate}</td>
              <td>{val.username}</td>
              
          </tr>
      
      </table>
      
     })


  return (    
    <>
    <h3>Current Users</h3>
    <div>{user_list}</div>
    </>
  )
}

export default GetUsers