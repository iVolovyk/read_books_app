export const Type = {
  SET_SUMMARY_MODAL_ON: 'SET_SUMMARY_MODAL_ON',
  SET_SUMMARY_MODAL_OFF: 'SET_SUMMARY_MODAL_OFF',
};

export const setSummaryModalOn = value => ({
  type: Type.SET_SUMMARY_MODAL_ON,
  payload: value,
});

export const setSummaryModalOFF = () => ({
  type: Type.SET_SUMMARY_MODAL_OFF,
  payload: false,
});
