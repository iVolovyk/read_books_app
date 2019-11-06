export const Type = {
  SET_ID_BOOK_SUMMARY_MODAL: 'SET_ID_BOOK_SUMMARY_MODAL',
};

export const setIdInSummaryModal = id => ({
  type: Type.SET_ID_BOOK_SUMMARY_MODAL,
  payload: id,
});
