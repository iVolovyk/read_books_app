import { combineReducers } from 'redux';
import { Type } from './trainingActions';

const books = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const booksCount = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const unreadCount = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
const readPagesCount = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
const avgReadPages = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const pagesReadResult = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
export default combineReducers({
  books,
  booksCount,
  unreadCount,
  readPagesCount,
  avgReadPages,
  pagesReadResult,
});
