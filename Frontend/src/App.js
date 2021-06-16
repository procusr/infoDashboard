
import './App.css';
import Dashboard from './Dashboard'
import Home from './Home'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router >
      <div >
        <ul className ="App-header">
          <li>
            <Link to="/">All operators status</Link>
          </li>
          <li>
            <Link to="/dashboard">Modify status</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






