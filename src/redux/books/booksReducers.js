import { Type } from './booksActions';
import * as training from '../training/trainingActions';

export const example = () => {};

/* для сервера */
export const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case training.Type.GET_BOOK_SUCCESS:
      return payload;
    case training.Type.GET_BOOK_FAILURE:
      return [];
    case Type.ADD_BOOKS:
      return [payload, ...state];
    case Type.ADD_BOOK_SUCCESS:
      return [payload.book, ...state];
    case Type.CHANGE_BOOKS_STATS_SUCCESS:
      return state.map(i => (i._id === payload._id ? { ...payload } : i));
    default:
      return state;
  }
};
