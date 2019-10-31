import { combineReducers } from 'redux';
import { Type } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_USER:
      return payload;
    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_WITH_GOOGLE:
      return true;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_WITH_GOOGLE:
      return payload;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_USER_ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  error,
});
