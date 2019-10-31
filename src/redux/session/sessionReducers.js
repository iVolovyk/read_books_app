import { combineReducers } from 'redux';
import { Type } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const token = (state = '', { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
});
