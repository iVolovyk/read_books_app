import { combineReducers } from 'redux';
import { Type } from './loaderActions';

const loaderReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOADER_ON:
      return payload;
    case Type.LOADER_OFF:
      return payload;
    default:
      return state;
  }
};
