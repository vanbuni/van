import React, {useContext} from 'react'
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile';
import Public from './components/Public';
import Issues from './components/Issues'
import Navbar from './components/Navbar';
import Header from './components/Header';
import { UserContext } from './context/UserProvider';
import ProtectedRoute from './components/ProtectedRoute';
export default function App() {
  const {token} = useContext(UserContext)
  return (
    <>
    
    <div className="App">
      
      <Navbar/>
      
      <Header/>
     <Switch>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to='/profile'/> : <Auth />}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo='/'
          token={token}
        />
        <Route 
          path="/public"
          component={Public}
          redirectTo='/'
          token={token}
        />
      </Switch>
    </div>
   </>
  );
}


