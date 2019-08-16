import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    count: 1,
};

const reducer = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case 'INCREMENT':
          return {
            
              count:state.count + 1,
            
          }
          case 'DECREMENT':
          return {
            
              count:state.count - 1,
            
          } 
          default: 
          return state;
      }
}

const store = createStore (reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
