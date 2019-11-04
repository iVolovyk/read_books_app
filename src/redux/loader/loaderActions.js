export const Type = {
  LOADER_ON: 'isLoading/LOADER_ON',
  LOADER_OFF: 'isLoading/LOADER_OFF',
};

export const loaderOn = () => ({
  type: Type.LOADER_ON,
});
export const loaderOff = () => ({
  type: Type.LOADER_OFF,
});
