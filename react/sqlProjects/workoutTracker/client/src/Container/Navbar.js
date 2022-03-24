import React from 'react'
import './container.css'
function Navbar() {
  return (
    <div className='nav'>
        <a href='/' className='home'>HOME</a>
        <a href='/addWorkout'>LOG A WORKOUT</a>
        <a href='/getUserWorkouts'>SEE YOUR WORKOUTS</a>
        <a href='/createMeasurements'>ADD MEASUREMENTS</a>
        <a href="/measurements">YOUR MEASUREMENTS</a>
    </div>
  )
}

export default Navbar