import { combineReducers } from 'redux';
// eslint-disable-next-line
import { Type } from './trainingActions';

// eslint-disable-next-line
const books = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
// eslint-disable-next-line
const booksCount = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
// eslint-disable-next-line
const unreadCount = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
// eslint-disable-next-line
const readPagesCount = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
// eslint-disable-next-line
const avgReadPages = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
// eslint-disable-next-line
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
