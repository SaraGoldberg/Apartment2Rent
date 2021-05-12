import React from 'react';
import SignIn from './component/signIn'
// import { Router, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
                                                                                                                                              </Route>
      </Switch>
    </Router>
  );
}

export default App;