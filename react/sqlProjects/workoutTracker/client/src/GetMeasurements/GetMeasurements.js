import React, {useState} from 'react'
import axios from 'axios'
function GetMeasurements() {
  const [username, setUsername] = useState([])
  const [goal, setGoal] = useState([])
  const getMeasurements = () => {
    axios.get(`http://localhost:3001/getMeasurements/${username}`).then((response) => {
      setGoal(response.data)
      console.log(response.data)
      

    })
  }
  const usersMeasurements = goal.map((measurement)=>{
      
    const newDate = measurement.measurements_date.slice(0,10)
    return(
      <>
        <h3>Measurement Date: {newDate}</h3>
        <table>
      <tr>
        <th>Username</th>
        <th>Weight</th>
        <th>Thigh</th>
        <th>Waist</th>
        <th>Back</th>
        <th>Chest</th>
        <th>Arm</th>
        <th>Neck</th>
        </tr>
        <tr>
        <td>{measurement.username} </td>
        <td>{measurement.weight}LBS</td>
        <td>{measurement.thigh}</td>
        <td>{measurement.waist}</td>
        <td>{measurement.back}</td>
        <td>{measurement.chest}</td>
        <td>{measurement.arm}</td>
        <td>{measurement.neck}</td>
        </tr>
        </table>
        
        </>
    )
})



  return (
    <>
    <input
        type="text"
        placeholder='Username'
        onChange={(event)=>{
          setUsername(event.target.value)
        }}/>
        <button onClick={() => getMeasurements(username)}>Get Workout By User</button>
        {usersMeasurements}
    </>
  )
}

export default GetMeasurements