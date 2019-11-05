import { Type } from './booksActions';
import * as training from '../training/trainingActions';

/* для сервера */
// eslint-disable-next-line import/prefer-default-export
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
    default:
      return state;
  }
};
