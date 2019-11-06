export const Type = {
  ADD_DAY_NEED: 'ADD_DAY_NEED',
  ADD_BOOK_NEED_READ: 'ADD_BOOK_NEED_READ',
};

export const addDayNeed = data => ({
  type: Type.ADD_DAY_NEED,
  payload: data,
});

export const addBookNeedRead = data => ({
  type: Type.ADD_BOOK_NEED_READ,
  payload: data,
});
