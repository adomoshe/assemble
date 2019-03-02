import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LogIn from './pages/LogIn';
import Create from './pages/create/Create';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/create" component={Create} />
      </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
