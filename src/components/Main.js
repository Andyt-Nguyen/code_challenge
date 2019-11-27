import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import { Header } from './common';

export default () => (
  <Router>
    <Header title="Weirdness Calcuator" />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/results" component={ResultPage} />
  </Router>
)