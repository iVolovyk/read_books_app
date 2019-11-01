import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import sessionReducer from './session/sessionReducers';
import booksReducer from './books/booksReducers';
import resultsReducer from './results/resultsReducers';
import loaderReducer from './loader/loaderReducers';
import bookIdReducer from './bookId/bookIdReducer';
import goalReducer from './goal/goalReducers';
import controlsReducer from './controls/controlsReducers';
import trainingReducer from './training/trainingReducers';

const rootReducer = combineReducers({
  session: sessionReducer,
  books: booksReducer,
  training: trainingReducer,
  results: resultsReducer,
  isLoading: loaderReducer,
  bookIdInSummaryModal: bookIdReducer,
  goal: goalReducer,
  componentController: controlsReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
