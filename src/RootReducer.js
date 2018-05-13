import { combineReducers } from 'redux';

import register from './reducers/register';
import login from './reducers/login';
import logout from './reducers/logout';

export default combineReducers({
  register,
  login,
  logout
});