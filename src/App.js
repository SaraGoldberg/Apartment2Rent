import React from 'react';
import SignIn from './component/signIn';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/login';
import AddAsset from './component/addAsset';


function App() {
  return (

    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/add'>
          <AddAsset/>
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