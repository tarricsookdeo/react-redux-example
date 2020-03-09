import counterReducer from './counter';
import isAuthenticatedReducer from './isAuthenticated';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  isAuthenticated: isAuthenticatedReducer
});

export default rootReducer;
