import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducer from './session/sessionReducers';
// импортируем сюда свои редюсеры

// const rootReducer = combineReducers({
//   session: (prevState = {}, action) => {
//     return { a: 1 };
//   },
//   books: (prevState = {}, action) => {
//     return { a: 1 };
//   },
//   result: (prevState = {}, action) => {
//     return { a: 1 };
//   },
//   isLoading: (prevState = {}, action) => {
//     return { a: 1 };
//   },
//   bookIdInSummaryModal: (prevState = {}, action) => {
//     return { a: 1 };
//   },
//   goal: (prevState = {}, action) => {
//     return { a: 1 };
//   },
//   componentController: (prevState = {}, action) => {
//     return { a: 1 };
//   },
// });

const rootReducer = combineReducers({
  session: reducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
