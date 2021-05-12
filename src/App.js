import React from 'react';
import SignIn from './component/signIn'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;