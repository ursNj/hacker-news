import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
