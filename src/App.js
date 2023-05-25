import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import HomePage from './pages/HomePage';
import ExportPage from './pages/ExportPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/export" component={ExportPage} />
      </Switch>
    </Router>
  );
}

export default App;
