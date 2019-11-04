import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from './session/sessionReducers';
import { booksReducer } from './books/booksReducers';
import resultsReducer from './results/resultsReducers';
import loaderReducer from './loader/loaderReducers';
import bookIdReducer from './bookId/bookIdReducer';
import goalReducer from './goal/goalReducers';
import controlsReducer from './controls/controlsReducers';
import trainingReducer from './training/trainingReducers';

// Persist all session
// const persistConfig = {
//   key: 'session',
//   storage,
//   whitelist: ['session'],
// };

// const rootReducer = combineReducers({
//   session: sessionReducer,
//   books: booksReducer,
//   results: resultsReducer,
//   isLoading: loaderReducer,
//   bookIdInSummaryModal: bookIdReducer,
//   goal: goalReducer,
//   componentController: controlsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const enhancer = applyMiddleware(ReduxThunk);

// export const store = createStore(
//   persistedReducer,
//   {},
//   composeWithDevTools(enhancer),
// );

// Persist only token
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  books: booksReducer,
  training: trainingReducer,
  results: resultsReducer,
  isLoading: loaderReducer,
  bookIdInSummaryModal: bookIdReducer,
  goal: goalReducer,
  componentController: controlsReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
