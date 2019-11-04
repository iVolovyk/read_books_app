export const Type = {
  ADD_RESULT: 'ADD_RESULT',
  GET_BOOK_START: 'GET_BOOK_START',
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_TRENING_SUCCESS: 'GET_TRENING_SUCCESS',
  GET_TRENING_FAILURE: 'GET_TRENING_FAILURE',
  POST_CHEKED_START: 'POST_CHEKED_START',
  POST_CHEKED_SUCCESS: 'POST_CHEKED_SUCCESS',
  POST_CHEKED_ERROR: 'POST_CHEKED_ERROR',
};

export const fetchSuccessTrening = data => ({
  type: Type.GET_TRENING_SUCCESS,
  payload: data,
});

export const fetchFailureTrening = error => ({
  type: 'GET_BOOK_FAILURE',
  payload: error,
});

export const onSetResult = value => ({
  type: Type.ADD_RESULT,
  payload: value,
});

export const fetchStart = () => ({
  type: 'GET_BOOK_START',
});

export const fetchSuccess = data => ({
  type: 'GET_BOOK_SUCCESS',
  payload: data,
});

export const fetchFailure = error => ({
  type: 'GET_BOOK_FAILURE',
  payload: error,
});

export const chekBookStart = () => ({
  type: Type.POST_CHEKED_START,
});

export const chekBookSuccess = chekBookInfo => ({
  type: Type.POST_CHEKED_SUCCESS,
  payload: chekBookInfo,
});

export const chekBookError = error => ({
  type: Type.POST_CHEKED_ERROR,
  payload: {
    error,
  },
});
