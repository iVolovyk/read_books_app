/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { Type } from './BooksActions';

const books = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_BOOKS:
      return [payload, ...state];
    default:
      return state;
  }
};

export const BooksReducer = combineReducers({
  books,
});
