import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ACTION - describes what you want to do. Actions are functions that returns an object
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

// RECUCER - takes in an initial state and an action, describes how state will change
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
