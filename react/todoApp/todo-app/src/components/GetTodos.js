import axios, { Axios } from 'axios'
import React from 'react'

function GetTodos() {
    axios.get("http://api.bryanuniversity.edu/lavanbradley/list")
    .then((response)=>{
        console.log(response)
    })
  return (
    <></>
  )
}

export default GetTodos