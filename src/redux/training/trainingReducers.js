import { combineReducers } from 'redux';

import { Type } from './trainingActions';

const trainingId = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.trainingId;
    case Type.CLOSE_TRANING_SUCCESS:
      return null;
    default:
      return state;
  }
};

const isDone = (state = false, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.isDone;
    case Type.CLOSE_TRANING_SUCCESS:
      return false;
    default:
      return state;
  }
};

const timeStart = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.timeStart;
    case Type.CLOSE_TRANING_SUCCESS:
      return null;
    default:
      return state;
  }
};

const timeEnd = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.timeEnd;
    case Type.CLOSE_TRANING_SUCCESS:
      return null;
    default:
      return state;
  }
};

const avgReadPages = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.avgReadPages;
    case Type.CLOSE_TRANING_SUCCESS:
      return null;
    default:
      return state;
  }
};

const booksCount = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.booksCount;
    case Type.CLOSE_TRANING_SUCCESS:
      return null;
    default:
      return state;
  }
};

const unreadCount = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.unreadCount;
    case Type.CLOSE_TRANING_SUCCESS:
      return null;
    default:
      return state;
  }
};

const books = (state = [], { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.books;
    case Type.CLOSE_TRANING_SUCCESS:
      return [];
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
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.allPagesCount;
    case Type.CLOSE_TRANING_SUCCESS:
      return 0;
    default:
      return state;
  }
};

const pagesReadResult = (state = [], { type, payload }) => {
  switch (type) {
    case Type.SEND_TRAINING_SUCCESS:
    case Type.GET_TRENING_SUCCESS:
      return payload.pagesReadResult;
    case Type.ADD_RESULT_SUCCESS:
      return payload;
    case Type.CLOSE_TRANING_START:
    case Type.CLOSE_TRANING_SUCCESS:
      return [];
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
