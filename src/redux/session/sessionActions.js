export const Type = {
  LOGIN_WITH_GOOGLE: 'LOGIN_WITH_GOOGLE',
  GET_USER: 'GET_USER',
  GET_USER_ERROR: 'GET_USER_ERROR',
  REGISTRATION_START: 'REGISTRATION_START',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'REGISTRATION_ERROR',
};

/*
 * Google
 */

export const logInWithGoogle = token => ({
  type: Type.LOGIN_WITH_GOOGLE,
  payload: token,
});

export const getUserWithGoogle = data => ({
  type: Type.GET_USER,
  payload: data,
});

export const getUserError = error => ({
  type: Type.GET_USER_ERROR,
  payload: error,
});

/*
 * Registration
 */

export const registrationStart = () => ({
  type: Type.REGISTRATION_START,
});
export const registrationSuccess = data => ({
  type: Type.REGISTRATION_SUCCESS,
  payload: data,
});
export const registrationError = () => ({
  type: Type.REGISTRATION_ERROR,
});
