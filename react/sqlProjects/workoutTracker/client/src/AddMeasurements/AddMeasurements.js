import React,{useState} from 'react'
import axios from 'axios'
function AddMeasurements() {
const [weight, setWeight] = useState('')
const [thigh, setThigh] = useState('')
const [waist, setWaist] = useState('')
const [back, setBack] = useState('')
const [chest, setChest] = useState('')
const [arm, setArms] = useState('')
const [neck, setNeck] = useState('')
const [username, setUsername] = useState('')
const [edit, setEdit] = useState(false)

const addMeasurements = () =>{
axios.post('http://localhost:3001/createMeasurements',{
    weight: weight,
    thigh: thigh,
    waist: waist,
    back: back,
    chest: chest,
    arm: arm,
    neck: neck,
    username : username
    
}).then((err)=>{
    setEdit(!edit)
    console.log(err);
    setTimeout(() => setEdit(false), 5000)
    setTimeout(() => setWeight(''), 10)
    setTimeout(() => setThigh(''), 10)
    setTimeout(() => setWaist(''), 10)
    setTimeout(() => setBack(''), 10)
    setTimeout(() => setChest(''), 10)
    setTimeout(() => setArms(''), 10)
    setTimeout(() => setNeck(''), 10)
    setTimeout(() => setUsername(''), 10)
})
}
  return (
    <>
    
    
    {edit ? (
        <>
        <h4>Measurements have been added</h4>
        </>
    ): (
        <>
        <h4>Add Measurements</h4>
        <input
     type='text'
     placeholder='Username'
     value={username}
     onChange = {(event)=>{
         setUsername(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Weight'
     value={weight}
     onChange = {(event)=>{
         setWeight(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Waist'
     value={waist}
     onChange = {(event)=>{
         setWaist(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Thigh'
     value={thigh}
     onChange = {(event)=>{
         setThigh(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Back'
     value={back}
     onChange = {(event)=>{
         setBack(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Chest'
     value={chest}
     onChange = {(event)=>{
         setChest(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Arms'
     value={arm}
     onChange = {(event)=>{
         setArms(event.target.value)
     }}/>
     <br/>
    <input
     type='number'
     placeholder='Neck'
     value={neck}
     onChange = {(event)=>{
         setNeck(event.target.value)
     }}/>
     <br/>
     <button onClick={() => addMeasurements()}>Add Measurements</button>
        
        </>
    )}
    </>
  )
}

export default AddMeasurements