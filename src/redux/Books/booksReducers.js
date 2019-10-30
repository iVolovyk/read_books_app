/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { Type } from './booksActions';

const books = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_BOOKS:
      return [payload, ...state];
    default:
      return state;
  }
};

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_BOOK_SUCCESS:
      return [payload, ...state];
    default:
      return state;
  }
};

export const booksReducer = combineReducers({
  books,
  itemsReducer,
});
