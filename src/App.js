import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './portfolio.jsx'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Portfolio />} />
      </Switch>
    </Router>
  );
}

export default App;
