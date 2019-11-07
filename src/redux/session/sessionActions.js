export const Type = {
  LOGIN_WITH_GOOGLE: 'session/LOGIN_WITH_GOOGLE',
  GET_USER_START: 'session/GET_USER_START',
  GET_USER_SUCCESS: 'session/GET_USER_SUCCESS',
  GET_USER_ERROR: 'session/GET_USER_ERROR',
  REGISTRATION_START: 'session/REGISTRATION_START',
  REGISTRATION_SUCCESS: 'session/REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'session/REGISTRATION_ERROR',
  LOG_IN_START: 'session/LOG_IN_START',
  LOG_IN_SUCCESS: 'session/LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'session/LOG_IN_ERROR',
  GET_TOKEN: 'session/GET_TOKEN',
  LOG_OUT: 'session/LOG_OUT',
};

/*
 * Google
 */

export const logInWithGoogle = token => ({
  type: Type.LOGIN_WITH_GOOGLE,
  payload: token,
});

/*
 * Get Current User
 */

export const getUserStart = () => ({
  type: Type.GET_USER_START,
});

export const getUserSuccess = response => ({
  type: Type.GET_USER_SUCCESS,
  payload: response,
});

export const getUserError = error => ({
  type: Type.GET_USER_ERROR,
  payload: error,
});

export const getToken = token => ({
  type: Type.GET_TOKEN,
  payload: token,
});

/*
 * Registration
 */

export const registrationStart = () => ({
  type: Type.REGISTRATION_START,
});
export const registrationSuccess = response => ({
  type: Type.REGISTRATION_SUCCESS,
  payload: response,
});
export const registrationError = error => ({
  type: Type.REGISTRATION_ERROR,
  payload: error,
});

/*
 * LogIn
 */

export const loginStart = () => ({
  type: Type.LOG_IN_START,
});
export const loginSuccess = response => ({
  type: Type.LOG_IN_SUCCESS,
  payload: response,
});
export const loginError = error => ({
  type: Type.LOG_IN_ERROR,
  payload: error,
});

/*
 * LogOut
 */

export const logOut = () => ({
  type: Type.LOG_OUT,
});
