import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.scss';
import Home from './containers/Home';
import * as serviceWorker from './serviceWorker';
import data from './api';
import reducer from './reducers'

const initialState = { 
  data: {
    ...data,
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  $container 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
