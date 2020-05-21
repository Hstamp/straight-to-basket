import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Menu, ReviewOrder, NotFound } from './containers';

const App = () => (
  <Router>
    <Switch>
      {/* has to match exactly "/" */}
      <Route exact path="/">
        <Menu />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/review-order">
        <ReviewOrder />
      </Route>
      {/* * always matches so can be used for 404 pages */}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
