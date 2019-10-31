export const Type = {
  // EXAMPLE: 'EXAMPLE',
  ADD_RESULT: 'ADD_RESULT',
};

export const onSetResult = value => ({
  type: Type.ADD_RESULT,
  payload: value,
});
