import { combineReducers } from 'redux';
import { Type } from './sessionActions';
import * as trainingType from '../training/trainingActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_USER_SUCCESS:
    case Type.REGISTRATION_SUCCESS:
    case Type.LOG_IN_SUCCESS:
      return payload.userData;
    case trainingType.Type.CLOSE_TRANING_SUCCESS:
      return { ...state, haveTraining: false };
    case trainingType.Type.SEND_TRAINING_SUCCESS:
      return { ...state, haveTraining: true };
    case Type.LOG_OUT:
      return null;
    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case Type.GET_USER_SUCCESS:
    case Type.REGISTRATION_SUCCESS:
    case Type.LOG_IN_SUCCESS:
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
    case Type.REGISTRATION_SUCCESS:
    case Type.LOG_IN_SUCCESS:
      return payload.token;
    case Type.LOG_OUT:
      return null;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_USER_ERROR:
    case Type.LOG_IN_ERROR:
    case Type.REGISTRATION_ERROR:
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
