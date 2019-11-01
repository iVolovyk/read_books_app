export const Type = {
  // EXAMPLE: 'EXAMPLE',
  SET_LOGOUT: 'SET_LOGOUT',
};

export const exampleAction = () => {};

export const setLogout = logoutIndicator => ({
  type: Type.SET_LOGOUT,
  logoutIndicator,
});
