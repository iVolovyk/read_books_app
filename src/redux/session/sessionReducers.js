import { combineReducers } from 'redux';

const user = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
// const isLoading = (state = {}, { type, payload }) => {
//   switch (type) {
//     default:
//       return state;
//   }
// };
// const bookIdInSummaryModal = (state = {}, { type, payload }) => {
//   switch (type) {
//     default:
//       return state;
//   }
// };
// const componentController = (state = {}, { type, payload }) => {
//   switch (type) {
//     default:
//       return state;
//   }
// };

export default combineReducers({
  user,
  authenticated,
});

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
