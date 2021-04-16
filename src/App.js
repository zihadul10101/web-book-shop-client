import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
  
     <Router>
     
     <Header></Header>
     
      <Switch>
        
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/order">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/admin">
       <Admin></Admin>
        </PrivateRoute>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path="/bookDetail/:_id">
          <CheckOut></CheckOut>
        </PrivateRoute>
       
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
