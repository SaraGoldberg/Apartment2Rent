import React, {useEffect}from 'react';
import SignIn from './component/signIn';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/login';
import SimpleAccordion from './component/simpleAccordion';

function App() {


  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/add'>
          <SimpleAccordion/>
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