import React from 'react';
<<<<<<< HEAD
import SignIn from './component/signIn'
import Login from './component/login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
import SignIn from './component/signIn';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from './component/login';
>>>>>>> 24ff78a9d497d94e2f83c460933c4b06c6d04017

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        {/* <Route path='/login'>
          <Login />
        </Route> */}
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;