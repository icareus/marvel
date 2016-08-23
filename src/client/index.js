import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { Router, Route, hashHistory } from 'react-router'

import api from './reducers/apiReducer'
import lists from './reducers/listReducer'
import tasks from './reducers/taskReducer'

import App from './containers/app'
import { Character } from './components/character'
import { Chars } from './components/chars'

const initialState = {
  api: {
    lists: 'IDLE',
    tasks: 'IDLE',
  },
  lists: [
  ],
  tasks: [
  ],
};
// TRASH TEST
import { fetchCharacters } from './utils/api'
fetchCharacters('', console.log);
// ergh

const todoStore = createStore(
  combineReducers({ api, lists, tasks }),
  initialState,
  applyMiddleware(createLogger(), thunk)
);

ReactDom.render(
  <Provider store={todoStore}>
    <Router history={hashHistory}>
      <Route component={App} path='/'/>
      <Route component={Chars} path='/characters'/>
      <Route component={Character} path='/characters/:id'/>
    </Router>
  </Provider>, document.getElementById('react-wrapper')
);
