import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { Router, Route, browserHistory } from 'react-router'

import characters from './reducers/charReducer'
import { fetchCharacters } from './utils/api'

import App from './containers/app'
import Character from './components/character'
import Chars from './components/chars'

const initialState = {
  characters: [],
};

const Store = createStore(
  // filter later ?
  combineReducers({ characters }),
  initialState,
  applyMiddleware(createLogger(), thunk)
);

ReactDom.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route component={App} path='/'>
        <Route component={Chars} path='/characters'/>
        <Route component={Character} path='/characters/:id'/>
      </Route>
    </Router>
  </Provider>, document.getElementById('react-wrapper')
);
