export const Type = {
  ADD_RESULT_START: 'ADD_RESULT_START',
  ADD_RESULT_SUCCESS: 'ADD_RESULT_SUCCESS',
  ADD_RESULT_FAILURE: 'ADD_RESULT_FAILURE',
  GET_BOOK_START: 'GET_BOOK_START',
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_TRENING_SUCCESS: 'GET_TRENING_SUCCESS',
  GET_TRENING_FAILURE: 'GET_TRENING_FAILURE',
};

export const fetchStartAddRes = () => ({
  type: Type.ADD_RESULT_START,
});

export const fetchSuccessAddRes = data => ({
  type: Type.ADD_RESULT_SUCCESS,
  payload: data,
});

export const fetchFailureAddRes = error => ({
  type: Type.ADD_RESULT_FAILURE,
  payload: error,
});

export const fetchSuccessTrening = data => ({
  type: Type.GET_TRENING_SUCCESS,
  payload: data,
});

export const fetchFailureTrening = error => ({
  type: Type.GET_BOOK_FAILURE,
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
