import { combineReducers } from 'redux';

import { Type } from './trainingActions';

const trainingId = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.trainingId;
    default:
      return state;
  }
};

const isDone = (state = false, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.isDone;
    default:
      return state;
  }
};

const timeStart = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.timeStart;
    default:
      return state;
  }
};

const timeEnd = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.timeEnd;
    default:
      return state;
  }
};

const avgReadPages = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.avgReadPages;
    default:
      return state;
  }
};

const booksCount = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.booksCount;
    default:
      return state;
  }
};

const unreadCount = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.unreadCount;
    default:
      return state;
  }
};

const books = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.books;
    case Type.POST_CHEKED_SUCCESS: {
      return state.map(book =>
        book.trainingBookId === payload.bookId
          ? { ...book, isRead: payload.checked }
          : book,
      );
    }
    default:
      return state;
  }
};

const allPagesCount = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.allPagesCount;
    default:
      return state;
  }
};

const pagesReadResult = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_TRENING_SUCCESS:
      return payload.pagesReadResult;
    case Type.ADD_RESULT_SUCCESS:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  trainingId,
  isDone,
  timeStart,
  timeEnd,
  avgReadPages,
  booksCount,
  unreadCount,
  books,
  allPagesCount,
  pagesReadResult,
});
