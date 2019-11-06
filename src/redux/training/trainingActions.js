export const Type = {
  ADD_RESULT_START: 'ADD_RESULT_START',
  ADD_RESULT_SUCCESS: 'ADD_RESULT_SUCCESS',
  ADD_RESULT_FAILURE: 'ADD_RESULT_FAILURE',
  GET_BOOK_START: 'GET_BOOK_START',
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_TRENING_SUCCESS: 'GET_TRENING_SUCCESS',
  GET_TRENING_FAILURE: 'GET_TRENING_FAILURE',
  CLOSE_TRANING_START: 'CLOSE_TRANING_START',
  CLOSE_TRANING_SUCCESS: 'CLOSE_TRANING_SUCCESS',
  CLOSE_TRANING_ERROR: 'CLOSE_TRANING_ERROR',
  SEND_TRAINING_START: 'SEND_TRAINING_START',
  SEND_TRAINING_SUCCESS: 'SEND_TRAINING_SUCCESS',
  SEND_TRAINING_FAILURE: 'SEND_TRAINING_FAILURE',
  POST_CHEKED_START: 'POST_CHEKED_START',
  POST_CHEKED_SUCCESS: 'POST_CHEKED_SUCCESS',
  POST_CHEKED_ERROR: 'POST_CHEKED_ERROR',
};

export const closeTraningStart = () => ({
  type: Type.CLOSE_TRANING_START,
});

export const closeTraningSuccess = data => ({
  type: Type.CLOSE_TRANING_SUCCESS,
  payload: data,
});

export const closeTraningError = error => ({
  type: Type.CLOSE_TRANING_ERROR,
  payload: error,
});

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
