import { Type } from './loaderActions';
import * as SessionType from '../session/sessionActions';
import * as BooksType from '../books/booksActions';
import * as traning from '../training/trainingActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON: // Включить спиннер
    case SessionType.Type.REGISTRATION_START:
    case SessionType.Type.LOG_IN_START:
    case BooksType.Type.ADD_BOOK_START:
    case traning.Type.ADD_RESULT_START:
    case traning.Type.GET_BOOK_START:
      return true;
    case Type.LOADER_OFF: // Выключить спиннер
    case SessionType.Type.REGISTRATION_SUCCESS:
    case SessionType.Type.REGISTRATION_ERROR:
    case SessionType.Type.LOG_IN_SUCCESS:
    case SessionType.Type.LOG_IN_ERROR:
    case BooksType.Type.ADD_BOOK_SUCCESS:
    case BooksType.Type.ADD_BOOK_ERROR:
    case traning.Type.GET_BOOK_SUCCESS:
    case traning.Type.GET_BOOK_FAILURE:
    case traning.Type.ADD_RESULT_SUCCESS:
    case traning.Type.ADD_RESULT_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
