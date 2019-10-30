export const Type = {
  REGISTRATION_START: 'REGISTRATION_START',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'REGISTRATION_ERROR',
};

export const registrationStart = () => ({
  type: Type.REGISTRATION_START,
});
export const registrationSuccess = data => ({
  type: Type.REGISTRATION_SUCCESS,
  payload: data,
});
export const registrationError = () => ({
  type: Type.REGISTRATION_START,
});
