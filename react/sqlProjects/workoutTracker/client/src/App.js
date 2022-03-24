//npm start to run app

import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import AddUser from './AddUsers/AddUser';
import AddWorkouts from './AddWorkouts/AddWorkouts';
import GetWorkout from './GetWorkouts/GetWorkout';
import GetUsers from './GetUsers/GetUsers';
import GetUserWorkouts from './GetUserWorkouts/GetUserWorkouts';
import Navbar from './Container/Navbar';
import AddMeasurements from './AddMeasurements/AddMeasurements';
import Footer from './Container/Footer';
import GetMeasurements from './GetMeasurements/GetMeasurements';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  const [userList, setUserList] = useState([]);
  
    



  return (
    <Router>
      <>
      <Navbar/>
    <h1>Workout Tracker</h1>
    <div>
      <Switch>
        <Route exact path='/'>
      <AddUser/>
      </Route>
      </Switch>
      <Switch>
        <Route path= '/addWorkout'>
      <AddWorkouts/>
      </Route>
      </Switch>
      <Switch>
        <Route path='/getWorkouts'>
      <GetWorkout/>
      </Route>
      </Switch>
      <Switch>
        <Route path='/getUsers'>
      <GetUsers/>
      </Route>
      </Switch>
      <Switch>
        <Route path='/getUserWorkouts'>
      <GetUserWorkouts/>     
      </Route>
      </Switch>
      <Switch>
        <Route path='/createMeasurements'>
         <AddMeasurements/>     
      </Route>
      </Switch>
      <Switch>
        <Route path="/measurements">
         <GetMeasurements/>     
      </Route>
      </Switch>
    
    
     
       
    </div>
    <Footer/>
    </>
    </Router>
   
 );
}

export default App;


  
  

  
 






