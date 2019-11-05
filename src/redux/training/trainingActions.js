export const Type = {
  ADD_RESULT_START: 'ADD_RESULT_START',
  ADD_RESULT_SUCCESS: 'ADD_RESULT_SUCCESS',
  GET_BOOK_START: 'GET_BOOK_START',
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_TRENING_SUCCESS: 'GET_TRENING_SUCCESS',
  GET_TRENING_FAILURE: 'GET_TRENING_FAILURE',
  SEND_TRAINING_START: 'SEND_TRAINING_START',
  SEND_TRAINING_SUCCESS: 'SEND_TRAINING_SUCCESS',
  SEND_TRAINING_FAILURE: 'SEND_TRAINING_FAILURE',
};

export const fetchStartAddRes = () => ({
  type: 'ADD_RESULT_START',
});

export const fetchSuccessAddRes = data => ({
  type: Type.ADD_RESULT_SUCCESS,
  payload: data,
});

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

export const sendTrainingStart = () => ({
  type: 'SEND_TRAINING_START',
});

export const sendTrainingSuccess = data => ({
  type: 'SEND_TRAINING_SUCCESS',
  payload: data,
});

export const sendTrainingFailure = error => ({
  type: 'SEND_TRAINING_FAILURE',
  payload: error,
});
// export const
