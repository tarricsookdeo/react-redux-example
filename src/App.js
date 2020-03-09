import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter From Redux State: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      {isAuthenticated ? <h3>If logged in, show</h3> : ''}
    </div>
  );
}

export default App;
