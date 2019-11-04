export const Type = {
  RESET_COMPONENT: 'RESET_COMPONENT',
  SET_LOGOUT: 'SET_LOGOUT',
  SET_SUMMARY_MODAL_ON: 'SET_SUMMARY_MODAL_ON',
  SET_SUMMARY_MODAL_OFF: 'SET_SUMMARY_MODAL_OFF',
  SET_MODAL_CONGRATS_OPEN: 'SET_MODAL_CONGRATS_OPEN',
};

export const exampleAction = () => {};

export const setLogout = logoutIndicator => ({
  type: Type.SET_LOGOUT,
  logoutIndicator,
});

export const setSummaryModalOn = value => ({
  type: Type.SET_SUMMARY_MODAL_ON,
  payload: value,
});

export const setSummaryModalOFF = () => ({
  type: Type.SET_SUMMARY_MODAL_OFF,
  payload: false,
});

export const resetComponentControls = () => ({
  type: Type.RESET_COMPONENT,
});
