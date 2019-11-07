export const Type = {
  RESET_COMPONENT: 'RESET_COMPONENT',
  SET_LOGOUT: 'SET_LOGOUT',
  SET_SUMMARY_MODAL_ON: 'SET_SUMMARY_MODAL_ON',
  SET_SUMMARY_MODAL_OFF: 'SET_SUMMARY_MODAL_OFF',
  SET_MODAL_CONGRATS_OPEN: 'SET_MODAL_CONGRATS_OPEN',
  SET_MODAL_CONGRATS_CLOSE: 'SET_MODAL_CONGRATS_CLOSE',
  SET_MODAL_NEED_FASTER_OPEN: 'SET_MODAL_NEED_FASTER_OPEN',
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

export const setModalCongratsOpen = () => ({
  type: Type.SET_MODAL_CONGRATS_OPEN,
  payload: true,
});

export const setModalCongratsClose = () => ({
  type: Type.SET_MODAL_CONGRATS_CLOSE,
  payload: false,
});

export const setModalNeedFasterOpen = () => ({
  type: Type.SET_MODAL_NEED_FASTER_OPEN,
  payload: true,
});
