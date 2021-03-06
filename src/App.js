import React from 'react';
import SignIn from './component/signIn';
import Home from './component/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/login';
import CheckOut from './component/AddAdvertisement/checkOut';

function App() {


  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/add'>
          <CheckOut/>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
  
      </Switch>
    </Router>
  );
}

export default App;