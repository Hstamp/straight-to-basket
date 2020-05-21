import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { basketReducer } from './reducers';
import TotalBasketContext from './TotalBasketContext';
import { Menu, ReviewOrder, NotFound } from './containers';

const initialState = {
  item: {},
  basket: [],
};

const App = () => {
  /*
  *  state is set by the dispatch function.
  *  The reducer function gives useReducer more flexibility than useState
  *  to perform different kinds of state update.
  */
  const [state, dispatch] = React.useReducer(basketReducer, initialState);
  return (
    /*
    * Passing an object into the value prop so that state and dispatch
    * can be used by any component that requires that context
    */
    <TotalBasketContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <Switch>
          {/* has to match exactly "/" */}
          <Route exact path="/">
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
    </TotalBasketContext.Provider>
  );
};

export default App;
