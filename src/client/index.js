import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { Router, Route, hashHistory } from 'react-router'

import characters from './reducers/charReducer'
// import lists from './reducers/listReducer'
// import tasks from './reducers/taskReducer'

import App from './containers/app'
import { Character } from './components/character'
import { Chars } from './components/chars'

const initialState = {
  // api is obsolete since UiBar is controlled
  // api: {
  //   heroes: 'IDLE',
  //   tasks: 'IDLE',
  // },
  // later : add visibility filter ?
  // filter: {
  //   amount: 0,
  //   specifier: 0,
  // },
  characters: [
  ],
};
// TRASH TEST
import { fetchCharacters } from './utils/api'
fetchCharacters('', console.log);
// ergh

const Store = createStore(
  // filter later ?
  combineReducers({ characters }),
  initialState,
  applyMiddleware(createLogger(), thunk)
);

ReactDom.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route component={App} path='/'>
        <Route component={Chars} path='/characters'/>
        <Route component={Character} path='/characters/:id'/>
      </Route>
    </Router>
  </Provider>, document.getElementById('react-wrapper')
);
