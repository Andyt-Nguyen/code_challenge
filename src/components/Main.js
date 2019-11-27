import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import NoPage from './pages/NoPage';
import { Header } from './common';

export default () => (
  <Router>
    <Header title="Weirdness Calcuator" />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/results" component={ResultPage} />
      <Route component={NoPage} />
    </Switch>
  </Router>
)