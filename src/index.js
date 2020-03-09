import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Action - describes what you want to do. Actions are functions that returns an object
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

ReactDOM.render(<App />, document.getElementById('root'));
