import { combineReducers } from 'redux';
import { Type } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_USER:
      return payload;
    case Type.LOG_OUT:
      return null;
    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case Type.LOGIN_WITH_GOOGLE:
      return true;
    case Type.LOG_OUT:
      return false;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_WITH_GOOGLE:
      return payload;
    case Type.LOG_OUT:
      return null;
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
